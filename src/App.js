import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'; // The Navbar component we created
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import VisionMission from './components/Vision/Vision';
import TechnologyInnovation from './components/TechnologyInnovation/TechnologyInnovation';
import Testimonials from './components/TestimonialsSection/TestimonialsSection'; // Your slider component
import Product from './components/Product/Product';
import Team from './components/Team/Team';
import Blog from './components/Blog/Blog';
import Careers from './components/Careers/Careers';
import Investors from './components/Investors/Investors';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/vision" element={<VisionMission />} />
        <Route path="/tech" element={<TechnologyInnovation />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/product" element={<Product />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
}

export default App;
