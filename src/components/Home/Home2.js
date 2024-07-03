import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.png";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about"
                   style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={6} className="my-avatar" style={{ display: 'flex', justifyContent: 'center', marginLeft: 10 }}>
                        <img src={myImg} className="img-fluid" alt="avatar" style={{ maxWidth: '200px' }}/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={8} className="home-about-description" style={{ textAlign: 'center' }}>
                        <h3 style={{ fontSize: "2.6em" }} className={"title-description"}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h3>
                        <p className="home-about-body" style={{
                            textAlign: 'justify',
                            margin: '20px auto',
                            maxWidth: '65%',
                            fontSize: '0.9rem',
                        }}>
                            I've always been the tech troubleshooter since my school days, and now I channel that
                            passion into developing innovative web applications. 🛠️
                            <br/><br/>
                            I am skilled in <b className="purple"> PHP, using MVC or DDD design patterns. </b>
                            <br/><br/>
                            I'm passionate about <b className="purple"> AI-driven projects, cybersecurity, and network
                            management, </b> always ensuring to integrate <b className="purple"> best practices. </b>
                            <br/><br/>
                            My development stack includes <b className="purple"> PaaS, IaaS, Docker, </b> and <b
                            className="purple"> CI/CD </b> to streamline deployment and maintenance processes.
                            <br/><br/>
                            As a <b className="purple"> Linux </b> enthusiast, I thrive in using its robust environment
                            to enhance my development projects.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-5">
                    <Col md={12} className="home-about-social" style={{ textAlign: 'center' }}>
                        <h4>FIND ME ON</h4>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links"
                            style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', padding: 0 }}>
                            <li className="social-icons">
                                <a
                                    href="https://github.com/alexbmt84"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                    aria-label={"Github profile"}
                                >
                                    <AiFillGithub/>
                                </a>
                            </li>
                            <li className="social-icons" >
                                <a
                                    href="https://www.linkedin.com/in/alexis-beaumont/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                    aria-label={"Linkedin profile"}
                                >
                                    <FaLinkedinIn/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home2;
