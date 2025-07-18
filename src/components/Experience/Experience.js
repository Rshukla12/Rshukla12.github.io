import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const hideTimeout = useRef(null);

  const handleMouseEnter = (index) => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setHoveredIndex(null);
    }, 300);
  };
  
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tracxn",
      location: "Bangalore, India",
      period: "May 2024 – Present",
      achievements: [
        "Reduced infrastructure costs by 12% by tuning Elasticsearch queries",
        "Migrated Elasticsearch (7.17 to 8.4) infrastructure with zero downtime",
        "Implemented event-driven architecture with Kafka, supporting 20M+ daily events",
        "Developed framework for POC with LLM and vector search, enabling 20% faster search capabilities",
        "Deployed vector search framework in production, improving search accuracy by 15%"
      ]
    },
    {
      title: "Software Engineer",
      company: "Tracxn",
      location: "Bangalore, India",
      period: "May 2022 – May 2024",
      achievements: [
        "Migrated 15+ libraries from Groovy to Java across 2 teams, enhancing code maintainability",
        "Integrated Redis caching layer in 3 critical data pipeline paths, reducing latency by 50%",
        "Upgraded MongoDB clusters and identified and fixed a bug in SOP"
      ]
    },
    {
      title: "Node.js Intern",
      company: "Dominant Infotech",
      location: "Surat, India",
      period: "Feb 2022 – Apr 2022",
      achievements: [
        "Developed Result Portal API with mail verification using Node.js and Express",
        "Built Crypto Trading APIs integrating Binance and Tron for 1K+ daily transactions"
      ]
    }
  ];

  return (
    <Container id="experience" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white", marginBottom: "3rem", textAlign: "center" }}>
          My journey in software engineering with focus on backend and distributed systems.
        </p>
        
        {/* Ladder Timeline */}
        <div style={{ 
          maxWidth: "1000px", 
          margin: "0 auto",
          padding: "2rem 0",
          position: "relative"
        }}>
          {/* Vertical timeline line - hidden on mobile */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "0",
            bottom: "0",
            width: "4px",
            backgroundColor: "#c770f0",
            transform: "translateX(-50%)",
            borderRadius: "2px",
            zIndex: "1",
            display: window.innerWidth <= 768 ? "none" : "block"
          }} />
          
          {/* Experience items */}
          <div style={{ position: "relative", zIndex: "2" }}>
            {experiences.map((exp, index) => (
              <div key={index} style={{
                display: window.innerWidth <= 768 ? "block" : "flex",
                alignItems: "center",
                marginBottom: "2rem",
                position: "relative"
              }}>
                {/* Left side content - shown for even indices */}
                {window.innerWidth <= 768 || index % 2 === 0 ? (
                  <div style={{
                    flex: window.innerWidth <= 768 ? "none" : "1",
                    paddingRight: window.innerWidth <= 768 ? "0" : "3rem",
                    textAlign: window.innerWidth <= 768 ? "center" : "right",
                    opacity: window.innerWidth <= 768 ? "1" : "1",
                    transition: "all 0.3s ease",
                    marginBottom: window.innerWidth <= 768 ? "1rem" : "0"
                  }}>
                    <div style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "15px",
                      padding: "1.5rem",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      position: "relative",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      maxWidth: window.innerWidth <= 768 ? "400px" : "none",
                      margin: window.innerWidth <= 768 ? "0 auto" : "0"
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}>
                      
                      {/* Gradient border */}
                      <div style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        height: "3px",
                        background: "linear-gradient(90deg, #c770f0, #f093fb)",
                        borderRadius: "15px 15px 0 0"
                      }} />
                      
                      <div style={{ 
                        fontWeight: "bold", 
                        fontSize: window.innerWidth <= 768 ? "1.1rem" : "1.2rem", 
                        color: "#c770f0", 
                        marginBottom: "0.5rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px"
                      }}>
                        {exp.title}
                      </div>
                      <div style={{ 
                        fontSize: window.innerWidth <= 768 ? "0.9rem" : "1rem", 
                        color: "white",
                        marginBottom: "0.3rem",
                        fontWeight: "500"
                      }}>
                        {exp.company}
                      </div>
                      <div style={{ 
                        fontSize: window.innerWidth <= 768 ? "0.8rem" : "0.9rem", 
                        color: "#ccc",
                        marginBottom: "0.5rem"
                      }}>
                        {exp.location}
                      </div>
                      <div style={{ 
                        fontSize: window.innerWidth <= 768 ? "0.7rem" : "0.8rem", 
                        color: "#888",
                        fontStyle: "italic"
                      }}>
                        {exp.period}
                      </div>
                      
                      {/* Hover indicator */}
                      <div style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        height: "2px",
                        backgroundColor: hoveredIndex === index ? "#c770f0" : "transparent",
                        transition: "all 0.3s ease"
                      }} />
                    </div>
                  </div>
                ) : (
                  <div style={{
                    flex: "1",
                    paddingRight: "3rem"
                  }} />
                )}
                
                {/* Center timeline dot - hidden on mobile */}
                {window.innerWidth > 768 && (
                  <div style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#c770f0",
                    borderRadius: "50%",
                    border: "4px solid #1a1a1a",
                    position: "relative",
                    zIndex: "3",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    transform: hoveredIndex === index ? "scale(1.3)" : "scale(1)",
                    boxShadow: hoveredIndex === index ? "0 0 20px rgba(199, 112, 240, 0.5)" : "none"
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave} />
                )}
                
                {/* Right side content - shown for odd indices */}
                {window.innerWidth <= 768 ? null : (
                  index % 2 === 1 ? (
                    <div style={{
                      flex: "1",
                      paddingLeft: "3rem",
                      textAlign: "left",
                      opacity: "1",
                      transition: "all 0.3s ease"
                    }}>
                      <div style={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "15px",
                        padding: "1.5rem",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        position: "relative",
                        cursor: "pointer",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}>
                        
                        {/* Gradient border */}
                        <div style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          right: "0",
                          height: "3px",
                          background: "linear-gradient(90deg, #f093fb, #c770f0)",
                          borderRadius: "15px 15px 0 0"
                        }} />
                        
                        <div style={{ 
                          fontWeight: "bold", 
                          fontSize: "1.2rem", 
                          color: "#c770f0", 
                          marginBottom: "0.5rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px"
                        }}>
                          {exp.title}
                        </div>
                        <div style={{ 
                          fontSize: "1rem", 
                          color: "white",
                          marginBottom: "0.3rem",
                          fontWeight: "500"
                        }}>
                          {exp.company}
                        </div>
                        <div style={{ 
                          fontSize: "0.9rem", 
                          color: "#ccc",
                          marginBottom: "0.5rem"
                        }}>
                          {exp.location}
                        </div>
                        <div style={{ 
                          fontSize: "0.8rem", 
                          color: "#888",
                          fontStyle: "italic"
                        }}>
                          {exp.period}
                        </div>
                        
                        {/* Hover indicator */}
                        <div style={{
                          position: "absolute",
                          bottom: "0",
                          left: "0",
                          right: "0",
                          height: "2px",
                          backgroundColor: hoveredIndex === index ? "#c770f0" : "transparent",
                          transition: "all 0.3s ease"
                        }} />
                      </div>
                    </div>
                  ) : (
                    <div style={{
                      flex: "1",
                      paddingLeft: "3rem"
                    }} />
                  )
                )}
              </div>
            ))}
          </div>
          
          {/* Horizontal Details Panel */}
          <div style={{
            position: "fixed",
            bottom: "0",
            left: "0",
            right: "0",
            backgroundColor: "rgba(26, 26, 26, 0.95)",
            backdropFilter: "blur(20px)",
            borderTop: "2px solid #c770f0",
            padding: window.innerWidth <= 768 ? "1rem" : "1.5rem",
            transform: hoveredIndex !== null ? "translateY(0)" : "translateY(100%)",
            transition: "all 0.4s ease",
            zIndex: "1000",
            maxHeight: window.innerWidth <= 768 ? "60vh" : "40vh",
            overflowY: "auto"
          }}
          onMouseEnter={() => {
            if (hideTimeout.current) {
              clearTimeout(hideTimeout.current);
              hideTimeout.current = null;
            }
          }}
          onMouseLeave={() => {
            setHoveredIndex(null);
          }}
          >
            {hoveredIndex !== null && (
              <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div style={{
                  display: "flex",
                  flexDirection: window.innerWidth <= 768 ? "column" : "row",
                  justifyContent: "space-between",
                  alignItems: window.innerWidth <= 768 ? "flex-start" : "center",
                  marginBottom: "1rem",
                  gap: window.innerWidth <= 768 ? "0.5rem" : "0"
                }}>
                  <div style={{
                    fontWeight: "bold",
                    fontSize: window.innerWidth <= 768 ? "1.1rem" : "1.3rem",
                    color: "#c770f0",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}>
                    {experiences[hoveredIndex].title} at {experiences[hoveredIndex].company}
                  </div>
                  <div style={{
                    fontSize: window.innerWidth <= 768 ? "0.9rem" : "1rem",
                    color: "#ccc",
                    fontStyle: "italic"
                  }}>
                    {experiences[hoveredIndex].period}
                  </div>
                </div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: window.innerWidth <= 768 ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: window.innerWidth <= 768 ? "0.8rem" : "1rem"
                }}>
                  {experiences[hoveredIndex].achievements.map((achievement, idx) => (
                    <div key={idx} style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      padding: window.innerWidth <= 768 ? "0.8rem" : "1rem",
                      borderRadius: "10px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "rgba(199, 112, 240, 0.1)";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                      e.target.style.transform = "translateY(0)";
                    }}>
                      <div style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: window.innerWidth <= 768 ? "0.6rem" : "0.8rem"
                      }}>
                        <ImPointRight style={{ 
                          color: "#c770f0", 
                          marginTop: "0.2rem",
                          flexShrink: "0",
                          fontSize: window.innerWidth <= 768 ? "0.9rem" : "1rem"
                        }} />
                        <div style={{
                          color: "white",
                          lineHeight: "1.6",
                          fontSize: window.innerWidth <= 768 ? "0.9rem" : "0.95rem"
                        }}>
                          {achievement}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Experience; 