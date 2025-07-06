import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote pb-5">
          <p style={{ textAlign: "justify", fontSize: "1.5rem"}}>
            Hi Everyone, I am <span className="purple">RAVI SHUKLA </span>
            from <span className="purple"> Surat, India.</span>
            <br />I am a Senior Software Engineer with 3+ years of experience in backend and distributed systems, currently working at Tracxn in Bangalore.
            <br />
            <br />
            My key achievements include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reduced infrastructure costs by <strong>12%</strong> through Elasticsearch optimization
            </li>
            <li className="about-activity">
              <ImPointRight /> Migrated Elasticsearch infrastructure with <strong>zero downtime</strong>
            </li>
            <li className="about-activity">
              <ImPointRight /> Implemented event-driven architecture supporting <strong>20M+ daily events</strong>
            </li>
            <li className="about-activity">
              <ImPointRight /> Deployed vector search framework improving accuracy by <strong>15%</strong>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
