import React, { useState, useEffect } from "react"

import Form from "react-bootstrap/esm/Form"
import Button from "react-bootstrap/esm/Button"

import db from "../../firebase"

const Contact = () => {
    const [validated, setValidated] = useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        // const form = e.currentTarget;
        // if (form.checkValidity() === false) {
        //     e.preventDefault();
        //     e.stopPropagation();
        // }
        e.preventDefault();
        e.stopPropagation();
        setValidated(true);
    }

    useEffect(() => {
        if (validated) {
            db.collection("contactForm").add({
                name: name,
                email: email,
                message: message
            }).then(() => {
                alert("Your message has been submitted! 👍")
            }).catch(error => {
                alert(error.message)
            })

            setName("")
            setEmail("")
            setMessage("")

            setValidated(false)
        }
    }, [validated, name, email, message])

    return (
        <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} onChange={(e) => setName(e.target.value)} required type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control onChange={(e) => setMessage(e.target.value)} value={message} required as="textarea" rows={5} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Contact