import React, {useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import 'jquery.terminal';
import 'jquery.terminal/css/jquery.terminal.min.css';
import useTerminal from "../../hooks/useTerminal";
import Footer from "../Footer";

function Home() {

    const [showTerminal, setShowTerminal] = useState(true);
    useTerminal(setShowTerminal, showTerminal);

    return (
        <section>
            <Container fluid className="home-section" id="home" style={{display: 'flex', justifyContent: 'center'}}>
                <Particle/>
                <Container className="home-content" style={{textAlign: 'center'}}>
                    <Row className="justify-content-center">
                        <Col md={8} className="home-header">
                            <h1 style={{paddingBottom: 15, textAlign: "center"}} className="heading">
                                Welcome !<span className="wave" role="img" aria-labelledby="wave">👋</span>
                            </h1>
                            <div style={{position: 'relative'}}>
                                <div className={"my-terminal custom-terminal"}></div>

                            </div>

                            <h2 className="heading-name">
                                I am <strong className="main-name"> Alexis Beaumont</strong> and I'm...
                            </h2>

                            <div style={{
                                textAlign: "center",
                                fontSize: 24,
                                marginLeft: 40,
                                minHeight: '50px'
                            }} className={"purple text-anim"}>
                                <Type/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Home2/>
            <Footer/>
        </section>

    );
}

export default Home;
