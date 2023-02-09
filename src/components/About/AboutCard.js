import React from "react";
import Card from "react-bootstrap/Card";
import { GoPrimitiveDot } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <hr />
      <Card.Body className="p-0">
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, my name is <span className="green">Jake Lawrence </span> and I am a Software Engineer / Fullstack Developer from{" "}
            <span className="green"> Southern California</span> !
            <br />
            <br />
            Apart from coding, some other activities that I love to do are...
          </p>
          <ul>
            <li className="about-activity">- DJing / Producing Music</li>
            <li className="about-activity">- Making lattes at home (dream is to open my own coffee shop)</li>
            <li className="about-activity">- Travelling to new places</li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
