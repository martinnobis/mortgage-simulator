import React, { useState, useEffect } from "../../node_modules/react"

import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"

import { GoArrowUp, GoArrowDown } from 'react-icons/go';

const locale = "en-US"
const formatCurrency = Intl.NumberFormat(locale, { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 2 }).format

const ChangeLabel = (props) => {
    const upChange = <span className="change-up"> <GoArrowUp />{Math.abs(props.change.toFixed(2))} </span>
    const downChange = <span className="change-down"> <GoArrowDown />{Math.abs(props.change.toFixed(2))} </span>

    return (
        <span>
            {
                props.change !== 0 ?
                    props.change > 0 ? upChange : downChange
                    :
                    ""
            }
        </span>
    )
}

const RepaymentLabel = (props) => {
    const [diffMinRepayments, setDiffMinRepayments] = useState(0)
    const [prevMinRepayments, setPrevMinRepayments] = useState(props.minRepayments)

    useEffect(() => {
        const diff = props.minRepayments - prevMinRepayments
        if (Math.abs(diff) > 0.01) {
            setDiffMinRepayments(diff)
        }
        setPrevMinRepayments(props.minRepayments)
    }, [props, prevMinRepayments])

    return (
        <Row className="align-items-end pt-1">
            <Col className="d-flex justify-content-center align-middle">
                <span>Minimum repayments: {props.minRepayments > 0 ? `${formatCurrency(props.minRepayments)}` : ""}</span>
                <ChangeLabel change={diffMinRepayments} />
            </Col>
        </Row>
    )
}

export default RepaymentLabel