import React from "react";
import { Card, CardGroup } from "react-bootstrap";

function AboutMe(props) {
  return (
    <CardGroup className="about-cards">
      <Card className="about-image-card"></Card>

      <Card className="about-info-card">
        <h2>Who Is Vince?</h2>
        <p>
          I am an Engineer, through and through. <br />
          And by that I don't mean that I just make cool stuff and prefer the
          title of Engineer.
          <br />
          The way I think, the way I work, the way I approach almost everything,
          is as an Engineer, it is simply who I am. <br />
          When I see something new, or at least new to me, my first thoughts are
          generally something along the lines of <br />
          "How does that work? What is its function? Can I take it apart? Can I
          make it better? What if..." <br />
          I have always had the mentality of wanting to understand a thing down
          to the most fundamental levels that I am capable of comprehending.{" "}
          <br />
          Whether it be something mechanical, electrical, digital, or even
          theoretical, I just want to take it apart, <br />
          learn from it, and incorporate its useful elements or lessons learned
          into my own future creations and designs. <br />
          To be an Engineer is to always imagine what if, to always seek to
          understand the why and how of everything, and to never stop learning.
          <br />
          That is the lens through which I view the universe.
          <br />
          That is why I am an Engineer.
          <br />
          And that is why I dove head-first into the realm of Software
          Engineering.
          <br /> <br />
          Vincent Teune
          <br />
          March 2022
          <br />
        </p>
      </Card>
    </CardGroup>
  );
}
export default AboutMe;
