import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/linkedin-profile.jpg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Senior Software Engineer with 3+ years in backend and distributed systems
              <br />
              <br />I specialize in technologies like
              <i>
                <b className="purple"> Java, Kafka, Redis, MongoDB, Elasticsearch </b>
              </i>
              <br />
              <br />
              My expertise includes building &nbsp;
              <i>
                <b className="purple">Event-Driven Architectures, Vector Search Solutions </b> and
                implementing {" "}
                <b className="purple">
                  AI-Driven Systems.
                </b>
              </i>
              <br />
              <br />
              I've led infrastructure migrations with zero downtime, reduced costs by 12%,
              and implemented vector search frameworks improving accuracy by 15%.
              Passionate about solving complex problems in distributed systems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" style={{ borderRadius: "1.5rem", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
