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
  SiGithub
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
  }
];

const tools = [
  {
    icon: <SiAmazonaws />,
    label: "AWS EC2",
  },
  {
    icon: <SiGit />,
    label: "Git",
  },
  {
    icon: <SiGithub />,
    label: "GitHub",
  }
];

const frontendStacks = [
  {
    icon: <DiReact />,
    label: "React",
  },
  {
    icon: <SiMaterialui />,
    label: "Material UI",
  },
  {
    icon: <DiHtml5/>,
    label: "HTML",
  },
  {
    icon: <DiCss3Full />,
    label: "CSS",
  }
];

function Techstack() {
  return (
    <>
      <h1 className="project-heading">
        Languages
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
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
      
      <h1 className="project-heading">
        Frameworks
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
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
      
      <h1 className="project-heading">
        Infrastructure
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
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
      
      <h1 className="project-heading">
        Tools
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
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
      
      <h1 className="project-heading">
        Frontend
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {
          frontendStacks.map(stack => (
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
