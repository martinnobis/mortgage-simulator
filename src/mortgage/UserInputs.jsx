import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/esm/Form'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import InputGroup from 'react-bootstrap/esm/InputGroup'
import Button from 'react-bootstrap/esm/Button'
import Table from 'react-bootstrap/esm/Table'
import FormControl from 'react-bootstrap/esm/FormControl'
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger'
import Tooltip from 'react-bootstrap/esm/Tooltip'
import Card from 'react-bootstrap/esm/Card'
import Spinner from 'react-bootstrap/esm/Spinner'

import DatePicker from "react-datepicker";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";

import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';


const locale = "en-AU"
const formatCurrency = Intl.NumberFormat(locale, { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format

const BalanceInput = (props) => {
    const [val, setVal] = useState(props.value)
    return (
        <Form.Control
            id={props.id}
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

export const AmountBorrowedInputRow = (props) => {
    const id = "amountBorrowedInput"
    return (
        <Form.Row>
            <Col>
                <Form.Label column htmlFor={id}>Amount borrowed</Form.Label>
            </Col>
            <Col>
                <BalanceInput id={id} value={props.value} handleChange={props.handleChange} />
            </Col>
        </Form.Row>
    )
}

const RateInput = (props) => {
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
            {
                props.percentage &&
                <InputGroup.Prepend>
                    <InputGroup.Text><small>%</small></InputGroup.Text>
                </InputGroup.Prepend>
            }
        </InputGroup>
    )
}

export const RateInputRow = (props) => {
    const id = "rateInput"
    return (
        <Form.Row className="pt-1">
            <Col>
                <Form.Label column htmlFor={id}>Interest rate</Form.Label>
            </Col>
            <Col>
                <RateInput id={id} value={props.value} handleChange={props.handleChange} percentage={true} />
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

const DateInput = (props) => {
    return (
        <DatePicker
            id={props.id}
            className="form-control"
            dateFormat="MM/dd/yyyy"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            todayButton="Today"
            selected={props.startDate}
            onChange={props.handleChange} />
    )
}

export const StartDateInput = (props) => {
    const id = "startDateInput"
    return (
        <Form.Row className="pt-1">
            <Col>
                <Form.Label column htmlFor="startDateInput">Start date</Form.Label>
            </Col>
            <Col className="text-right">
                <DateInput className="text-right" id={id} {...props} />
            </Col>
        </Form.Row>
    )
}

export const ExtraTypeSelector = (props) => {
    return (
        <Form.Control
            id={props.id}
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

export const ExtraInputs = (props) => {
    const [active, setActive] = useState(props.active)
    const [type, setType] = useState(props.type)
    const [amount, setAmount] = useState(props.amount)
    const [date, setDate] = useState(props.date)

    const handleTypeChange = t => setType(t)
    const handleAmountChange = a => setAmount(a)
    const handleDateChange = d => setDate(d)

    const typeSelectorId = "extraType"
    const amountId = "extraAmount"
    const dateId = "extraDate"

    return (
        <div>
            <Form.Row>
                <Col>
                    <Form.Label column htmlFor={typeSelectorId}>
                        Change
                </Form.Label>
                </Col>
                <Col>
                    <ExtraTypeSelector id={typeSelectorId} value={type} handleChange={handleTypeChange} />
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Label column htmlFor={typeSelectorId}>to</Form.Label>
                </Col>
                <Col>
                    {
                        type === "rate" ?
                            <RateInput id={amountId} value={amount} handleChange={handleAmountChange} />
                            :
                            <BalanceInput id={amountId} value={amount} handleChange={handleAmountChange} />
                    }
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Label column htmlFor={dateId}>
                        from
                </Form.Label>
                </Col>
                <Col className="text-right">
                    <DateInput id={dateId} startDate={date} handleChange={handleDateChange} />
                </Col>
            </Form.Row>
        </div>
    )

}

export const ChangeRow = (props) => {
    const [enabled, setEnabled] = useState(false)
    const [editable, setEditable] = useState(false)

    return (
        <tr>
            <td>
                {props.type}
            </td>
            <td>
                {props.amount}
            </td>
            <td>
                {props.date.valueOf()}
            </td>
            <td>
                <Form.Check value={enabled} onClick={(e) => setEnabled(e.target.value)} />
            </td>
            <td>
                <Button><BiEdit /></Button>
            </td>
            <td>
                <Button><RiDeleteBinLine /></Button>
            </td>
        </tr>
    )
}

export const ChangeCard = (props) => {
    const [enabled, setEnabled] = useState(true)

    const cardStyle = { "width": "18rem" }
    const enabledStyle = { ...cardStyle, "backgroundColor": "#00FFFF" }
    const disabledStyle = { ...cardStyle, "backgroundColor": "#F0F8FF" }

    return (
        <Card style={enabled ? enabledStyle : disabledStyle}>
            <Card.Body>
                <Card.Title>
                    <Form.Check
                        checked={enabled}
                        id="check"
                        onClick={() => setEnabled(!enabled)}
                    >
                    </Form.Check>
                </Card.Title>
                <Form.Control as="select">
                    <option>Interest rate</option>
                    <option>Balance</option>
                    <option>Repayment frequency</option>
                </Form.Control>
                <Row>
                    <Col>
                        <Form.Label column htmlFor="rateInput">New interest rate</Form.Label>
                    </Col>
                    <Col>
                        <RateInput></RateInput>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label column htmlFor="fromInput">From</Form.Label>
                    </Col>
                    <Col>
                        <DateInput></DateInput>
                    </Col>
                </Row>
                <Form.Control placeholder="Amount"></Form.Control>
                <Form.Control placeholder="Date"></Form.Control>
                <OverlayTrigger delay={200} overlay={<Tooltip id="tooltip-disabled">Delete</Tooltip>}>
                    <Button style={{ "background-color": "red" }}>Hello my name is  <Button><RiDeleteBinLine /></Button></Button>
                </OverlayTrigger>
            </Card.Body>
        </Card >
    )
}

export const ChangeTable = (props) => {
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Change</th>
                        <th>Value</th>
                        <th>Date</th>
                        <th>Enabled</th>
                    </tr>
                </thead>
                <tbody>
                    {props.changes.map((e, i) => <ChangeRow key={i} {...e} />)}
                </tbody>
            </Table>
            <Button onClick={props.handleNewRow}>Add</Button>
        </div>
    )
}

export const LoadButton = (props) => {
    return (
        <Button
            type={props.type}
            className={props.className}
            size={props.size}
            block={props.block}
            variant={props.variant}
            disabled={props.isLoading}
            onClick={props.onClick}>
            {props.isLoading ?
                <Spinner as="span" animation="border" size="lg" role="status" aria-hidden="true" />
                :
                props.label
            }
        </Button>
    )
}