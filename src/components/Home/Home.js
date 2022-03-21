import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import About from "../About/About";
import { useParams } from "react-router-dom";
import loadable from '@loadable/component'
const Skills = loadable(() => import('../Skills/Skills'));
const Projects = loadable(() => import('../Projects/Projects'));

function Home() {
  const {id} = useParams();
  
  useEffect(() => {
    const eleHeight = id ? document.getElementById(id).offsetTop : 0;
    console.log(eleHeight, document.getElementById(id))
    window.scrollTo(0, eleHeight || 0);
  });


  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> RAVI SHUKLA</strong>
              </h1>

              <div style={{ paddingLeft: 45, paddingTop: 30, textAlign: "left" }}>
                <Type />
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
      <Projects/>
    </section>
  );
}

export default Home;
