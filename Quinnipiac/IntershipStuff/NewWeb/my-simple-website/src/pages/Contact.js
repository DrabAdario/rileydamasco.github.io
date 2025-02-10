// src/pages/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>
        I’d love to hear from you! Feel free to reach out via email or through my social profiles.
      </p>
      <ul>
        <li>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></li>
        <li>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></li>
      </ul>
    </section>
  );
}

export default Contact;
