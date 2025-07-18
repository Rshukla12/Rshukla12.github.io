import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CgFileDocument } from "react-icons/cg";
import { 
  AiOutlineMail, 
  AiOutlinePhone, 
  AiOutlineGithub, 
  AiOutlineLinkedin 
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  const contactInfo = [
    {
      icon: <AiOutlineMail />,
      label: "Email",
      value: "rshuklawork@gmail.com",
      link: "mailto:rshuklawork@gmail.com"
    },
    {
      icon: <AiOutlinePhone />,
      label: "Phone",
      value: "+91-7383540234",
      link: "tel:+917383540234"
    },
    {
      icon: <AiOutlineGithub />,
      label: "GitHub",
      value: "github.com/Rshukla12",
      link: "https://github.com/Rshukla12"
    },
    {
      icon: <SiLeetcode />,
      label: "LeetCode",
      value: "leetcode.com/Rshukla12",
      link: "https://leetcode.com/Rshukla12"
    },
    {
      icon: <AiOutlineLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/rshukla12",
      link: "https://linkedin.com/in/rshukla12"
    }
  ];

  return (
    <Container id="contact" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Get In <strong className="purple">Touch</strong>
        </h1>
        <p style={{ color: "white", marginBottom: "2rem" }}>
          Feel free to reach out for collaborations or just a friendly hello.
        </p>
        
        <Row style={{ justifyContent: "center" }}>
          <Col xs={12} lg={8}>
            <div style={{ 
              backgroundColor: "rgba(255, 255, 255, 0.05)", 
              padding: "2rem", 
              borderRadius: "15px",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
                {contactInfo.map((info, index) => (
                  <div key={index} style={{ 
                    display: "flex", 
                    alignItems: "center",
                    padding: "1rem",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    borderRadius: "10px",
                    transition: "transform 0.2s ease"
                  }}>
                    <span style={{ 
                      marginRight: "1rem", 
                      fontSize: "1.5rem", 
                      color: "#c770f0",
                      minWidth: "2rem",
                      textAlign: "center"
                    }}>
                      {info.icon}
                    </span>
                    <div>
                      <div style={{ fontWeight: "bold", fontSize: "0.9rem", color: "#888", marginBottom: "0.2rem" }}>
                        {info.label}
                      </div>
                      <a 
                        href={info.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          color: "#c770f0", 
                          textDecoration: "none",
                          fontSize: "1rem",
                          fontWeight: "500"
                        }}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <Button
                  href="https://drive.google.com/file/d/1Iay33h8ptLjsY1oBQ2CnrPrSGcgzdnrI/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#c770f0",
                    border: "none",
                    padding: "1rem 2rem",
                    fontSize: "1.1rem",
                    borderRadius: "25px",
                    fontWeight: "500"
                  }}
                >
                  <CgFileDocument style={{ marginRight: "0.5rem" }} />
                  Download Resume
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact; 