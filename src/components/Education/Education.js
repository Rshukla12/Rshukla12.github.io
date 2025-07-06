import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Education() {
  const education = [
    {
      degree: "B.E. in Electronics & Communications",
      institution: "Government Engineering College, Surat",
      period: "2018 – 2022",
      details: "CGPA: 9.19"
    },
    {
      degree: "Full Stack Web Development",
      institution: "Masai School",
      period: "2021 – 2022",
      details: "Intensive coding bootcamp"
    }
  ];

  const certificates = [
    {
      name: "Server-side Development",
      issuer: "Coursera",
      year: "2020"
    }
  ];

  const interests = [
    "Backend Development",
    "System Design",
    "Fitness"
  ];

  return (
    <Container id="education" fluid className="about-section second-color">
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Education</strong> & Certifications
        </h1>
        
        <Row style={{ justifyContent: "center", gap: "1rem" }}>
          <Col xs={12} lg={8}>
            <Card className="project-card-view">
              <Card.Body>
                <h3 style={{ color: "#c770f0", marginBottom: "1.5rem", textAlign: "center" }}>
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div key={index} style={{ 
                    marginBottom: "1.5rem", 
                    padding: "1rem", 
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "8px",
                    border: index === education.length - 1 ? "none" : "1px solid rgba(255, 255, 255, 0.1)"
                  }}>
                    <div style={{ fontWeight: "bold", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                      {edu.degree}
                    </div>
                    <div style={{ fontSize: "1rem", color: "#c770f0", marginBottom: "0.3rem" }}>
                      {edu.institution}
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "#888" }}>
                      {edu.period} | {edu.details}
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", gap: "1rem", marginTop: "2rem" }}>
          <Col xs={12} md={6}>
            <Card className="project-card-view">
              <Card.Body>
                <h3 style={{ color: "#c770f0", marginBottom: "1.5rem", textAlign: "center" }}>
                  Certifications
                </h3>
                {certificates.map((cert, index) => (
                  <div key={index} style={{ 
                    marginBottom: "1rem", 
                    padding: "1rem", 
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "8px"
                  }}>
                    <div style={{ fontWeight: "bold", fontSize: "1.1rem", marginBottom: "0.3rem" }}>
                      {cert.name}
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "#888" }}>
                      {cert.issuer} | {cert.year}
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
          
          <Col xs={12} md={6}>
            <Card className="project-card-view">
              <Card.Body>
                <h3 style={{ color: "#c770f0", marginBottom: "1.5rem", textAlign: "center" }}>
                  Interests
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", justifyContent: "center" }}>
                  {interests.map((interest, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: "#c770f0",
                        color: "white",
                        padding: "0.8rem 1.2rem",
                        borderRadius: "25px",
                        fontSize: "0.9rem",
                        fontWeight: "500"
                      }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education; 