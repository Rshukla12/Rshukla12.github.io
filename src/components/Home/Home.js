import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import About from "../About/About";
import { useParams } from "react-router-dom";
import loadable from "@loadable/component";
import Nav from "react-bootstrap/Nav";

import { CgFileDocument } from "react-icons/cg";

const Skills = loadable(() => import("../Skills/Skills"));
const Projects = loadable(() => import("../Projects/Projects"));

function Home() {
  const { id } = useParams();

  useEffect(() => {
    if ( window ){
      const eleHeight = id && document.getElementById(id)? document.getElementById(id).offsetTop : 0;
      window.scrollTo(0, eleHeight || 0);
    }
  });

  return (
    <>
      <Particle />
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> RAVI SHUKLA</strong>
              </h1>

              <div
                style={{ paddingLeft: 45, paddingTop: 30, textAlign: "left" }}
              >
                <Type />
              </div>
              {/* <Row style={{ justifyContent: "center", marginTop: "3rem", maxWidth: "20rem", paddingLeft: "3rem" }}>
                <Col sm={6}>
                  <Button
                    variant="primary"
                    style={{
                      maxWidth: "10rem",
                      width: "100%",
                      margin: "10px 0px",
                    }}
                    href="https://drive.google.com/file/d/1-Y7JwX8lTOh9N6Xoq8UhBLFsiS138vQu/view?usp=sharing"
                    target="_blank"
                  >
                    <CgFileDocument size={25} style={{ marginBottom: "2px", marginRight: "3px" }}/> Resume
                  </Button>
                </Col>
                <Col sm={6}>
                  <Button
                    variant="primary"
                    style={{
                      maxWidth: "10rem",
                      width: "100%",
                      margin: "10px 0px",
                    }}
                    href="/#id"
                    target="_blank"
                  >
                    <AiOutlineFundProjectionScreen size={25} style={{ marginBottom: "2px", marginRight: "3px" }}/>Projects
                  </Button>
                </Col>
              </Row> */}
              <div className="resume navbar-nav">
                <Nav.Item>
                  <Nav.Link
                    style={{
                      maxWidth: "10rem",
                      width: "100%",
                      margin: "10px 0px 10px 0.5rem",
                      fontSize: "1.5rem"
                    }}
                    className="main-resume"
                    href="https://drive.google.com/file/d/1-Y7JwX8lTOh9N6Xoq8UhBLFsiS138vQu/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                  </Nav.Link>
                </Nav.Item>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <About />
      <Skills />
      <Projects />
      </>
  );
}

export default Home;
