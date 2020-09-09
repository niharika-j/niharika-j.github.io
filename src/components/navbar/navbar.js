import React from 'react';
import './navbar.scss';
import { HashLink as Link } from 'react-router-hash-link';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';

import logo from '../../assets/images/logo-white.png';
import resume from '../../assets/files/resume.pdf';

class NavbarComponent extends React.Component {
    render() {
        const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
              Click to copy email address
            </Tooltip>
        );

        return (
            <section id="navbar">
                <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect={true} fixed="top">
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <img src={logo} alt="Niha in telugu" id="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" id="hamburger-icon" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Navbar.Text><Link smooth to="/#work">Work</Link></Navbar.Text>
                                {/* <Nav.Link href="#about">About</Nav.Link> */}
                                <Nav.Link href={resume} target="_blank">Resume</Nav.Link>
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <Nav.Link><span className="fas fa-envelope"></span></Nav.Link>
                                </OverlayTrigger>
                                <Nav.Link href="https://github.com/niharika-j" target="_blank"><span className="fab fa-github"></span></Nav.Link>
                                <Nav.Link href="https://www.linkedin.com/in/niharika-j/" target="_blank"><span className="fab fa-linkedin-in"></span></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>
        );
    }
}

export default NavbarComponent;