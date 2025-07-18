import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3Full
} from "react-icons/di";

import {
  SiMaterialui,
  SiExpress,
  SiApachekafka,
  SiRedis,
  SiElasticsearch,
  SiAmazonaws,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman
} from "react-icons/si";

const languages = [
  {
    icon: <DiJava />,
    label: "Java",
  },
  {
    icon: <DiJavascript1 />,
    label: "JavaScript",
  },
  {
    icon: <DiPython />,
    label: "Python",
  }
];

const frameworks = [
  {
    icon: <DiNodejs />,
    label: "Node.js",
  },
  {
    icon: <SiExpress />,
    label: "Express",
  }
];

const infrastructure = [
  {
    icon: <SiApachekafka />,
    label: "Kafka",
  },
  {
    icon: <SiRedis />,
    label: "Redis",
  },
  {
    icon: <DiMongodb />,
    label: "MongoDB",
  },
  {
    icon: <SiElasticsearch />,
    label: "Elasticsearch",
  },
  {
    icon: <SiElasticsearch />,
    label: "ELK",
  }
];

const tools = [
  {
    icon: <SiAmazonaws />,
    label: "AWS EC2",
  },
  {
    icon: <SiDocker />,
    label: "Docker",
  },
  {
    icon: <SiGit />,
    label: "Git",
  },
  {
    icon: <SiGithub />,
    label: "GitHub",
  },
  {
    icon: <SiPostman />,
    label: "Postman",
  }
];

function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Languages
        </h1>
        {
          languages.map(stack => (
            <Col key={stack.label} xs={4} md={2} className="tech-icons">
              <div className="skill glass light">
                {stack.icon}
                <p>{stack.label}</p>
              </div>
            </Col>
          ))
        }
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Infrastructure
        </h1>
        {
          infrastructure.map(stack => (
            <Col key={stack.label} xs={4} md={2} className="tech-icons">
              <div className="skill glass light">
                {stack.icon}
                <p>{stack.label}</p>
              </div>
            </Col>
          ))
        }
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Frameworks
        </h1>
        {
          frameworks.map(stack => (
            <Col key={stack.label} xs={4} md={2} className="tech-icons">
              <div className="skill glass light">
                {stack.icon}
                <p>{stack.label}</p>
              </div>
            </Col>
          ))
        }
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Tools
        </h1>
        {
          tools.map(stack => (
            <Col key={stack.label} xs={4} md={2} className="tech-icons">
              <div className="skill glass light">
                {stack.icon}
                <p>{stack.label}</p>
              </div>
            </Col>
          ))
        }
      </Row>
    </>
  );
}

export default Techstack;
