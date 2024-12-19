import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Summary from './Summary';
import WorkHistory from './WorkHistory';
import Education from './Education';
import Certifications from './Certifications';
import Skills from './Skills';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
  <Route path="/summary" element={<Summary/>} />
  <Route path="/work-history" element={<WorkHistory/>} />
  <Route path="/education" element={<Education/>} />
  <Route path="/certifications" element={<Certifications/>} />
  <Route path="/skill" element={<Skills/>} />
</Routes>
      </div>
    </Router>
  );
}

export default App;