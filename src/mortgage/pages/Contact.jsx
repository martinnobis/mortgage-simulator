import React, { useState, useEffect } from "react"

import Form from "react-bootstrap/esm/Form"
import { LoadButton } from "../UserInputs"
import Alert from "react-bootstrap/Alert"

import db from "../../firebase"

const AlertSuccess = () => {
    return (
        <Alert variant="success">
            <Alert.Heading>Thank you!</Alert.Heading>
            <p>Your message has been received 👍 Have a nice day!</p>
        </Alert>
    )
}

const AlertFail = () => {
    return (
        <Alert variant="danger">
            <Alert.Heading>Oops!</Alert.Heading>
            <p>Your message could not be sent 👎 Please try again later.</p>
        </Alert>
    )
}

const Contact = () => {
    const [validated, setValidated] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

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
            db.collection("mail").add({
                to: "mortgagesim@gmail.com",
                from: "mortgagesim@gmail.com",
                replyTo: email,
                message: {
                    subject: `${name}'s enquiry`,
                    text: message
                }
            }).then(() => {
                setIsSubmitting(false)

                setSubmitSuccess(true)
                setShowAlert(true)

                setName("")
                setEmail("")
                setMessage("")
            }).catch((e) => {
                setIsSubmitting(false)

                console.error(e.message)

                setSubmitSuccess(false)
                setShowAlert(true)
            })
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
            {
                showAlert ?
                    submitSuccess ? <AlertSuccess /> : <AlertFail />
                    :
                    <LoadButton
                        type="submit"
                        variant="primary"
                        label="Submit"
                        isLoading={isSubmitting}
                    />
            }
        </Form >
    )
}

export default Contact