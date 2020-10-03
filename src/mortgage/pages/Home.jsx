import React, { useState, useEffect } from "../../../node_modules/react"

import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Graph from "../Graph"
import SimulatorInput from "../SimulatorInput"
import Table from "../Table"

const Home = (props) => {
    return (
        <div>
            <Row className="justify-content-center">
                <Col xs={12} sm={6}>
                    <SimulatorInput
                        minRepayments={props.minRepayments}
                        {...props.inputs}
                        {...props.simFunctions}
                    />
                </Col>
            </Row>
            <Row>

            </Row>
            { props.dayOfDays > 0 || <Table className="pb-4" days={props.daysOfDays} />}
            {/* <Graph daysOfDays={props.daysOfDays} /> */}
            <Row>
                <Col className="pt-4">
                    <small >
                        <strong>Disclaimer</strong>
                        <p>
                            The information on this website is for general information purposes only.
                            It is not intended as financial or investment advice and should not be construed or relied on as such.
                            Before making any commitment of a financial nature you should seek advice from a qualified and registered financial or investment adviser.
                            No material contained within this website should be construed or relied upon as providing recommendations in relation to any financial product.
                            We do not recommend or endorse products and do not receive remuneration based upon investment decisions by our website users.
            </p>
                    </small>
                </Col>
            </Row>
        </div >
    )
}


export default Home 