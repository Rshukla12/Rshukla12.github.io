import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava
} from "react-icons/di";

import {
  SiExpress,
  SiApachekafka,
  SiRedis,
  SiElasticsearch,
  SiAmazonaws,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiSpringboot,
  SiReact,
  SiLogstash,
  SiKibana
} from "react-icons/si";

const languages = [
  {
    icon: <DiJava />,
    label: "Java (expert)",
  },
  {
    icon: <DiJavascript1 />,
    label: "JavaScript (intermediate)",
  },
  {
    icon: <DiPython />,
    label: "Python (basic)",
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
  },
  {
    icon: <SiSpringboot />,
    label: "Spring Boot",
  },
  {
    icon: <SiReact />,
    label: "React",
  }
];

const infrastructure = [
  {
    icon: <SiElasticsearch />,
    label: "Elasticsearch",
  },
  {
    icon: <SiLogstash />,
    label: "Logstash",
  },
  {
    icon: <SiKibana />,
    label: "Kibana",
  },
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
  }
];

const tools = [
  {
    icon: <SiAmazonaws />,
    label: "AWS",
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
