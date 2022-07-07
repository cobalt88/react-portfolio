import React from "react";
import { Card, Container } from "react-bootstrap";

function FeaturedCards(props) {
  return (
    <>
      <Card className="featured-card grow">
        <Card.Img alt="project logo" className="card-image"></Card.Img>
        <h3 className="card-header">Featured Project 1</h3>
        <p className="card-body">body of project</p>
        <p className="card-footer">Card footer goes here</p>
      </Card>
    </>
  );
}

export default FeaturedCards;

/* 
      <Card className="featured-card">
        <Card.Img alt="project logo" className="card-image"></Card.Img>
        <h3 className="card-header">Featured Project 1</h3>
        <p className="card-body">body of project</p>
        <p className="card-footer">Card footer goes here</p>
      </Card>

*/
