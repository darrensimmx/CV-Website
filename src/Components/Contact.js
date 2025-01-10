// Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <p>
          I’d love to hear from you! Whether it’s a professional inquiry, a collaboration opportunity, 
          or just to say hello, feel free to reach out.
        </p>
        <ul className="contact-info">
          <li>
            📧 Email: <a href="mailto:yourname@example.com">yourname@example.com</a>
          </li>
          <li>
            📞 Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
          </li>
          <li>
            🌐 LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
          </li>
          <li>
            🐦 Twitter: <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">@yourprofile</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
