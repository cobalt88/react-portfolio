import React from "react";
import { Card } from "react-bootstrap";

function Contact() {
  return (
    <section className="contact-section">
      <Card className="section-header">
        <h2>How To Get In Touch</h2>
      </Card>

      <Card className="contact-card">
        <h3 className="card-header">Address</h3>
        <p className="card-body">Put Stuff Here</p>
        <p className="card-footer">Maybe put something here?</p>
      </Card>

      <Card className="contact-card">
        <h3 className="card-header">Phone</h3>
        <p className="card-body">Put Stuff Here</p>
        <p className="card-footer">Maybe put something here?</p>
      </Card>

      <Card className="contact-card">
        <h3 className="card-header">Email</h3>
        <p className="card-body">Put Stuff Here</p>
        <p className="card-footer">Maybe put something here?</p>
      </Card>

      <Card className="contact-card">
        <h3 className="card-header">Resume</h3>
        <p className="card-body">Put Stuff Here</p>
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
