import React, { useState, useEffect } from "../../node_modules/react"

import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/esm/Button'
import Spinner from 'react-bootstrap/esm/Spinner'
import Form from 'react-bootstrap/esm/Form'
import Dropdown from 'react-bootstrap/esm/Dropdown'
import DropdownButton from 'react-bootstrap/esm/DropdownButton'

import { AiOutlineClose } from 'react-icons/ai';

import {
    AmountBorrowedInput,
    RateInput,
    TermInput,
    RepaymentFreqInput,
    Repayments,
    StartDateInput, ExtraInputs
} from "./UserInputs"

import RepaymentLabel from "./RepaymentLabel"

import { generateDays } from "./mortgage"

const SimulatorInput = (props) => {
    const [isSimulating, setSimulating] = useState(false)

    useEffect(() => {
        if (isSimulating) {
            generateDays(
                props.amountBorrowed, props.rate, props.term, props.repaymentFreq, props.repayments, props.startDate
            ).then(
                (days) => {
                    props.handleDaysChange(days);
                    setSimulating(false)
                })
        }
    }, [props, isSimulating]);

    return (
        <Row className="pb-3 justify-content-between">
            <Col>
                <Row>
                    <Col>
                        <AmountBorrowedInput value={props.amountBorrowed} handleChange={(v) => props.handleAmountBorrowedChange(v)} />
                        <RateInput value={props.rate} handleChange={(v) => props.handleRateChange(v)} />
                        <TermInput value={props.term} maxTerm={30} handleChange={(v) => props.handleTermChange(parseInt(v))} />
                        <RepaymentFreqInput value={props.repaymentFreq} handleChange={(v) => props.handleRepaymentFreqChange(v)} />
                        <RepaymentLabel minRepayments={props.minRepayments} />
                        <Repayments
                            value={props.repayments}
                            minRepayments={props.minRepayments}
                            handleResetClick={() => props.handleResetClick()}
                            handleChange={(v) => props.handleRepaymentsChange(v)}
                        />
                        <StartDateInput startDate={props.startDate} handleChange={(v) => props.handleStartDateChange(v)} />
                        {/* {props.extraInputs.map((e, i) => <ExtraInputs key={i} {...e} />)} */}
                        <Button className="mt-1" size="lg" block variant="primary" disabled={isSimulating} onClick={() => setSimulating(true)}>
                            {isSimulating ?
                                <Spinner as="span" animation="border" size="lg" role="status" aria-hidden="true" />
                                :
                                "Click to simulate"}
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default SimulatorInput