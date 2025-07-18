import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

function Github() {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch GitHub contributions data
    const fetchContributions = async () => {
      try {
        const usernames = ["rshukla12", "ravi-shukla-1"];
        const allData = await Promise.all(
          usernames.map(username =>
            fetch(`https://api.github.com/users/${username}/events`).then(res => res.json())
          )
        );
        // Merge the data
        const merged = mergeContributions(allData[0], allData[1]);
        setContributions(merged);
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

  // Merge two event arrays into a date->count map
  const mergeContributions = (data1, data2) => {
    const today = new Date();
    const dateMap = {};
    // Helper to add events to map
    const addEvents = (data) => {
      data.forEach(event => {
        const date = new Date(event.created_at).toISOString().split('T')[0];
        dateMap[date] = (dateMap[date] || 0) + 1;
      });
    };
    addEvents(data1);
    addEvents(data2);
    // Build 365-day array
    const contributions = [];
    for (let i = 0; i < 365; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const count = dateMap[dateStr] || 0;
      contributions.unshift({
        date: dateStr,
        count,
        level: count > 0 ? Math.min(count, 4) : 0
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
