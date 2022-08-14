import React from "react";
import { Card, Container } from "react-bootstrap";
import featuredCards from "./featuredCards.css";
import recipEZ from "../../assets/images/recipEZ.png";
function FeaturedCards(props) {
  return (
    <>
      <a
        href="https://amir-hackett.github.io/RecipEZ/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="featured-card grow" id="featured">
          <Card.Img
            alt="project logo"
            className="card-image"
            src={recipEZ}
          ></Card.Img>
          <p className="card-body">
            RecipEZ started off as an experiment with a recipe search API, and
            quickly evolved into to become a recipe search engine. The goal with
            this application is to provide a single site where you can search
            any recipe you want and get back a simplified recipe card. No 10
            mile long blog posts about how great grandma came up with the best
            marinara sauce you've ever tasted. Just a recipe in an easy to read
            format that can be saved, liked, shared or printed out as needed.
            <br />
            <br />
            The next iteration of this search engine and a new database to
            support it is currently under development.
          </p>
          <p className="card-footer">
            <i class="fa-brands fa-html5"> HTML5</i>
            <i class="fa-brands fa-css3"> CSS3</i>
            <i class="fa-brands fa-square-js"> JavaScript</i>
          </p>
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
