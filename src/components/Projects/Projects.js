import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/corona.png";
import editor from "../../Assets/Projects/lapitech.png";
import chatify from "../../Assets/Projects/chatify.png";
import kalam from "../../Assets/Projects/kalam.jpg";
import bitsOfCode from "../../Assets/Projects/bitsOfCode.png";

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
              imgPath={chatify}
              isBlog={false}
              title="CasaNova"
              description="Casanova is a full-stack web app like Airbnb, where users can list and book rooms or properties. Built with Node.js, Express, MongoDB, and EJS, it supports user login, property posting, and booking features. It also includes review and rating functionality for better user trust and experience."
              ghLink="https://github.com/DipakHalkude/CasaNova"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Railway Announcement"
              description="Indian Railway Announcement System is a Python-based project that generates automated railway station announcements in audio format. It takes train details like name, number, source, destination, platform, and time, then converts them into realistic Hindi-English mixed voice announcements using text-to-speech (TTS) libraries."
              ghLink="https://github.com/DipakHalkude/Mumbai_Trains_All_Accounments_Python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Lapitech"
              description="Lapitech is your go-to platform for seamless tech solutions, offering cutting-edge web development and digital services. We specialize in creating responsive, user-friendly websites and applications tailored to your needs. Our team is committed to delivering top-notch, innovative solutions that drive business growth. Let us help you transform your ideas into digital success."
              ghLink="https://github.com/DipakHalkude/Lapitech"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Simon Game"
              description="Simon Game is a classic memory game where players must repeat a sequence of colors and sounds in the correct order. Each round, the game adds a new step to the sequence, challenging the player's memory and reflexes."
              ghLink="https://github.com/DipakHalkude/Simon_Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kalam}
              isBlog={false}
              title="APJ Abdul Kalam"
              description="Welcome to the official website of Dr. A.P.J. Abdul Kalam, India's 'Missile Man' and former President. Discover his inspiring life, achievements, and contributions to science, technology, and education. Explore his legacy and vision for a brighter, innovative future."
              ghLink="https://github.com/DipakHalkude/Dr._Apj_Kalam_Information"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Corona On Map"
              description="Corona on Map is a platform that tracks and visualizes COVID-19 cases across the globe in real-time. Stay informed with up-to-date data on the pandemic, including infection rates, recovery statistics, and trends worldwide. Our interactive map helps you easily monitor the impact of COVID-19 in different regions, promoting awareness and safety."
              ghLink="https://github.com/DipakHalkude/Corona_On_Map"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
