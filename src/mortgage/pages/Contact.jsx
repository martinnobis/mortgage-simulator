import React, { useState, useEffect } from "react"

import Form from "react-bootstrap/esm/Form"
import Button from "react-bootstrap/esm/Button"
import { LoadButton } from "../UserInputs"

import db from "../../firebase"

const Contact = () => {
    const [validated, setValidated] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setValidated(true)
    }

    useEffect(() => {
        if (validated) {
            setIsSubmitting(true)
            db.collection("contactForm").add({
                name: name,
                email: email,
                message: message
            }).then(() => {
                setIsSubmitting(false)
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

            {/* <Button variant="primary" type="submit">
                Submit
            </Button> */}
            <LoadButton
                type="submit"
                variant="primary"
                label="Submit"
                isLoading={isSubmitting}
            />
        </Form>
    )
}

export default Contact