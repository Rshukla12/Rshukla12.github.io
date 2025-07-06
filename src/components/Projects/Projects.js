import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import loadable from "@loadable/component";

import Udemy from "../../Assets/Projects/udemy.jpg";
import YtMusic from "../../Assets/Projects/yt-music.jpg";

const ProjectCard = loadable(() => import("./ProjectCards"));

const projects = [
  {
    imgPath: Udemy,
    title: "Udemy Clone",
    description: "MERN stack e-learning platform with cart and streaming functionality. Optimized MongoDB queries for 2x faster performance.",
    link: "https://github.com/Rshukla12/udemy-clone",
    demo: "https://udemy-masai.netlify.app",
    stack: ["mongodb", "react", "redux", "express", "node", "git"]
  },
  {
    imgPath: YtMusic,
    title: "YouTube Music Clone",
    description: "Search and playlist features with efficient Node.js backend APIs. Designed scalable REST APIs for search functionality.",
    link: "https://github.com/Rshukla12/youtube-music-clone",
    demo: "https://yt-music-masters.netlify.app",
    stack: ["javascript", "node", "express", "html", "css", "git"]
  }
];


function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", marginBottom: "2rem" }}>
          Here are some of my personal projects showcasing backend development and system design skills.
        </p>
        <Row style={{ justifyContent: "center", gap: "2rem" }}>
          {
            projects.map(project => (
              <Col key={project.title} xs={12} lg={5} className="project-card">
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
