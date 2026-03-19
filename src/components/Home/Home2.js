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
                            I've always been the go-to person for solving technical challenges, and I now apply that mindset to designing and securing complex infrastructures. 🛠️
                            <br/><br/>
                            With hands-on experience in <b className="purple"> Linux systems, cybersecurity, and SIEM deployment, </b>
                            I focus on building resilient and secure environments.
                            <br/><br/>
                            I am particularly driven by <b className="purple"> cybersecurity and DevSecOps, </b>
                            integrating security at every stage of system design and deployment.
                            <br/><br/>
                            My stack includes <b className="purple"> Docker, CI/CD pipelines, cloud platforms (IaaS/PaaS), </b>
                            and monitoring solutions to ensure scalable and secure operations.
                            <br/><br/>
                            As a <b className="purple"> Linux </b> enthusiast, I leverage its power to automate, optimize, and secure modern infrastructures.
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
