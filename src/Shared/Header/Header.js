import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <img
                    alt=""
                    src={logo}
                    height="30"
                    className="d-inline-block align-baseline me-3"
                />
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;