import React, { useState, useEffect } from "../../node_modules/react"

import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/esm/Form'
import Dropdown from 'react-bootstrap/esm/Dropdown'
import DropdownButton from 'react-bootstrap/esm/DropdownButton'

import {
    AmountBorrowedInputRow,
    RateInputRow,
    TermInput,
    RepaymentFreqInput,
    Repayments,
    StartDateInput,
    LoadButton,
    ChangeTable,
    ChangeCard
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
                ({ days, interestTotal, repaymentsTotal }) => {
                    props.handleDaysChange(days)
                    props.handleInterestTotalChange(interestTotal)
                    props.handleRepaymentsTotalChange(repaymentsTotal)
                    setSimulating(false)
                })
        }
    }, [props, isSimulating]);

    return (
        <div>
            {/* <h2>Start with your Mortgage Details</h2>
            <Row className="justify-content-center">
                <p>
                    Duis placerat justo non interdum luctus. Nunc mattis malesuada quam sit amet facilisis. Cras quis sapien eu ex aliquet vestibulum. Quisque congue in leo eget eleifend. Ut convallis pretium ex, at venenatis arcu imperdiet non. Quisque elementum neque quam, sit amet bibendum neque luctus ac. Suspendisse pulvinar magna neque, ac rutrum libero accumsan sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in fermentum tortor, at maximus ipsum. Sed iaculis sapien orci, id consequat urna mollis a.
                </p>
            </Row> */}
            <Row className="pb-3 justify-content-center">
                <Col xs={12} sm={9} md={6}>
                    <AmountBorrowedInputRow value={props.amountBorrowed} handleChange={(v) => props.handleAmountBorrowedChange(v)} />
                    <RateInputRow value={props.rate} handleChange={(v) => props.handleRateChange(v)} />
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
                </Col>
            </Row>
            {/* <h2>Add a Change</h2>
            <Row className="justify-content-center">
                <p>
                    Duis placerat justo non interdum luctus. Nunc mattis malesuada quam sit amet facilisis. Cras quis sapien eu ex aliquet vestibulum. Quisque congue in leo eget eleifend. Ut convallis pretium ex, at venenatis arcu imperdiet non. Quisque elementum neque quam, sit amet bibendum neque luctus ac. Suspendisse pulvinar magna neque, ac rutrum libero accumsan sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in fermentum tortor, at maximus ipsum. Sed iaculis sapien orci, id consequat urna mollis a.
                </p>
            </Row>
            <Row>
                {props.changes.map((e, i) => <ChangeCard key={i} {...e} />)}
                <ChangeTable
                    changes={props.changes}
                    handleNewRow={props.handleNewChange}
                />
            </Row> */}
            <Row className="pb-3 justify-content-center" style={{ "position": "sticky", "bottom": 0 }}>
                <Col xs={12} sm={9} md={8}>
                    <LoadButton
                        className="mt-1"
                        size="lg"
                        block
                        variant="primary"
                        label="Click to simulate"
                        onClick={() => setSimulating(true)}
                        isLoading={isSimulating} />
                </Col>
            </Row>
        </div>
    )
}

export default SimulatorInput