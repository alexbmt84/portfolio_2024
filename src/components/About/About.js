import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Footer from "../Footer";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know who I<strong className="purple"> am</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h2 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h2>

        <Techstack />

        <h2 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h2>
        <Toolstack />

        <Github />
      </Container>
        <Footer/>
    </Container>
  );
}

export default About;
