import React from "react";
import { Container, Col, Row, Stack, ProgressBar } from "react-bootstrap";
const SkillItem = ({icon, skillName, proficiency, description}) => {

  const proficiencyLevels = {
    'Beginner': { value: 25, variant: 'danger' },
    'Intermediate': { value: 50, variant: 'warning' },
    'Advanced': { value: 75, variant: 'info' },
    'Expert': { value: 100, variant: 'success' },
  };

  return (
    <Container className='bg-secondary p-3 my-3 rounded'>
      <Row>
        <Col className='d-flex align-items-center justify-content-center' xs={12} sm={3}>
          <Stack className="text-center">
            <span className='h6 fw-bold text-light mt-2'>{skillName}</span>
            <div style={{ fontSize: '3rem', color: 'white' }}>
              {icon}
            </div>
          </Stack>  
        </Col>
        <Col className='text-light rounded p-3 d-flex flex-column' xs={12} sm={9}>
          <div className="d-flex flex-column" style={{ height: '100%' }}>
            <p className="fs-6 mt-2 mb-2" style={{ wordBreak: 'break-word' }}>
              {description}
            </p>
            <div style={{ width: '100%', maxWidth: '300px', alignSelf: 'center' }}>
              <ProgressBar 
                now={proficiencyLevels[proficiency].value} 
                label={`${proficiency}`} 
                variant={proficiencyLevels[proficiency].variant} 
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SkillItem;
