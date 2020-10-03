import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/esm/Form'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import InputGroup from 'react-bootstrap/esm/InputGroup'
import Button from 'react-bootstrap/esm/Button'
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger'
import Tooltip from 'react-bootstrap/esm/Tooltip'

import DatePicker from "react-datepicker";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";

import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';

const locale = "en-AU"
const formatCurrency = Intl.NumberFormat(locale, { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format

export const AmountBorrowedInput = (props) => {
    // amount is what is entered by the user, but when blurred it will
    // display it formatted to the locale.
    // const [amount, setAmount] = useState(0)

    // const handleBlur = (e) => {
    //     let a = parseFloat(e.target.value)
    //     if (isNaN(a)) {
    //         // need to reset otherwise some previous valid value will come back when input is cleared
    //         e.target.value = ""; setAmount(0)
    //         return
    //     }
    //     setAmount(a)
    //     e.target.value = formatCurrency(a) // display formatted version
    //     props.handleChange(a * 100) // get it into cents
    // }
    const [val, setVal] = useState(props.value)

    return (
        <Form.Row>
            <Col>
                <Form.Label column htmlFor="amountBorrowedInput">Amount borrowed</Form.Label>
            </Col>
            <Col>
                <Form.Control
                    id="amountBorrowedInput"
                    value={val > 0 ? val : ""}
                    autoComplete="off"
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    step="100000"
                    onChange={(e) => setVal(e.target.value)}
                    onBlur={() => props.handleChange(val)}
                />
            </Col>
        </Form.Row>
    );
}

export const RateInput = (props) => {
    const [val, setVal] = useState(props.value)

    const handleLimits = (e) => {
        if (e.target.value > 20) { e.target.value = 20 }
        if (e.target.value < 0) { e.target.value = 0 }
        setVal(e.target.value)
    }

    return (
        <Form.Row className="pt-1">
            <Col>
                <Form.Label column htmlFor="rateInput">Interest rate</Form.Label>
            </Col>
            <Col>
                <InputGroup>
                    <Form.Control
                        id="rateInput"
                        value={val > 0 ? val : ""}
                        pattern="[0-9]*"
                        inputMode="numeric"
                        autoComplete="off"
                        type="number"
                        onChange={(e) => handleLimits(e)}
                        onBlur={() => props.handleChange(val)}
                        step="0.001" min="0.001" max="20" maxLength="4"
                    />
                    <InputGroup.Prepend>
                        <InputGroup.Text><small>%</small></InputGroup.Text>
                    </InputGroup.Prepend>
                </InputGroup>
            </Col>
        </Form.Row>
    );
}

export const TermInput = (props) => {
    return (
        <Form.Row className="pt-1">
            <Col>
                <Form.Label column htmlFor="termInput">Term</Form.Label>
            </Col>
            <Col>
                <InputGroup>
                    <Form.Control
                        id="termInput"
                        as="select"
                        value={props.value}
                        onChange={(e) => props.handleChange(e.target.value)}
                    >
                        {[...Array(props.maxTerm).keys()].map((e) => <option key={e}>{e + 1}</option>)}
                    </Form.Control>
                    <InputGroup.Prepend>
                        <InputGroup.Text><small>years</small></InputGroup.Text>
                    </InputGroup.Prepend>
                </InputGroup>
            </Col>
        </Form.Row>
    )
}

export const RepaymentFreqInput = (props) => {
    return (
        <Form.Row className="pt-1">
            <Col>
                <Form.Label column htmlFor="repaymentFreqInput"> Repayment frequency </Form.Label>
            </Col>
            <Col>
                <Form.Control
                    id="repaymentFreqInput"
                    as="select"
                    value={props.value}
                    onChange={(e) => props.handleChange(e.target.value)}
                >
                    <option value="monthly">Monthly</option>
                    <option value="fortnightly">Fortnightly</option>
                    <option value="weekly">Weekly</option>
                </Form.Control>
            </Col>
        </Form.Row>
    );
}

export const Repayments = (props) => {
    const onResetClick = () => {
        props.handleResetClick()
    }

    const resetButton =
        <Button variant="link"
            // className="btn btn-link"
            style={{ "padding": 0 }}
            onClick={onResetClick} >
            (reset to minimum)
        </Button>

    return (
        <Form.Row className="pt-1">
            <Col>
                <Form.Label column htmlFor="repaymentsInput">
                    Repayments <span><small>{resetButton}</small></span>
                </Form.Label>
            </Col>
            <Col>
                <Form.Control
                    id="repaymentsInput"
                    value={props.value > 0 ? props.value : ""}
                    autoComplete="off"
                    type="number"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    onChange={(e) => props.handleChange(e.target.value)}
                />
            </Col>
        </Form.Row >
    );
}

export const StartDateInput = (props) => {
    return (
        <Form.Row className="pt-1">
            <Col>
                <Form.Label column htmlFor="startDateInput">Start date</Form.Label>
            </Col>
            <Col className="text-right">
                <DatePicker className="form-control"
                    id="startDateInput"
                    dateFormat="MM/dd/yyyy"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    todayButton="Today"
                    selected={props.startDate}
                    onChange={props.handleChange} />
            </Col>
        </Form.Row>
    )
}

export const ExtraTypeSelector = (props) => {
    return (
        <Form.Control
            as="select"
            value={props.value}
            onChange={(e) => props.handleChange(e.target.value)}
        >
            <option value="rate">rate</option>
            <option value="balance">balance</option>
            <option value="repayments">repayments</option>
        </Form.Control>
    )
}

export const ExtraBalanceInput = (props) => {
    const [val, setVal] = useState(props.value)

    return (
        <Form.Control
            id="amountBorrowedInput"
            value={val > 0 ? val : ""}
            autoComplete="off"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            step="100000"
            onChange={(e) => setVal(e.target.value)}
            onBlur={() => props.handleChange(val)}
        />
    )
}

export const ExtraRateInput = (props) => {
    const [val, setVal] = useState(props.value)

    const handleLimits = (e) => {
        if (e.target.value > 20) { e.target.value = 20 }
        if (e.target.value < 0) { e.target.value = 0 }
        setVal(e.target.value)
    }

    return (
        <InputGroup>
            <Form.Control
                id="rateInput"
                value={val > 0 ? val : ""}
                pattern="[0-9]*"
                inputMode="numeric"
                autoComplete="off"
                type="number"
                onChange={(e) => handleLimits(e)}
                onBlur={() => props.handleChange(val)}
                step="0.001" min="0.001" max="20" maxLength="4"
            />
        </InputGroup>
    )
}

export const ExtraDatePicker = (props) => {
    return (
        <DatePicker className="form-control"
            id="startDateInput"
            dateFormat="MM/dd/yyyy"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            todayButton="Today"
            selected={props.date}
            onChange={props.handleChange} />
    )
}

export const ExtraInputs = (props) => {
    const [active, setActive] = useState(props.active)
    const [type, setType] = useState(props.type)
    const [amount, setAmount] = useState(props.amount)
    const [date, setDate] = useState(props.date)

    const handleTypeChange = t => setType(t)
    const handleAmountChange = a => setAmount(a)
    const handleDateChange = d => setDate(d)

    return (
        <Row>
            <span>Change</span>
            <Col xs="auto">
                <ExtraTypeSelector xs="auto" inline value={type} handleChange={handleTypeChange} />
            </Col>
            <span>to</span>
            <Col xs={2}>
                {
                    type === "rate" ?
                        <ExtraRateInput value={amount} handleChange={handleAmountChange} />
                        :
                        <ExtraBalanceInput value={amount} handleChange={handleAmountChange} />
                }
            </Col>
            <span>from</span>
            <Col xs="auto">
                <ExtraDatePicker date={props.date} handleChange={handleDateChange} />
            </Col>
        </Row>
    )

}