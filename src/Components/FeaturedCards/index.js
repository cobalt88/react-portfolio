import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";

function FeaturedCards() {
  return (
    <CardGroup className="featured-section">
      <h2>Featured Projects</h2>
      <Card style={{ width: "18rem" }}>
        <Card.Img alt="project logo"></Card.Img>
        <h3>Featured Project 1</h3>
        <p>body of project</p>
      </Card>
      <Card style={{ width: "18rem" }}></Card>
      <Card style={{ width: "18rem" }}></Card>
    </CardGroup>
  );
}

export default FeaturedCards;
