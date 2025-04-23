import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <h2 data-aos="fade-up">Contact Us – Let’s Build Something Great Together</h2>
        <p data-aos="fade-up" data-aos-delay="150">
          Have a project in mind? Let’s make it happen! Contact us today and take the first step towards a powerful brand presence.
        </p>
      </div>

           <div className="contact-content"> 
          <div className="contact-info" data-aos="fade-right">
          <p>📞 Phone: <strong>(Your Contact Number)</strong></p>
          <p>✉&nbsp;&nbsp;&nbsp;Email: <strong>(Your Email)</strong></p>
          <p>📍 Location: <strong>(Your Office Address)</strong></p> 

          <a
            href="https://wa.me/yourwhatsapplink" // Replace with actual WhatsApp number
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
             Chat with Us Instantly
          </a>
        </div>

        <form className="contact-form" data-aos="fade-left">
          <input type="text" placeholder="📌 Name" required />
          <input type="email"   placeholder="📌 Email" required />
          <input type="text" placeholder="📌 Phone" required />
          <textarea placeholder="📌 Message (What do you need help with?)" required></textarea>
          <button type="submit" className="contact-submit">
             Get a Free Consultation
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
