import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Udemy from "../../Assets/Projects/udemy.jpg";
import Meesho from "../../Assets/Projects/meesho.jpg";
import YtMusic from "../../Assets/Projects/yt-music.jpg";
import Airtable from "../../Assets/Projects/airtable.jpg";

const projects = [
  {
    imgPath: Udemy,
    title: "Udemy Clone",
    description: "Udemy is a platform that allows instructors to build online courses on their preferred topics build with React.js, Redux, Material-UI, Node, Express and MongoDB. Have features which allows user to wishlist, add to cart, purchase, watch and review courses.",
    link: "https://github.com/anamikarec/udemy.com-project"
  },
  {
    imgPath: Meesho,
    title: "Meesho Clone",
    description: "Meesho is an indian e-commerce company, using this clone user can login, search and see products, add them to cart and purchase them.",
    link: "https://github.com/rshukla12/meesho"
  },
  {
    imgPath: YtMusic,
    title: "YouTube Music Clone",
    description: "Youtube music allows user to play any song, search for any artist, song, playlist and add it to the library. Library will persist only for few hours as it is maintained using heroku and mock- server.",
    link: "https://github.com/rajachoudhary/Youtube_Music"
  },
  {
    imgPath: Airtable,
    title: "Airtable Clone",
    description: "UI clone of Airtable, a cloud-based software company that offers an online platform for creating and sharing relational databases.",
    link: "https://github.com/charandas31/Airtable_Clone"
  }
];


function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {
            projects.map(project => (
              <Col md={5} className="project-card">
                <ProjectCard
                  key={project.title}
                  {...project}
                />
              </Col>
            ))
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
