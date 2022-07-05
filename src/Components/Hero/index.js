import { React } from "react";
import { Container } from "react-bootstrap";

function Hero(props) {
  return (
    <Container>
      <div className="hero">
        <div className="hero-content">
          <h1>
            <span className="hero-content-title">
              <span
                className="hero-content-title-first"
                style={{ color: "white" }}
              >
                Hello
              </span>
              <span className="hero-content-title-second">World</span>
            </span>
          </h1>
          <p className="hero-content-subtitle">This is a simple React app.</p>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
