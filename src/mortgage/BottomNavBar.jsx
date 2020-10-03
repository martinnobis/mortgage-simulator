import React from '../../node_modules/react';

import { LinkContainer } from '../../node_modules/react-router-bootstrap'

import Navbar from '../../node_modules/react-bootstrap/Navbar'
import Nav from '../../node_modules/react-bootstrap/Nav'

const BottomNavBar = () => {
    return (
        <Navbar className="navbar-dark bg-primary" expand="lg">
            <Nav className="mr-auto">
                <LinkContainer to="/privacy-policy"><Nav.Link>Privacy Policy</Nav.Link></LinkContainer>
                <LinkContainer to="/privacy-policy"><Nav.Link>Privacy Policy</Nav.Link></LinkContainer>
                <LinkContainer to="/terms-of-use"><Nav.Link>Terms of Use</Nav.Link></LinkContainer>
            </Nav>
            <small>© 2020 Martin Nobis. All rights reserved.</small>
        </Navbar>
    );
}

export default BottomNavBar