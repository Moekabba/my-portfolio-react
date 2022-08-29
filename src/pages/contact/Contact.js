import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-div">
      <p className="conect-p">LET'S CONNECT</p>
      <Form className="fromfrom">
        <h4>It's your turn, tell me about youself</h4>
        <Form.Group className="mb-3">
          <Form.Label>Your name *</Form.Label>
          <Form.Control type="name" placeholder="John Doe / Jane Doe " />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your website or company </Form.Label>
          <Form.Control type="url" placeholder="eg, https//moekabba.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="  I am enquiring about hiring Mahamadou"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> General Message</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <span className="social-div">
        <h2>Email: Mkabba34@gmail.com</h2>
        <br></br>
        <a href="https://www.linkedin.com/in/mahamadou-kabba-747945221/">
          <ion-icon name="logo-linkedin" size="large"></ion-icon>
        </a>
        <br></br>
        <a href="https://github.com/moekabba">
          <ion-icon name="logo-github" size="large"></ion-icon>
        </a>
        <br></br>
        <br></br>
        <h4>Resume</h4>
        <a href="imgs/MAHAMADOU KABBA.docx" class="active text-white">
          <ion-icon name="document-attach-outline" size="large"></ion-icon>
        </a>
      </span>

      <div class="col-sm"></div>
    </div>
  );
}

export default Contact;
