import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Projects from './Projects';
import Teams from './Teams';
import Contact from './Contact';
import Proof from './Proof'; // Import Proof component
import Feedback from './Feedback'; // Import Proof component

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <div className="pt-24">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proof" element={<Proof />} /> {/* Added Proof Route */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feed" element={<Feedback />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
