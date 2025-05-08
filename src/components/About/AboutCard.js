import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dipak Halkude </span>
            from <span className="purple"> Nanded, India.</span>
            <br />
            I am currently pursing final year Btech Degree in Computer Science at MIT Academy Of Engineering, Pune.
            <br />
            I have completed My internship at UPM(University Putra Malyasia) Malyasia.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dipak_DH</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
