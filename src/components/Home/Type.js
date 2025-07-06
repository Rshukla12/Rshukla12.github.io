import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Software Engineer",
          "Backend & Distributed Systems",
          "Java, Kafka, Redis, MongoDB",
          "Elasticsearch & Vector Search",
          "AI Implementation Specialist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
