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
          <Route path="/" exact component={Summary} />
          <Route path="/work-history" component={WorkHistory} />
          <Route path="/education" component={Education} />
          <Route path="/certifications" component={Certifications} />
          <Route path="/skills" component={Skills} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;