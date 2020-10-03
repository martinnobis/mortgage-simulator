import React from "../../../node_modules/react"

import { emailMailto } from "../utils"

const Faq = () => {
    return (
        <div>
            <h1>FAQ</h1>
            <h2>How is interest calculated?</h2>
            <p>Interest on the outstanding balance is calculated in the following way:</p>
            <ul>
                <li>
                    Each day, the loan balance is multiplied by the interest rate and divided by 365 days (even in leap years). This amount is the interest accrued for that day.
                </li>
                <li>
                    On the start date and every day thereafter, the interest accrued is accumulated up until the same date the next month. This amount is then deducted from the loan balance. If you’ve set the repayment frequency to either fortnightly or weekly, then the interest is still accumulated and charged monthly, but your minimum repayments will change accordingly.
                    </li>
            </ul>
            <strong>Why does the interest amount change in some months?</strong>
            <p>The interest amount can also change depending on the number of days in the month. Because interest is calculated daily, the more days in the month the higher the interest amount, and vice versa.</p>

            <h2>What do the fortnightly/weekly repayment frequency settings change?</h2>
            <p>
                This will halve or quarter your minimum monthly repayment and the amount will be deducted from the outstanding loan balance accordingly. It does not change how interest is accumulated or charged, which is always done monthly.
                There are 26 fortnights in a year, not 24 (12 * 2), and there are 52 weeks in a year, not 48 (12 * 4), which means that you pay more money in the year than you would if you just made 12 monthly repayments.
                Therefore less interest is charged and the loan is paid off faster.
            </p>

            <h2>What if my bank charges interest differently?</h2>
            <p>
                Home Loan Simulator's goal is to become a useful tool for everybody no matter where they're from or how their particular bank operates.
                New features in the development pipeline will allow you to change how and when interest is accrued and charged.
                If you'd like to contribute to this feature, then please <a href={emailMailto}>send us an email</a>, your help would be greatly appreciated.
                </p>
        </div>
    )

}

export default Faq