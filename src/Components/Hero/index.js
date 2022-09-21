import { React } from "react";
import { Container, Card } from "react-bootstrap";

function Hero(props) {
  return (
    <Container id="home">
      <div className="hero" style={{ minHeight: "100vh" }}>
        <div className="hero-content" style={{ textAlign: "center" }}>
          <Card style={{ display: "flex" }}>
            <Card.Title>
              <h1 className="hero-header">
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
