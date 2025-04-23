import React from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';
const MotionImg = motion.img;
const Navbar = () => {
  return (
    <nav className="navbar" >
      <div className="navbar-container">
        <div className="logo">
          <a href="#home">Vistara Creative</a>
          <motion.span
            className="subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Shaping Narrative, Building Influence
          </motion.span>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        
      </div>
    </nav>
  );
};

export default Navbar;
