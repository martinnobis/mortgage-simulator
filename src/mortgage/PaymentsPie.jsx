import React, { useState, useEffect } from 'react';

import Pie from 'react-apexcharts'

import { formatCurrency } from "./utils"

const PaymentsPie = (props) => {

    const [series, setSeries] = useState([660000 - 241000, 241000])
    const [options, setOptions] = useState({
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Total loan repayments', 'Total interest'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    })

    return (
        <Pie options={options} series={series} type="pie" width={380} />

    )
}

export default PaymentsPie