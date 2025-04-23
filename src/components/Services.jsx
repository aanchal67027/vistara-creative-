import React, { useEffect } from 'react';
import './Services.css';

const Services = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (

    < section id="services"
    className='services-section'>
      <h2 className="services-heading">Services – Powerful PR, Measurable Impact</h2>

      <div className="service reveal">
        <h3>Political PR – Winning Elections, Shaping Leadership</h3>
        <p>In politics, perception is power. We help political leaders build trust, engage the public, and win elections with strategic PR solutions.</p>
        <br />
        <ul>
          <li>Election Campaign Strategy – Data-driven insights, strategic messaging, and voter engagement</li>
          <li>Speechwriting & Brand Positioning – Crafting powerful, relatable narratives for leaders</li>
          <li>Media Relations & Crisis Management – Ensuring positive coverage, handling controversies</li>
          <li>Social Media Management – Creating engaging content, trend-driven strategies, and real-time interaction</li>
          <li>Digital Outreach & Voter Engagement – Mobilizing supporters through targeted online campaigns</li>
        </ul>
        <p className="tagline">Your vision, our expertise—let’s build a movement that wins.</p>
      </div>

      <div className="service reveal">
        <h3>Corporate PR – Build Reputation, Lead the Industry</h3>
        <p>Reputation is everything in the corporate world. We help businesses rise above the competition, manage crises, and establish industry leadership through effective PR strategies.</p>
        <br />
        <ul>
          <li>Crisis Communication & Reputation Management – Protect your brand in challenging times</li>
          <li>Thought Leadership & Brand Storytelling – Position yourself as an industry leader</li>
          <li>Media Training & Press Relations – Control the narrative, maximize positive exposure</li>
          <li>CSR Campaigns – Enhance brand credibility through social impact initiatives</li>
        </ul>
        <p className="tagline">Strong brands aren’t just built; they are strategically positioned. Let’s make yours unbreakable.</p>
      </div>

      <div className="service reveal">
        <h3>Digital Strategy & Branding – Dominate the Digital Space</h3>
        <p>In today’s digital world, visibility is influence. Your online presence defines your brand—let’s make it unforgettable.</p>
        <br />
        <ul>
          <li>Social Media Growth & Engagement – Build a strong, loyal community</li>
          <li>Paid Advertising & Influencer Collaborations – Maximize brand visibility and online reach</li>
          <li>Crisis Management in the Digital Space – Safeguard your reputation in real time</li>
          <li>Content Marketing & Video Production – Engage your audience with compelling digital storytelling</li>
        </ul>
        <p className="tagline">Your brand deserves to stand out—let’s make it impossible to ignore.</p>
      </div>

       {/* <div className="cta reveal">
        <h3> Let’s discuss your PR strategy—<span>Get in touch today!</span></h3>
      </div>  */}
      <div className="cta active">
  <a href="#contact" className="cta-button">
    Let’s craft your success story—talk to us today!

</a>
</div>
    </section>
  );
};

export default Services;
