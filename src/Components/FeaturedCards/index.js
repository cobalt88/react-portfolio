import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";

function FeaturedCards() {
  return (
    <Container className="featured-section">
      <Card className="section-header">
        <h2>Featured Projects</h2>
      </Card>
      <Card style={{ width: "18rem" }} className="featured-card">
        <Card.Img alt="project logo" className="card-image"></Card.Img>
        <h3 className="card-header">Featured Project 1</h3>
        <p className="card-body">body of project</p>
        <p className="card-footer">Card footer goes here</p>
      </Card>

      <Card style={{ width: "18rem" }} className="featured-card">
        <Card.Img alt="project logo" className="card-image"></Card.Img>
        <h3 className="card-header">Featured Project 1</h3>
        <p className="card-body">body of project</p>
        <p className="card-footer">Card footer goes here</p>
      </Card>

      <Card style={{ width: "18rem" }} className="featured-card">
        <Card.Img alt="project logo" className="card-image"></Card.Img>
        <h3 className="card-header">Featured Project 1</h3>
        <p className="card-body">body of project</p>
        <p className="card-footer">Card footer goes here</p>
      </Card>
    </Container>
  );
}

export default FeaturedCards;
