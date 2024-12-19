import React from 'react';

const WorkHistory = () => {
  const workHistory = [
    {
      id: 1, // Add unique identifier
      title: 'Application Development Specialist',
      company: 'BestBuy',
      location: 'Vancouver, CANADA',
      duration: '12/2020 - Current',
      description: 'Managed a cross-functional team of over 15 members in the successful delivery of the POS replacement project...'
    },
    {
      id: 2, // Add unique identifier
      title: 'Team Lead',
      company: 'BestBuy MarketPlace Integration',
      location: 'Vancouver, CANADA',
      duration: '03/2016 - 12/2020',
      description: 'Led a cross-functional team of over 11 members in the design, development, and implementation of the Marketplace Integration platform...'
    }
  ];

  return (
    <section>
      <h2>Work History</h2>
      {workHistory.map((job) => (
        <div key={job.id}> {/* Use unique id instead of index */}
          <h3>{job.title} - {job.company}</h3>
          <p>{job.location } | {job.duration}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </section>
  );
};

export default WorkHistory;
