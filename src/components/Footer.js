import React from 'react';
import { Container, Row, Col, Stack, Nav } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaStackOverflow  } from 'react-icons/fa';

const socialProfiles = [
  { platform: "GitHub", url: "https://github.com/DAlejandroB", icon: <FaGithub size={30}/> },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/dialbaen/", icon: <FaLinkedin size={30}/> },
  { platform: "Stack Overflow", url: "https://stackoverflow.com/users/15344638/diegoalejandrob", icon: <FaStackOverflow size={30}/> },
];

function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row className="bg-secondary text-light p-4">
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
              {socialProfiles.map((profile) => (
                <Nav.Link href={profile.url} className="text-light" aria-label={`Link to my ${profile.platform}`}>
                  {profile.icon}
                  <span className='d-none d-md-inline p-2'>{profile.platform}</span>
                </Nav.Link>
              ))}
            </Nav>
          </Col>
          <Col>
            <Stack className="text-start pt-4">
              <p className="mb-4">Page created using React and JavaScript, for more info, please contact <a href="mailto:dalejandrob99@gmail.com" className="text-light">dalejandrob99@gmail.com</a></p>
              <p>2024. All rights reserved by Diego Ballesteros</p>
            </Stack>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
