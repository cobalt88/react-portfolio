import React from "react";
import { Card } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
      <Card className="footer-card">
        <a href="https://www.linkedin.com/in/vincent-teune/">
          <i class="fa-brands fa-linkedin fa-3x"></i>
        </a>
        <a href="https://www.facebook.com/kiwidragoncreations">
          <i class="fa-brands fa-facebook-square fa-3x"></i>
        </a>
        <a href="https://www.instagram.com/vincent.teune/">
          <i class="fa-brands fa-instagram fa-3x"></i>
        </a>
        <a href="https://github.com/cobalt88">
          <i class="fa-brands fa-github fa-3x"></i>
        </a>
        <a href="https://www.thingiverse.com/cobalt_prime/designs">
          <i class="fa-solid fa-gear fa-3x"></i>
        </a>
        <a href="https://www.etsy.com/shop/KiwiDragonAndCompany?ref=shop_sugg">
          <i class="fa-brands fa-etsy fa-3x"></i>
        </a>
        <a href="https://medium.com/@cobalt88">
          <i class="fa-brands fa-medium fa-3x"></i>
        </a>
      </Card>
    </footer>
  );
}

export default Footer;
