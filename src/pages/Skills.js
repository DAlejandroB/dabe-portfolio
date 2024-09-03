import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SkillItem from '../components/SkillComponent';
import { FaBlender, FaCss3, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa';
import { SiAzuredevops, SiDjango, SiPostman, SiSwagger, SiVisualstudio } from 'react-icons/si';
import { AiFillGithub, AiOutlineDotNet, AiOutlineTranslation } from "react-icons/ai";
import MinSkillItem from '../components/MiniatureSkillComponent';
import { BsUnity } from 'react-icons/bs';
import { BiBot } from 'react-icons/bi';
import { CgCommunity } from 'react-icons/cg';
import { GiLightBulb, GiSatelliteCommunication } from 'react-icons/gi';

const skillsData = [
  {
    icon: <AiOutlineDotNet />,
    skillName: 'ASP Net Core',
    description: 'Refactored a large-scale backend application to use Rest API, designed and later implemented database models and migrations using Entity Framework',
    proficency: 'Expert'
  },
  {
    icon: <FaJs/>,
    skillName: 'JavaScript',
    description: 'Designed, Developed and Deployed project using a wide variety of both back-end and front-end frameworks',
    proficency: 'Advanced'
  },
  {
    icon: <FaReact/>,
    description: 'Implemented several components & managed to successfully connect to backend applications',
    skillName: 'React',
    proficency: 'Intermediate'
  },
  {
    icon: <SiDjango/>,
    description: "Developed and tested several local and test projects",
    skillName: 'Django',
    proficency: 'Beginner'
  }
]

const miniSkillsData = [
  {
    icon: <FaJava />,
    skillName: 'Java',
    proficency: 'Expert'
  },{
    icon: <FaHtml5 />,
    skillName: 'HTML',
    proficency: 'Expert'
  },{
    icon: <FaCss3 />,
    skillName: 'CSS',
    proficency: 'Intermediate'
  },{
    icon: <AiFillGithub />,
    skillName: 'GitHub & version management',
    proficency: 'Expert'
  },{
    icon: <SiAzuredevops />,
    skillName: 'Azure Devops',
    proficency: 'Advanced'
  },{
    icon: <SiPostman />,
    skillName: 'Postman',
    proficency: 'Intermediate'
  },{
    icon: <SiSwagger />,
    skillName: 'Swagger',
    proficency: 'Advanced'
  },{
    icon: <SiVisualstudio />,
    skillName: 'Visual Studio & similar IDEs',
    proficency: 'Expert'
  },{
    icon: <BsUnity />,
    skillName: 'Unity',
    proficency: 'Beginner'
  },{
    icon: <BiBot />,
    skillName: 'AI Leverage & prompt engineer',
  },{
    icon: <GiLightBulb />,
    skillName: 'Problem solver',
  },{
    icon: <AiOutlineTranslation />,
    skillName: 'C2 English and native spanish'
  },
]
const Skills = () => {
  return (
    <Container className='mt-5'>
      <h2 className='text-center mb-4'>Check out some of my skills!</h2>
      <Row>
        {skillsData.map((skill, index) => (
          <Col xs={12} md={6} key={index} className="mb-4 d-flex">
            <SkillItem
              icon={skill.icon}
              skillName={skill.skillName}
              description={skill.description}
              proficiency={skill.proficency}
            />
          </Col>
        ))}
      </Row>
      <Row>
        {miniSkillsData.map((skill, index) => (
          <Col md={2} xs={4} key={index} className='mb-4'>
            <MinSkillItem
            icon={skill.icon}
            skillName={skill.skillName}
            description={skill.description}
            proficiency={skill.proficency}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;