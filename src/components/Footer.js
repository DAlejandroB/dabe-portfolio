import React from 'react';
import { Container, Row, Col, Stack, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row className="bg-secondary text-white p-4">
          <Col className="mx-md-5">
            <Stack className="text-start">
              <h3>Diego Ballesteros</h3>
              <p>Systems/Software Engineer, Fullstack Developer, Tech enthusiast</p>
              <p>Tunja, Colombia</p>
            </Stack>
          </Col>
          <Col>
            <Nav className="flex-column fs-5 text-start">
              <span>Check out my:</span>
              <Nav.Link href="https://www.linkedin.com/in/dialbaen/" className="text-white" aria-label="LinkedIn Profile">LinkedIn</Nav.Link>
              <Nav.Link href="https://stackoverflow.com/users/15344638/diegoalejandrob" className="text-white" aria-label="Stack Overflow Profile">Stack Overflow</Nav.Link>
              <Nav.Link href="https://github.com/DAlejandroB" className="text-white" aria-label="GitHub Profile">GitHub</Nav.Link>
            </Nav>
          </Col>
          <Col>
            <Stack className="text-start">
              <p className="mb-4">Page created using React and JavaScript, for more info, please contact <a href="mailto:dalejandrob99@gmail.com" className="text-white">dalejandrob99@gmail.com</a></p>
              <p>2024</p>
            </Stack>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
