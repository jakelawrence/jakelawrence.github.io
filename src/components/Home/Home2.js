import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="green"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a highly motivated and skilled software engineer with a strong background in computer science and experience in developing and
              implementing scalable solutions in a fast-paced environment. I have a strong grasp on computer science fundamentals and the ability to
              work well in a team setting.
              <br />
              <br />
              Fluent in{" "}
              <i>
                <b className="green">Javascript, Python and SQL. </b>
              </i>
              <br />
              <br />I use technologies such as{" "}
              <i>
                <b className="green">React.js and Node.js</b>
              </i>
              <br />
              <br />I have professional experience in deploying{" "}
              <i>
                <b className="green">REST APIs</b>
              </i>{" "}
              to a production environment using{" "}
              <i>
                <b className="green">Node.js</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="green">Express.js </b>
              </i>
              <br />
              <br />
              Professional experience in designing{" "}
              <i>
                <b className="green">large, scalable databases</b>
              </i>{" "}
              using{" "}
              <i>
                <b className="green">MySQL </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h3>
              Feel free to <span className="green">connect </span>with me
            </h3>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/jakelawrence" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/jakelawrence15/" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                  <FaLinkedinIn />
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
