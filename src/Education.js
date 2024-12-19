import React from 'react';

function Education() {
  const education = [
    {
      degree: 'Bachelor of Engineering Technology',
      field: 'Computer Science',
      institution: 'University Vishweshwariah College of Engineering',
      year: '06/2006'
    },
    {
      degree: 'Diploma in Computer Science',
      institution: 'VET BVL Polytechnic',
      year: '06/2003'
    }
  ];

  return React.createElement('section', null, 
    React.createElement('h2', null, 'Education'),
    education.map((edu, index) => 
      React.createElement('div', { key: index }, 
        React.createElement('h3', null, `${edu.degree} ${edu.field ? `- ${edu.field}` : ''}`),
        React.createElement('p', null, `${edu.institution} | ${edu.year}`)
      )
    )
  );
}

export default Education;
