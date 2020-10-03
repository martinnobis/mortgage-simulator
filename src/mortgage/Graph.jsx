import React, { useState, useEffect } from '../../node_modules/react';

import Chart from 'react-apexcharts'

const locale = "en-AU"
const formatCurrency = Intl.NumberFormat(locale, { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format
const formatDate = Intl.DateTimeFormat(locale).format

const Graph = (props) => {
    const [earliestStartDate, setEarliestStartDate] = useState(new Date())
    const [latestEndDate, setLatestEndDate] = useState(new Date())
    const [filteredDaysOfDays, setFilteredDaysOfDays] = useState([])

    // const monthSnapshots = props.days.filter((e) => e.date.getDate() === 1)
    // const yearSnapshots = props.days.filter((e) => e.date.getDate() === 1 && e.date.getMonth() === 0)

    // const newArr = props.daysOfDays[0].filter((value, index) => {
    //     return index % 90 === 0;
    // });

    useEffect(() => {
        let temp = props.daysOfDays.map((d) => {
            return d.filter((_, index) => {
                return index % 90 === 0;
            })
        })
        setFilteredDaysOfDays(temp)
    }, [props])

    useEffect(() => {
        let temp = earliestStartDate
        for (const days of props.daysOfDays) {
            if (days[0].date.valueOf() < earliestStartDate.valueOf()) {
                temp = days[0].date
            }
        }
        setEarliestStartDate(temp)
    }, [props, earliestStartDate])

    useEffect(() => {
        let temp = latestEndDate
        for (const days of props.daysOfDays) {
            if (days[days.length - 1].date.valueOf() > latestEndDate.valueOf()) {
                temp = days[days.length - 1].date
            }
        }
        setLatestEndDate(temp)
    }, [props, latestEndDate])

    const options = {
        chart: {
            id: 'apexchart-example'
        },
        // xaxis: {
        //     type: "datetime",
        //     categories: yearSnapshots.map((e) => formatDate(e.date))
        // },
        yaxis: [{
            title: {
                text: "Balance"
            }
        }, {
            opposite: true,
            title: {
                text: "Interest Accrued Today"
            }
        }],
        toolbar: {
            tools: {
                pan: false
            }
        }
    }
    // const series = [{
    //     name: "Balance",
    //     data: yearSnapshots.map((e) => (e.balance / 100).toFixed(2)),
    //     type: "bar"
    // },
    // {
    //     name: "Interest Accrued Today",
    //     data: yearSnapshots.map((e) => (e.interestToday / 100).toFixed(2)),
    //     type: "line"
    // }
    // ]

    const series2 = props.daysOfDays.map((d) => {
        const yearSnapshots = d.filter((e) => e.date.getDate() === 1 && e.date.getMonth() === 0)
        return {
            name: "Balance", data: [yearSnapshots.map((e) => (e.balance / 100).toFixed(2))]
        }
    })

    const series3 = filteredDaysOfDays.map((d) => {
        return {
            data: d.map(e => ({ x: e.date, y: (e.balance / 100).toFixed(2) }))
        }
    })

    const series4 = [
        { data: [{ x: "14/09/20", y: 12 }, { x: "18/09/20", y: 7 }, { x: "19/09/20", y: 2 }] }, // takes the x-axis length (beginnings and ends) of the first series always
        { data: [{ x: "18/09/20", y: null }, { x: "19/09/20", y: 5 }, { x: "20/09/20", y: 15 }] }
    ]

    return (
        <Chart options={options} series={series4} width="100%" height="500px" />
    )
}

export default Graph