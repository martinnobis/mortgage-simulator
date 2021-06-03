const calcMonthlyPayment = (principal, months, rate) => {
    const monthlyRate = rate / 1200
    return (principal * monthlyRate) / (1 - (Math.pow((1 + monthlyRate), months * -1)))
}

const calcFortnightlyPayment = (principal, months, rate) => {
    return calcMonthlyPayment(principal, months, rate) / 2
}

const calcWeeklyPayment = (principal, months, rate) => {
    return calcMonthlyPayment(principal, months, rate) / 4
}

export const calcMinPayment = (amountBorrowed, rate, term, repaymentFreq) => {
    switch (repaymentFreq) {
        case "weekly":
            return calcWeeklyPayment(amountBorrowed, term * 12, rate)
        case "fortnightly":
            return calcFortnightlyPayment(amountBorrowed, term * 12, rate)
        default:
            return calcMonthlyPayment(amountBorrowed, term * 12, rate)
    }
}

export const isSameDay = (d1, d2) => {
    return (d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate())
}

const getNextDate = (day, period) => {
    // Return a new Date with the given period added to it
    switch (period) {
        case "daily":
            return new Date(day.getDate() + 1)
        case "weekly":
            return new Date(day.getFullYear(), day.getMonth(), day.getDate() + 7)
        case "fortnightly":
            return new Date(day.getFullYear(), day.getMonth(), day.getDate() + 14)
        case "monthly":
            return new Date(day.getFullYear(), day.getMonth() + 1, day.getDate())
        case "yearly":
            return new Date(day.getFullYear() + 1, day.getMonth(), day.getDate())
        default:
            return new Date(day.getFullYear(), day.getMonth() + 1, day.getDate()) // Monthly
    }
}

class RegularPayment {
    constructor(name, amount, period, start, end) {
        this.name = name
        this.amount = amount
        this.period = period
        this.start = start
        this.end = end
        this.payments = [{ amount: this.amount, date: this.start }] // add first payment

        // generate payments
        let d = getNextDate(this.start, this.period)
        while (d.valueOf() < this.end.valueOf()) {
            this.payments.push({ amount: this.amount, date: d })
            d = getNextDate(d, this.period)
        }
    }

    isPaymentDay = (day) => {
        for (let payment of this.payments) {
            if (isSameDay(day, payment.date)) {
                return true
            }
        }
        return false
    }
}

export class Day {
    constructor(balance, date, rate, payments, interestPeriod, interestTotal) {
        this.balance = balance
        this.date = date
        this.rate = rate
        this.payments = payments

        this.endBalance = payments.map((p) => p.amount).reduce(((a, b) => a + b), balance)
        this.interestToday = (this.endBalance * this.rate) / 100 / 365
        this.interestPeriod = interestPeriod + this.interestToday
        this.interestTotal = interestTotal + this.interestToday
    }
}

export const generateDays = async(amountBorrowed, rate, term, repaymentFreq, repayments, startDate) => {
    if (amountBorrowed <= 0 || rate <= 0 || term <= 0) { return [] }

    amountBorrowed *= 100 // put them into cents
    repayments *= 100

    let days = []
    const endDate = new Date(startDate.getFullYear() + term, startDate.getMonth() + 1, startDate.getDate() + 1)

    let interest = new RegularPayment("Interest", 0, "monthly", getNextDate(startDate, "monthly"), endDate)
    let interestTotal = 0

    const repayment = new RegularPayment("Repayments", -repayments, repaymentFreq, getNextDate(startDate, repaymentFreq), endDate)
    let repaymentsTotal = 0
    let balance = amountBorrowed
    let today = new Date(+startDate)

    while (today.valueOf() < endDate.valueOf() && balance > 0.01) {

        let todaysPayments = []
        if (repayment.isPaymentDay(today)) {
            if (balance < -repayment.amount) {
                // last repayment day, hooray!!
                todaysPayments.push({ name: repayment.name, amount: -balance - interest.amount })
                repaymentsTotal += (-balance - interest.amount)

                // also pay the last bit of interest at the same time
                todaysPayments.push({ name: interest.name, amount: interest.amount })
                interest.amount = 0
            } else {
                todaysPayments.push({ name: repayment.name, amount: repayment.amount })
                repaymentsTotal += repayment.amount
            }
        }

        if (interest.isPaymentDay(today)) {
            todaysPayments.push({ name: interest.name, amount: interest.amount })
            interest.amount = 0
        }

        let day = new Day(
            balance,
            new Date(+today),
            rate,
            todaysPayments,
            interest.amount,
            interestTotal
        )
        days.push(day)

        interest.amount += day.interestToday
        interestTotal += day.interestToday
        balance = day.endBalance
        today.setDate(today.getDate() + 1) // increment day
    }
    return { days, interestTotal, repaymentsTotal }
}