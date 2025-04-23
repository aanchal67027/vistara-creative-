import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
const MotionImg = motion.img;
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.h1
          className="main-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          First Impressions That Matter
        </motion.h1>

        <motion.h2
          className="sub-heading"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Crafting Influence, Amplifying Voices
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Your brand is your story—let’s make it unforgettable. Whether you're a
          political leader, a corporate powerhouse, or a rising entrepreneur, we
          create compelling narratives, elevate reputations, and drive meaningful
          impact.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          From winning elections to building strong corporate reputations,
          Vistara Creative is your strategic PR partner.
          Ready to lead the conversation and stay ahead of the competition?

          
        </motion.p>

        <div className="hero-cta">
          <a href="#contact" className="hero-btn"> Get a Free Consultation</a>
          <a href="#services" className="hero-btn secondary"> Let’s Build Your Brand Together</a>
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line no-irregular-whitespace
export default Hero;
