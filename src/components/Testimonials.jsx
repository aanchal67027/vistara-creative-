import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';
const MotionImg = motion.img;

const testimonials = [
  {
    text: "Vistara Creative transformed our political campaign. Their deep understanding of voter sentiment and strategic communication made a massive difference."
,
    name: "Political Leader",
  },
  {
    text: "Our brand reputation has grown significantly thanks to Vistara’s expert PR strategies. Their ability to position us as industry leaders has been invaluable.",
    name: "Corporate Executive",
  },
  {
    text: " We saw a huge boost in our brand image and media visibility thanks to their PR efforts. They understood our vision and brought it to life with storytelling that really connected.",
    name: "Entrepreneur",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="testimonials-title"
      >
        What Our Clients Say
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="testimonials-subtitle"
      >
        Real stories from our satisfied clients.
      </motion.p>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <p className="testimonial-text">“{testimonial.text}”</p>
            <h4 className="testimonial-author">— {testimonial.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
