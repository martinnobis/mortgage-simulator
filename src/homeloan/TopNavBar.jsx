import React from 'react';

import { LinkContainer } from 'react-router-bootstrap'

import Modal from 'react-bootstrap/esm/Modal'
import Navbar from 'react-bootstrap/esm/Navbar'
import Nav from 'react-bootstrap/esm/Nav'
import NavDropdown from 'react-bootstrap/esm/NavDropdown'
import Button from 'react-bootstrap/esm/Button'

const languages = [
    "en",
    "de",
    "fe",
    "pl"
]

const dateFormats = [
    "dd/mm/yyyy",
    "mm/dd/yyyy",
]

const SettingsModal = props => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Settings
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <NavDropdown onSelect={props.setLanguage} title={props.currentLanguage} id="collasible-nav-dropdown">
                    {languages.map((e, i) => <NavDropdown.Item key={i} eventKey={e}>{e}</NavDropdown.Item>)}
                </NavDropdown>
                <p>Date format</p>
                <NavDropdown title="hello" id="collasible-nav-dropdown">
                    {dateFormats.map((e, i) => <NavDropdown.Item key={i} eventKey={e}>{e}</NavDropdown.Item>)}
                </NavDropdown>

                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal >
    )
}

const TopNavBar = (props) => {
    // these ought to be saved in the user's session
    // const [theme, setTheme] = useState("Dark Theme")
    // const [modalShow, setModalShow] = React.useState(false);

    // const toggleTheme = () => theme === "Dark Theme" ? setTheme("Light Theme") : setTheme("Dark Theme")

    return (
        <Navbar expand="lg">
            <Navbar.Brand style={{ "fontFamily": "Kreon" }} href="/">Home Loan Simulator</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to="/faq"><Nav.Link>FAQ</Nav.Link></LinkContainer>
                    {/* <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer> */}
                </Nav>
                {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                    Settings
                </Button>
                <SettingsModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    setLanguage={props.setLanguage}
                    currentLanguage={props.currentLanguage}
                >
                </SettingsModal>
                <Button onClick={toggleTheme}>{theme}</Button> */}
            </Navbar.Collapse>
        </Navbar>
    );
}


export default TopNavBar