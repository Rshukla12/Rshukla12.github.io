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

function FindMeOn() {
  const socialLinks = [
    {
      icon: <AiOutlineMail />,
      label: "Email",
      value: "rshuklawork@gmail.com",
      link: "mailto:rshuklawork@gmail.com",
      color: "#EA4335"
    },
    {
      icon: <AiOutlinePhone />,
      label: "Phone",
      value: "+91-7383540234",
      link: "tel:+917383540234",
      color: "#25D366"
    },
    {
      icon: <AiOutlineGithub />,
      label: "GitHub",
      value: "github.com/Rshukla12",
      link: "https://github.com/Rshukla12",
      color: "#333"
    },
    {
      icon: <SiLeetcode />,
      label: "LeetCode",
      value: "leetcode.com/Rshukla12",
      link: "https://leetcode.com/Rshukla12",
      color: "#FFA116"
    },
    {
      icon: <AiOutlineLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/rshukla12",
      link: "https://linkedin.com/in/rshukla12",
      color: "#0077B5"
    }
  ];

  return (
    <Container id="find-me-on" fluid className="about-section second-color">
      <Container>
        <h1 className="project-heading">
          Find Me <strong className="purple">On</strong>
        </h1>
        <p style={{ color: "white", marginBottom: "2rem", textAlign: "center" }}>
          Let's connect and build something amazing together
        </p>
        
        <Row style={{ justifyContent: "center", gap: "1rem" }}>
          <Col xs={12} lg={10}>
            <div style={{ 
              backgroundColor: "rgba(255, 255, 255, 0.05)", 
              padding: "2rem", 
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)"
            }}>
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
                gap: "1.5rem",
                marginBottom: "2rem"
              }}>
                {socialLinks.map((social, index) => (
                  <div key={index} style={{ 
                    display: "flex", 
                    alignItems: "center",
                    padding: "1.2rem",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    borderRadius: "15px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-5px)";
                    e.target.style.boxShadow = "0 10px 25px rgba(199, 112, 240, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                  onClick={() => window.open(social.link, '_blank')}
                  >
                    <div style={{ 
                      marginRight: "1rem", 
                      fontSize: "2rem", 
                      color: social.color,
                      minWidth: "3rem",
                      textAlign: "center"
                    }}>
                      {social.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        fontWeight: "bold", 
                        fontSize: "0.9rem", 
                        color: "#888", 
                        marginBottom: "0.3rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px"
                      }}>
                        {social.label}
                      </div>
                      <div style={{ 
                        color: "#c770f0", 
                        fontSize: "1rem",
                        fontWeight: "500"
                      }}>
                        {social.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div style={{ textAlign: "center" }}>
                <Button
                  href="https://drive.google.com/file/d/1Iay33h8ptLjsY1oBQ2CnrPrSGcgzdnrI/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#c770f0",
                    border: "none",
                    padding: "1.2rem 2.5rem",
                    fontSize: "1.1rem",
                    borderRadius: "30px",
                    fontWeight: "500",
                    boxShadow: "0 5px 15px rgba(199, 112, 240, 0.3)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 8px 20px rgba(199, 112, 240, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 5px 15px rgba(199, 112, 240, 0.3)";
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

export default FindMeOn; 