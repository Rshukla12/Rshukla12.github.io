import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

function Github() {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch GitHub contributions data
    const fetchContributions = async () => {
      try {
        const response = await fetch('https://api.github.com/users/rshukla12/events');
        const data = await response.json();
        
        // Process the data to create a simple contribution visualization
        const contributionData = processContributions(data);
        setContributions(contributionData);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        // Fallback to mock data
        setContributions(generateMockContributions());
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  const processContributions = (data) => {
    // Process GitHub events to create contribution data
    const contributions = [];
    const today = new Date();
    
    for (let i = 0; i < 365; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      const dayData = data.filter(event => {
        const eventDate = new Date(event.created_at);
        return eventDate.toDateString() === date.toDateString();
      });
      
      contributions.unshift({
        date: date.toISOString().split('T')[0],
        count: dayData.length,
        level: dayData.length > 0 ? Math.min(dayData.length, 4) : 0
      });
    }
    
    return contributions;
  };

  const generateMockContributions = () => {
    const contributions = [];
    const today = new Date();
    
    for (let i = 0; i < 365; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      // Generate some random activity
      const random = Math.random();
      let level = 0;
      if (random > 0.8) level = 4;
      else if (random > 0.6) level = 3;
      else if (random > 0.4) level = 2;
      else if (random > 0.2) level = 1;
      
      contributions.unshift({
        date: date.toISOString().split('T')[0],
        count: level,
        level: level
      });
    }
    
    return contributions;
  };

  const getColor = (level) => {
    const colors = [
      '#ebedf0', // No activity
      '#9be9a8', // Low activity
      '#40c463', // Medium activity
      '#30a14e', // High activity
      '#216e39'  // Very high activity
    ];
    return colors[level] || colors[0];
  };

  if (loading) {
    return (
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <div style={{ textAlign: "center", color: "white" }}>
          Loading GitHub activity...
        </div>
      </Row>
    );
  }

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <div style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        justifyContent: "center",
        maxWidth: "800px",
        gap: "2px"
      }}>
        {contributions.map((contribution, index) => (
          <div
            key={index}
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: getColor(contribution.level),
              borderRadius: "2px",
              margin: "1px",
              transition: "all 0.2s ease"
            }}
            title={`${contribution.date}: ${contribution.count} contributions`}
          />
        ))}
      </div>
      <div style={{ 
        marginTop: "20px", 
        fontSize: "14px", 
        color: "#888",
        textAlign: "center" 
      }}>
        <span style={{ display: "inline-block", marginRight: "20px" }}>
          <span style={{ 
            display: "inline-block", 
            width: "12px", 
            height: "12px", 
            backgroundColor: "#ebedf0", 
            marginRight: "5px" 
          }}></span>
          Less
        </span>
        <span style={{ 
          display: "inline-block", 
          width: "12px", 
          height: "12px", 
          backgroundColor: "#216e39", 
          marginRight: "5px" 
        }}></span>
        More
      </div>
    </Row>
  );
}

export default Github;
