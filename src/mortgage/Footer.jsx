import React, { useState, useEffect } from "react"

import { LinkContainer } from "react-router-bootstrap"

import Navbar from "react-bootstrap/esm/Navbar"
import Container from "react-bootstrap/esm/Container"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Nav from "react-bootstrap/esm/Nav"

import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebook, FaReddit } from 'react-icons/fa'

import { emailMailto } from "./utils"

const twitterLink = (
    <a className="text-light" href="https://twitter.com/intent/tweet?text=mortgage-simulator.com:%20simulate,%20analyze,%20and%20forecast%20your%20mortgage%20home%20loan&url=https://mortgage-simulator.com" >
        <span>< AiOutlineTwitter /> </span>
        <span>Twitter</span>
    </a >
)

const facebookLink = (
    <a className="text-light" href="https://www.facebook.com/sharer/sharer.php?u=https://mortgage-simulator.com">
        <span>< FaFacebook /> </span>
        <span>Facebook</span>
    </a >
)

const redditLink = (
    <a className="text-light" href="https://www.reddit.com/submit?url=https://mortgage-simulator.com">
        <span>< FaReddit /> </span>
        <span>Reddit</span>
    </a >
)

const Footer = () => {
    return (
        <Jumbotron className="mt-4 mb-0 pb-4 bg-primary text-light" expand="lg">
            <Row className="d-flex justify-content-around">
                <Col xs={12} sm={4}>
                    <p>© 2020 Martin Nobis</p>
                    <h5>About</h5>
                    <p>
                        Mortgage Simulator was built to help you analyze and forecast the details of your mortgage day-by-day.
                        No other calculator gives you this much information.
                        If you like <strong>mortgage-simulator.com</strong> or have a suggestion then please drop a line.
                        Feedback is much appreciated!
                    </p>
                </Col>
                <Col xs={6} sm={2}>
                    <h5>Share</h5>
                    <p>{twitterLink}</p>
                    <p>{facebookLink}</p>
                    <p>{redditLink}</p>
                </Col>
                <Col xs={6} sm={2}>
                    <h5>Contact</h5>
                    <p><a className="text-light" href={emailMailto} rel="noopener noreferrer" target="_blank">Email</a></p>
                    <p><a className="text-light" href="/privacy-policy">Privacy policy</a></p>
                    <p><a className="text-light" href="/acceptable-use">Acceptable use</a></p>
                </Col>
            </Row>
        </Jumbotron>
    );
}


export default Footer