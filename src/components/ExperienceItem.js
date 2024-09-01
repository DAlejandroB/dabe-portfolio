import React from 'react';
import { Container, Col, Row, Stack } from 'react-bootstrap';

const ExperienceItem = ({ title, date, description, listedSkills }) => {
  return (
    <Container className='bg-secondary p-3 my-3 rounded'>
      <Row>
        <Col className='text-light d-flex align-items-center justify-content-center' xs={3}>
          <Stack>
            <span className='h4 fw-bold mt-4'>{title}</span>
            <span className='h6 text-light'>{date}</span>
          </Stack>
        </Col>
        <Col className='text-light rounded p-3' xs={9}>
          <Stack>
            <span className='text-start'>{description}</span>
            <Row className='mt-3'>
              {listedSkills.map((skill, index) => (
                <Col key={index} xs='auto' className='mb-2 text-start'>
                  <span className='bg-primary text-light px-3 py-1 d-inline-block rounded text-start'>{skill}</span>
                </Col>
              ))}
            </Row>
          </Stack>  
        </Col>
      </Row>
    </Container>
  );
};

export default ExperienceItem;