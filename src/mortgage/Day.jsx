import React, { useState, useEffect } from '../../node_modules/react';

import Row from '../../node_modules/react-bootstrap/Row'
import Col from '../../node_modules/react-bootstrap/Col'

import { FiPlus, FiMinus } from 'react-icons/fi';

import { formatCurrency } from "./utils"

const pStyle = { "marginTop": ".5em", "marginBottom": ".5em" }

const pStyleUp = {
    ...pStyle,
    fontWeight: "bold",
    color: "#E8453F"
}

const pStyleDown = {
    ...pStyle,
    fontWeight: "bold",
    color: "#1A9A92"
}

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
                        if (e.amount > 0) {
                            return (
                                <p key={i} style={pStyleUp}>
                                    <span><FiPlus />{formatCurrency(Math.abs(e.amount / 100))} ({e.name})</span>
                                </p>
                            )
                        }
                        else {
                            return (
                                <p key={i} style={pStyleDown}>
                                    <span><FiMinus />{formatCurrency(Math.abs(e.amount / 100))} ({e.name}) </span>
                                </p>
                            )
                        }
                    })
                }
            </Col>
        </Row>
    )
}

export default Day;