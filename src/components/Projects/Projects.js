import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import rock_paper_scissors_lizard_spock from "../../Assets/Projects/rock-paper-scissors-lizard-spock.png";
import connect_4_ai from "../../Assets/Projects/connect-4-ai.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rock_paper_scissors_lizard_spock}
              isBlog={false}
              title="Rock, Paper, Scissors, Lizard, Rock"
              description="Rock, Paper, Scissors, Lizard, Spock is a two-player game in which each player chooses one of five gestures: rock, paper, scissors, lizard, or spock. Each gesture beats two of the other gestures and loses to the other two. The rules are: rock crushes scissors, scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons spock, spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves spock, and spock vaporizes rock. The game is often used as a simple decision-making tool or to resolve disputes."
              ghLink="https://jakelawrence.github.io/rock-paper-scissors-lizard-spock"
              demoLink="https://jakelawrence.github.io/rock-paper-scissors-lizard-spock"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connect_4_ai}
              isBlog={false}
              title="Connect 4 AI"
              description="A React application that implements a Connect 4 game with an artificial intelligence opponent. The game is played on a 7-column and 6-row grid, and the goal is to get four of your pieces in a row (horizontally, vertically, or diagonally) before your opponent does."
              ghLink="https://github.com/jakelawrence/Connect-4-AI"
              demoLink="https://jakelawrence.github.io/Connect-4-AI"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
