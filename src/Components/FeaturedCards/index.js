import React from "react";
import { Card, Container } from "react-bootstrap";
import featuredCards from "./featuredCards.css";
function FeaturedCards(props) {
  return (
    <>
      <a
        href="https://amir-hackett.github.io/RecipEZ/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="featured-card grow" id="featured">
          <Card.Img alt="project logo" className="card-image"></Card.Img>
          <h3 className="card-header">RecipEZ</h3>
          <p className="card-body">
            RecipEZ started off as an experiment with a recipe search API, and
            quickly evolved into one of the most useful recipe resources I've
            ever used. The goal with this application is to provide a single
            site where you can search any recipe you want, and get back a
            simplified recipe card. No 10 mile long blog posts about how great
            grandma came up with the best marinara sauce you've ever tasted.
            Just a recipe in an easy to read, easy to print out, easy to find
            again, format.
          </p>
          <p className="card-footer">Card footer goes here</p>
        </Card>
      </a>
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
