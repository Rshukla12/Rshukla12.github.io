import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function CodeSnippet() {
  const codeExamples = [
    {
      title: "Kafka Consumer Example",
      language: "java",
      code: `@KafkaListener(topics = "user-events")
public void handleUserEvent(ConsumerRecord<String, String> record) {
    try {
        UserEvent event = objectMapper.readValue(record.value(), UserEvent.class);
        // Process 20M+ daily events
        eventProcessor.process(event);
    } catch (Exception e) {
        log.error("Error processing event: {}", e.getMessage());
    }
}`,
      description: "High-throughput Kafka consumer handling 20M+ daily events"
    },
    {
      title: "Elasticsearch Query Optimization",
      language: "json",
      code: `{
  "query": {
    "bool": {
      "must": [
        {"match": {"content": "search_term"}},
        {"range": {"timestamp": {"gte": "now-7d"}}}
      ],
      "filter": [
        {"term": {"status": "active"}}
      ]
    }
  },
  "aggs": {
    "categories": {
      "terms": {"field": "category.keyword"}
    }
  }
}`,
      description: "Optimized Elasticsearch query reducing infrastructure costs by 12%"
    },
    {
      title: "Redis Caching Layer",
      language: "java",
      code: `@Cacheable(value = "userProfile", key = "#userId")
public UserProfile getUserProfile(String userId) {
    // Cache hit reduces latency by 50%
    return userRepository.findById(userId)
        .orElseThrow(() -> new UserNotFoundException(userId));
}

@CacheEvict(value = "userProfile", key = "#userId")
public void updateUserProfile(String userId, UserProfile profile) {
    userRepository.save(profile);
}`,
      description: "Redis caching implementation reducing latency by 50%"
    }
  ];

  return (
    <Container id="code-snippets" fluid className="about-section second-color">
      <Container>
        <h1 className="project-heading">
          Technical <strong className="purple">Excellence</strong>
        </h1>
        <p style={{ color: "white", marginBottom: "2rem" }}>
          Code snippets showcasing backend optimization and distributed systems expertise.
        </p>
        <Row style={{ justifyContent: "center", gap: "1rem" }}>
          {codeExamples.map((snippet, index) => (
            <Col key={index} xs={12} lg={8} className="project-card">
              <Card className="project-card-view">
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold", fontSize: "1.3rem", color: "#c770f0", marginBottom: "1rem" }}>
                    {snippet.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "0.9rem", color: "#888", marginBottom: "1rem" }}>
                    {snippet.description}
                  </Card.Text>
                  <pre style={{
                    backgroundColor: "#1a1a1a",
                    color: "#f8f8f2",
                    padding: "1rem",
                    borderRadius: "5px",
                    fontSize: "0.85rem",
                    overflowX: "auto",
                    border: "1px solid #333"
                  }}>
                    <code>{snippet.code}</code>
                  </pre>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default CodeSnippet; 