import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import urwork from "../../Assets/Projects/urwork.png";
import slash from "../../Assets/Projects/slash.png";
import minifighters from "../../Assets/Projects/minifighters.png";
import botanic from "../../Assets/Projects/botanic.png";
import ecovoit from "../../Assets/Projects/ecovoit.png";
import ekilibre from "../../Assets/Projects/ekilibre.png";
import Footer from "../Footer";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ekilibre}
              isBlog={false}
              title="Ekilibre"
              description="Built using NextJs, Ekilibre is an advanced platform dedicated to enhancing your wellness and sports performance. This dynamic platform offers a comprehensive range of personalized coaching and wellness services. Features include individualized one-to-one coaching sessions, tailored fitness plans designed to meet specific health goals, and interactive tools for real-time messaging and image sharing. These functionalities enhance the social interaction and community aspects of the platform, making it ideal for those committed to improving both physical and mental wellness."
              ghLink="https://github.com/alexbmt84/ekilibre"
              demoLink="https://www.ekilibre84.fr/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={botanic}
              isBlog={false}
              title="Botanic"
              description="Discover Stéphane's expert gardening services on his user-friendly platform, developed with VueJs. This intuitive application not only facilitates direct engagement with a seasoned gardening professional but also simplifies the process of scheduling and managing gardening services. Clients can explore a wealth of resources on sustainable gardening practices, benefiting from Stéphane's extensive knowledge. The platform enables users to share insights, learn about eco-friendly gardening techniques, and collaborate on projects that enhance their green spaces."
              ghLink="https://github.com/alexbmt84/botanic"
              demoLink="https://stephanebeaumontjardinier.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minifighters}
              isBlog={false}
              title="Minifighters"
              description="Unleash your creativity with Minifighters, the unique card game where AI meets strategic gameplay. Build your dream deck using the latest DALL-E and ChatGPT technologies, generating cards based on your input keywords. Customize cards with intelligent descriptions, dynamic images, and unique statistics. Engage in battles, trade cards in the marketplace, or chat instantly with friends. Enhance your fighters, manage your collection with a rarity algorithm, and expand your network by adding friends. Dive into a world where your imagination crafts your path to victory."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={urwork}
              isBlog={false}
              title="Urwork"
              description="Discover dynamic job opportunities with Urwork. Built with Laravel and enhanced with Alpine.js and Livewire for a seamless user experience. This job portal caters to freelancers looking to apply for jobs and clients posting their own offers. Key features include instant messaging for quick communication, the ability to like job offers, and dual role functionality enabling freelancers to apply and clients to manage postings."
              ghLink="https://github.com/alexbmt84/urwork"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecovoit}
              isBlog={false}
              title="Ecovoit"
              description ="Ecovoit, the advanced carpooling platform, where convenience meets community. Powered by a robust Laravel API and a sleek Next.js frontend, our app integrates the Google Maps API for seamless trip visualization. Users can post or join trips, add vehicles, and update profiles with ease. Key features include a real-time search for trips, instant messaging with Laravel Chatify, and CI/CD pipelines for continuous automation. Navigate, connect, and ride smarter with Ecovoit."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slash}
              isBlog={false}
              title="Slash"
              description="Slash, the app designed for slashers. Effortlessly view schedules, tasks, jobs, and more. Features include comprehensive time management tools, reporting, and billing functionalities. Create, update, or delete entries to tailor your time and life management. This all-in-one solution helps you stay organized and on track, whether you’re balancing multiple jobs or personal projects."
              ghLink="https://github.com/alexbmt84/laravelSlash"
            />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </Container>
  );
}

export default Projects;
