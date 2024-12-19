import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Venkatesh Srinivas</h1>
      <p>Bangalore, Karnataka 560072</p>
      <p>Email: venkyuvce@gmail.com | Phone: 9731120262</p>
      <p>Website: <a href="https://yourwebsite.com">yourwebsite.com</a></p>
      <nav>
        <Link to="/">Summary</Link> | 
        <Link to="/Skill">Skills</Link> | 
        <Link to="/work-history">Work History</Link> | 
        <Link to="/education">Education</Link> | 
        <Link to="/certifications">Certifications</Link>
      </nav>
    </header>
  );
};

export default Header;