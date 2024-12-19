import React from 'react';

const Skills = () => {
  const skills = [
    'Java/J2EE', 
    'PL/SQL', 
    'Informatica', 
    'Spring Boot', 
    'Microservices Architecture', 
    'REST API', 
    'RabbitMQ', 
    'Groovy', 
    'JPA', 
    'Hibernate',
    'Oracle 19c/12c/11g', 
    'Microsoft SQL Server', 
    'MongoDB', 
    'Elasticsearch',
    'Github', 
    'Jenkins', 
    'Maven', 
    'Docker', 
    'Red Hat OpenShift', 
    'Azure'
  ];

  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  );
};

export default Skills;