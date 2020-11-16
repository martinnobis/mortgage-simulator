import React, { useState, useEffect } from '../../node_modules/react';

import Row from '../../node_modules/react-bootstrap/Row'
import Col from '../../node_modules/react-bootstrap/Col'

import { FiPlus, FiMinus } from 'react-icons/fi';

const locale = "en-US"
const formatCurrency = Intl.NumberFormat(locale, { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 2 }).format

const pStyle = { "marginTop": ".5em", "marginBottom": ".5em" }

const Day = (props) => {
    return (
        <Row>
            <Col xs="auto">
                <p style={{ "fontFamily": "Kreon" }}>{props.date}</p>
            </Col>
            <Col xs={12} sm>
                <p style={{ "fontFamily": "Kreon" }}>Balance</p>
                <p>{formatCurrency(props.balance / 100)}</p>
            </Col>
            <Col xs={12} sm>
                <p style={{ "fontFamily": "Kreon" }}>Interest</p>
                <p style={pStyle}>Accrued today: {formatCurrency(props.interestToday / 100)}</p>
                <p style={pStyle}>Accrued this period: {formatCurrency(props.interestPeriod / 100)}</p>
                <p style={pStyle}>Total accrued: {formatCurrency(props.interestTotal / 100)}</p>
            </Col>
            <Col xs={12} sm>
                <p style={{ "fontFamily": "Kreon" }}>Payments</p>
                {
                    props.payments.map((e, i) => {
                        if (e > 0) { return <p key={i} className="change-up" style={pStyle}><FiPlus />{formatCurrency(Math.abs(e / 100))} (interest)</p> }
                        else { return <p key={i} className="change-down" style={pStyle}><FiMinus />{formatCurrency(Math.abs(e / 100))} (repayment)</p> }
                    })
                }
            </Col>
        </Row>
    )
}

export default Day;