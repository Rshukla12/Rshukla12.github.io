import React from "react";
import { Container } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";

function Skills() {
  return (
    <Container id="skills" fluid className="about-section second-color">
      <h1 className="project-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>

      <Techstack />

      <Github />
    </Container>
  );
}

export default Skills;
