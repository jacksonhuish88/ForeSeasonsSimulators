import React from 'react';
import "./css/navbar.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Logo from '../Logo.png'; // Import your logo

function Navigation() {
  return (
    <Navbar variant="dark" expand="md" sticky="top" className="shadow">
      <Container fluid>
        <Navbar.Brand href="#mission">
          <img
            src={Logo}
            height="75" // Set fixed height for consistency
            alt="Company Logo"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#mission">Home</Nav.Link>
            <Nav.Link href="#installation">Installation</Nav.Link>
            <Nav.Link href="#materials">Materials</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="https://www.instagram.com/fore.seasons.golf/" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
