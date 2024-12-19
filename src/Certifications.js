import React from 'react';

function Certifications() {
  const certifications = [
    'Microsoft Certified: Azure Fundamentals',
    'ITIL Certified in IT Service Management', 
    'Retail Industry Generalist Certified',
    'Accenture Pathway to Leadership'
  ];

  return React.createElement('section', null, 
    React.createElement('h2', null, 'Certifications'),
    React.createElement('ul', null, 
      certifications.map((cert, index) => 
        React.createElement('li', { key: index }, cert)
      )
    )
  );
}

export default Certifications;
