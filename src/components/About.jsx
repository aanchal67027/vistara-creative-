import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
const MotionImg = motion.img;
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-intro">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us – Who We Are & What We Stand For
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          About Vistara Creative
        </motion.p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Who We Are</h3>
          <p>
            At Vistara Creative, we don’t just manage PR—we shape perceptions, build trust, and create impact. Our expertise in Political PR, Corporate Communications, and Digital Branding helps leaders and businesses establish credibility, control their narrative, and influence public opinion.
          </p>
        </div>

        <div className="about-card">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>⚬ Tailored Strategies for your unique story.</li>
            <li>⚬ Proven Expertise in media, campaigns, and positioning.</li>
            <li>⚬ Result-Driven – Real influence & measurable impact.</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To empower leaders and brands with innovative PR solutions that enhance reputation, build credibility, and drive long-term success in a competitive world.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            To be the most trusted PR powerhouse, setting new benchmarks in political and corporate communications through strategic storytelling, media influence, and digital excellence.
          </p>
        </div>
      </div>

      <div className="about-cta">
        <a href="#contact"> Let’s craft your success story—talk to us today!</a>
      </div>
    </section>
  );
};

export default About;
