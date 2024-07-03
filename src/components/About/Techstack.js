import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiNextdotjs,
    SiPostgresql,
    SiMysql,
    SiVuedotjs,
    SiTypescript,
    SiElectron,
    SiJavascript, SiPhp, SiDocker, SiLaravel, SiGit, SiNodedotjs, SiReact, SiMongodb, SiTailwindcss
} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiPhp/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLaravel/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGit/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJavascript/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNodedotjs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiReact/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVuedotjs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiElectron/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMongodb/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTailwindcss/>
            </Col>
        </Row>
    );
}

export default Techstack;
