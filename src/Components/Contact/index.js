import React from "react";
import { Card } from "react-bootstrap";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <Card className="section-header">
        <h2>How To Get In Touch</h2>
      </Card>

      <Card className="contact-card">
        <h3 className="card-header">GitHub</h3>
        <p className="card-body">
          <a href="https://github.com/cobalt88">Profile</a>
          <br />
          <a href="https://github.com/cobalt88?tab=repositories">
            Repositories
          </a>
          <br />
          <a href="https://gist.github.com/cobalt88">Gists</a>
        </p>
      </Card>

      <Card className="contact-card">
        <h3 className="card-header">Reach Out</h3>
        <p className="card-body">
          <a href="mailto:vincent@vtportfolio.net">vincent@vtportfolio.net</a>
          <br />
          Phone: 407-614-7677{" "}
        </p>
      </Card>

      <Card className="contact-card">
        <h3 className="card-header">Request Form</h3>
        <p className="card-body">Add link to request form here</p>
        <p className="card-footer">Maybe put something here?</p>
      </Card>

      <Card className="contact-card">
        <h3 className="card-header">Resume</h3>
        <p className="card-body">Add link to resume here</p>
        <p className="card-footer">Maybe put something here?</p>
      </Card>

      <Card className="contact-card">
        <h3 className="card-header">LinkedIn</h3>
        <p className="card-body">Put Stuff Here</p>
        <p className="card-footer">Maybe put something here?</p>
      </Card>
    </section>
  );
}

export default Contact;
