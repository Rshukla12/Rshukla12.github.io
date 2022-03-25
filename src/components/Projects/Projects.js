import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
import Udemy from "../../Assets/Projects/udemy.jpg";
import Meesho from "../../Assets/Projects/meesho.jpg";
import YtMusic from "../../Assets/Projects/yt-music.jpg";
import Airtable from "../../Assets/Projects/airtable.jpg";

const projects = [
  {
    imgPath: Udemy,
    title: "Udemy Clone",
    description: "Udemy is a platform that allows instructors to build online course and allows user to wishlist, add to cart, purchase, watch and review courses.",
    link: "https://github.com/anamikarec/udemy.com-project",
    demo: "https://udemy-triage-project.netlify.app",
    stack: ["react", "redux", "mui", "node", "mongodb", "express", "git"]
  },
  {
    imgPath: Meesho,
    title: "Meesho Clone",
    description: "Meesho is an indian e-commerce company, using this clone user can login, search and see products, add them to cart and purchase them.",
    link: "https://github.com/rshukla12/meesho",
    demo: "https://meesho-by-nitrogen.netlify.app",
    stack: ["react", "redux", "mui", "git"]
  },
  {
    imgPath: YtMusic,
    title: "YouTube Music Clone",
    description: "Youtube music allows user to play any song, search for any artist, song, playlist and add it to the library. Library will persist only for few hours as it is maintained using heroku and mock- server.",
    link: "https://github.com/rajachoudhary/Youtube_Music",
    demo: "https://yt-music-masters.netlify.app",
    stack: ["javascript", "node", "html", "css", "git"]
  },
  {
    imgPath: Airtable,
    title: "Airtable Clone",
    description: "UI clone of Airtable, a cloud-based software company that offers an online platform for creating and sharing relational databases.",
    link: "https://github.com/charandas31/Airtable_Clone",
    demo: "https://rshukla12.github.io/Airtable_Project2/",
    stack: ["javascript", "html", "css", "git"]
  }
];


function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", gap: "0.5rem" }}>
          {
            projects.map(project => (
              <Col key={project.title} xs={12} sm={10} lg={6} className="project-card">
                <ProjectCard
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
