import React from "react";
import { Container } from "react-bootstrap";
// This is version 1.0.
// 2.0 should expand and show title on hover
// 3.0 should have some visible and responsive proficiency level (maybe an icon)

const MinSkillItem = ({ icon, skillName, proficiency }) => {
  const proficiencyLevels = {
    'Beginner': { value: 25, variant: 'danger' },
    'Intermediate': { value: 50, variant: 'warning' },
    'Advanced': { value: 75, variant: 'info' },
    'Expert': { value: 100, variant: 'success' },
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
      <div 
        className="d-flex justify-content-center align-items-center bg-secondary rounded"
        style={{ height: '90px', width: '90px', fontSize: "70px", color: "white" }}>
        {icon}
      </div>
    </Container>
  );
}

export default MinSkillItem;
