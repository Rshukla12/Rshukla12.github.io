import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { Row, Col } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiMysql,
  DiHtml5,
  DiCss3Full,
  DiGit
} from "react-icons/di";

import {
  SiMaterialui,
  SiExpress,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiStyledcomponents,
  SiBootstrap,
  SiRedux
} from "react-icons/si";


const map = {
  javascript: <DiJavascript1 />,
  react: <DiReact />,
  node: <DiNodejs />,
  mongodb: <DiMongodb />,
  python: <DiPython />,
  sql: <DiMysql />,
  html: <DiHtml5 />,
  css: <DiCss3Full />,
  git: <DiGit />,
  mui: <SiMaterialui />,
  express: <SiExpress />,
  vscode: <SiVisualstudiocode />,
  postman: <SiPostman />,
  heroku: <SiHeroku />,
  styled: <SiStyledcomponents />,
  bootstrap: <SiBootstrap />,
  redux: <SiRedux /> 
}

function ProjectCards(props) {
  return (
    <Card className="project-card-view glass project-div">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="purple">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Title className="purple">Tech Stack</Card.Title> 
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {
            props.stack?.map(s => (
              <Col key={s} xs={4} md={1} className="tech-icons">
                <div class="skill glass light">
                  { map[s] }
                </div>
              </Col>
            ))
          }
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", gap: "1rem" }} >
          <Button variant="primary" xs={4} style={{width: "12rem"}} href={props.demo} target="_blank">
            <BiLinkExternal /> &nbsp;
              Demo
          </Button>
          <Col xs={1}></Col>
          <Button variant="primary" xs={4} style={{width: "12rem"}} href={props.link} target="_blank">
            <BiLinkExternal /> &nbsp;
              View Project
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
