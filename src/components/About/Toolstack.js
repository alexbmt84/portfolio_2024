import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiPostman,
    SiInsomnia,
    SiVercel,
    SiDigitalocean,
    SiLinux,
    SiKalilinux,
    SiPhpstorm,
    SiWebstorm,
    SiSelenium,
    SiJenkins
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiLinux/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKalilinux/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPhpstorm/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWebstorm/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiInsomnia/>
            </Col>,
            <Col xs={4} md={2} className="tech-icons">
                <SiSelenium/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJenkins/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVercel/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDigitalocean/>
            </Col>
        </Row>
    );
}

export default Toolstack;
