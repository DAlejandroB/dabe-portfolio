import React from 'react';
import ExperienceItem from '../components/ExperienceItem';

const experiences = [
  {
    title: "Fenix Alliance",
    date: "Aug 2023 - Sep 2024",
    description: "Refactored the backend codebase to implement REST APIs as the data access layer using ASP.NET and Entity Framework Core. Designed and developed multiple frontend components in React.js and Blazor. Achieved near-full test coverage for both the backend and frontend components, ensuring high code quality and reliability.",
    listedSkills: ["C# ASP.NET Core", "Entity Framework", "Blazor", "React", "JavaScript"]
  },
  {
    title: "Banco de Bogotá",
    date: "Feb 2023 - Aug 2023",
    description: "Streamlined Security Operations Center (SOC) internal processes by delivering automation solutions. Leveraged several development tools across the entire development lifecycle to enhance efficiency and operational effectiveness.",
    listedSkills: ["Python" , "Node.js",  "HTML/CSS", "VBA Excel", "PowerBi & PowerAutomate", "MS Active Directory"]
  },
  {
    title: "Freelance Developer",
    date: "Jul 2022 - Present",
    description: "Worked on several full-stack software solutions in both solo and team-based projects. Developed and deployed applications, ensuring robust backend and frontend functionality. Ensured API quality through rigorous testing and documentation. Worked on backend services using various frameworks and managed data with relational and non-relational databases.",
    listedSkills: ["Java Spring Boot", "React", "Node.js", "Express", "C# ASP.NET Core", "Postman", "Swagger", "SQL/NoSQL Databases", "Azure", "Git", "Agile - Scrum"]
  }  
];

const Experience = () => {
  return (
    <div>
      <h1>These are my job Experiences!</h1>
      <div className="py-6">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            date={exp.date}
            description={exp.description}
            listedSkills={exp.listedSkills}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
