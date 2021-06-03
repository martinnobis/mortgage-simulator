import React, { useState, useEffect } from '../../node_modules/react';

import Chart from 'react-apexcharts'

const locale = "en-AU"
const formatCurrency = Intl.NumberFormat(locale, { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format
const formatDate = Intl.DateTimeFormat(locale).format

const Graph = (props) => {
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
        }],
        toolbar: {
            tools: {
                pan: false
            }
        }
    }

    const [balanceSeries, setBalanceSeries] = useState([])
    const [paymentsSeries, setPaymentsSeries] = useState([])

    useEffect(() => {
        let temp = props.days.filter((_, index) => {
            return index % 90 === 0
        }).map((d) => {
            return { x: formatDate(d.date), y: (d.balance / 100).toFixed(2) }
        })
        setBalanceSeries({ name: "Balance", data: temp })

        let temp2 = props.days.filter((d) => {
            return d.payments.length > 0
        })
        // }).map((d) => {
        //     return d.payments[0].amount
        // })
        setPaymentsSeries({ name: "Payments", data: temp2.map((d) => d.payments[0]) })
    }, [props.days])

    return (
        <Chart options={options} series={[paymentsSeries]} width="100%" height="500px" />
    )
}

export default Graph