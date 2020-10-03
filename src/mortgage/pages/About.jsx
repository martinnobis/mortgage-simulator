import React, { useState, useEffect } from '../../../node_modules/react';

import ListGroup from '../../../node_modules/react-bootstrap/ListGroup'
import Button from '../../../node_modules/react-bootstrap/Button'

const commitSha = process.env.GIT_SHA

const emailSubject = `Mortgage Simulator enquiry (Build ${commitSha})`
const emailBody = `Hello Martin!%0a%0a[Please enter your question/comment/suggestion/bug details here]%0a%0aRegards,%0a[Your name]`
const email = `mailto:mortgagesim@gmail.com?subject=${emailSubject}&body=${emailBody}`

console.log(process.env.PUBLIC_URL)

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>Release Changes</h2>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    v1.2.3
                    <ul>
                        <li>{JSON.stringify(process.env)}</li>
                        <li>something</li>
                        <li>something</li>
                        <li>something</li>
                    </ul>

                </ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
        </div>
    )

}

export default About