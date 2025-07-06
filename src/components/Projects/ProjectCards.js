import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiMysql,
  DiHtml5,
  DiCss3Full,
  DiGit,
  DiGithubBadge
} from "react-icons/di";

import {
  SiMaterialui,
  SiExpress,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiStyledcomponents,
  SiBootstrap,
  SiRedux,
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
    <Card className="project-card-view glass project-div" style={{ 
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "20px",
      overflow: "hidden",
      padding: "1rem",
      transition: "all 0.3s ease",
      backdropFilter: "blur(10px)"
    }}>
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="card-img" 
        style={{ 
          height: "250px", 
          objectFit: "cover",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          aspectRatio: "16/9"
        }}
      />
      <Card.Body style={{padding: "2rem"}}>
        <Card.Title className="purple" style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ 
          textAlign: "justify", 
          fontSize: "1rem", 
          lineHeight: "1.6",
          marginBottom: "1.5rem"
        }}>
          {props.description}
        </Card.Text>
        
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ 
            color: "#c770f0", 
            fontWeight: "bold", 
            marginBottom: "1rem",
            fontSize: "1.1rem"
          }}>
            Tech Stack
          </div>
          <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "0.8rem",
            justifyContent: "flex-start"
          }}>
            {
              props.stack?.map(s => (
                <span key={s} style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.3rem 0.6rem",
                  backgroundColor: "rgba(199, 112, 240, 0.1)",
                  borderRadius: "15px",
                  fontSize: "0.8rem",
                  color: "#c770f0",
                  border: "1px solid rgba(199, 112, 240, 0.3)"
                }}>
                  {map[s]}
                  <span style={{ marginLeft: "0.3rem" }}>{s}</span>
                </span>
              ))
            }
          </div>
        </div>
        
        <div style={{ 
          display: "flex", 
          gap: "1.5rem",
          justifyContent: "center"
        }}>
          <Button 
            variant="primary" 
            style={{
              backgroundColor: "#c770f0",
              border: "none",
              padding: "0.6rem 1.2rem",
              borderRadius: "20px",
              fontSize: "0.9rem"
            }} 
            href={props.demo} 
            target="_blank"
          >
            <BiLinkExternal size={16} /> &nbsp;
            Demo
          </Button>
          <Button 
            variant="primary" 
            style={{
              backgroundColor: "transparent",
              border: "1px solid #c770f0",
              color: "#c770f0",
              padding: "0.6rem 1.2rem",
              borderRadius: "20px",
              fontSize: "0.9rem"
            }} 
            href={props.link} 
            target="_blank"
          >
            <DiGithubBadge size={18} /> &nbsp;
            Code
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
