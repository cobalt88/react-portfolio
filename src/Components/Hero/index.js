import { React } from "react";
import { Container, Card } from "react-bootstrap";

function Hero(props) {
  return (
    <Container>
      <div className="hero" style={{ minHeight: "100vh" }}>
        <div className="hero-content" style={{ textAlign: "center" }}>
          <Card style={{ display: "flex" }}>
            <Card.Title>
              <h1>
                Vincent
                <br />
                Teune
              </h1>
              <p>Full Stack Software Engineer</p>
            </Card.Title>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
