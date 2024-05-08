import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Logo from '../Logo.png'; // Import your logo
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleScroll = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleNavLink = (event, id) => {
    event.preventDefault();
    if (location.pathname === '/') {
      handleScroll(id);
    } else {
      navigate('/');
      setTimeout(() => handleScroll(id), 0);
    }
  };
  
  

  return (
    <Navbar variant="dark" expand="md" sticky="top" className="shadow">
      <Container fluid>
        <Navbar.Brand href="#home" onClick={(e) => handleNavLink(e, 'mission')}>
          <img
            src={Logo}
            height="75"
            alt="Company Logo"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={(e) => handleNavLink(e, 'mission')}>Home</Nav.Link>
            <Nav.Link onClick={(e) => handleNavLink(e, 'installation')}>Installation</Nav.Link>
            <Nav.Link onClick={(e) => handleNavLink(e, 'materials')}>Materials</Nav.Link>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <Nav.Link onClick={(e) => handleNavLink(e, 'contact-us')}>Contact Us</Nav.Link>
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
