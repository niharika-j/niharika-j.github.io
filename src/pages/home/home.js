import React from 'react';
import './home.scss';
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

import coderGirl from '../../assets/images/coder-girl.png';
import mercury from '../../assets/images/mercury.png';
import controll from '../../assets/images/controll.png';
// import tcs from '../../assets/images/tcs.png';

function Home() {

    const openLink = (link) => {
        window.open(link, "_blank");
    }

    return (
        <div id="home-page">
            <Jumbotron fluid className="page-heading-jumbotron">
                <Container className="page-heading-container">
                    <Row className="justify-content-between align-items-center">
                        <Col sm={4}>
                            <img src={coderGirl} alt="girl coding" className="header-image" />
                        </Col>
                        <Col sm={8} className="header-text">
                            <h1>Hi, I am <span className="my-name">Niharika Jayanthi</span></h1>
                            <p>UX Engineer and a Ravenclaw</p>
                            <Button variant="outline-primary" className="header-btn"><Link smooth to="/#work">Explore Work</Link></Button>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            <section id="work">
                <h3>Work</h3>
                <Container fluid>
                    <Row className>
                        <Col md={6}>
                            <div className="project-card" onClick={() => openLink("https://niharika-j.github.io/mercury/")}>
                                <div className="project-img">
                                    <img src={mercury} alt="mercury product screen" />
                                </div>
                                <div>
                                    <div className="project-name">Helping local businesses grow via FinTech</div>
                                    <div className="project-tags">UX Engineering | UX Design | UX Research</div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="project-card" onClick={() => openLink("https://github.com/niharika-j/controll")}>
                                <div className="project-img">
                                    <img src={controll} alt="people watching video on desktop" />
                                </div>
                                <div>
                                    <div className="project-name">Moderating trolls on YouTube</div>
                                    <div className="project-tags">UX Engineering | UX Design | Front-end</div>
                                </div>
                            </div>
                        </Col>
                        {/* <Col md={6}>
                            <div className="project-card">
                                <div className="project-img">
                                    <img src={tcs} alt="responsive screens graphic" />
                                </div>
                                <div>
                                    <div className="project-name">Developing web solutions @ TCS</div>
                                    <div className="project-tags">Front-end | Unit Testing | DevOps</div>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Home;
