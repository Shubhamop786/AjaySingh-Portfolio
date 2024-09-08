import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import gmailLogo from '../assets/images/Gmail.png';
import linkedinLogo from '../assets/images/linkedin-logo.jpg';
import whatsappLogo from '../assets/images/whatsapp.png';
import youlogo from '../assets/images/youtubeicon.png';
import fb from '../assets/images/fb.png';
import insta from '../assets/images/insta.png';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dck28xq', 'template_namxyxf', e.target, 'ehBFQUyC0QiZwSjwB')
      .then((result) => {
        console.log('SUCCESS:', result.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form after success
      }, (error) => {
        console.log('ERROR:', error.text);
        alert('Failed to send message, please try again.');
      });

    e.target.reset(); // Reset form after submission
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button type="submit">Send Message</button>
        </form>

        <div className="social-links">
          <a href="mailto:onepointsolution34@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={gmailLogo} alt="Gmail" /> sajay9777@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/ajay-singh-5a729120a" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" /> Ajay Singh
          </a>
          <a href="https://wa.me/917049006789" target="_blank" rel="noopener noreferrer">
            <img src={whatsappLogo} alt="WhatsApp" /> +917049006789
          </a>
          <a href="https://youtube.com/@ajaysingh-ot6zo?si=PDdbS0kVwKtcAi7C" target="_blank" rel="noopener noreferrer">
            <img src={youlogo} alt="youtube" /> Ajay Singh
          </a>
          <a href="https://www.facebook.com/share/AKRG7qH25ckmTbAV/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="facebook" /> One Point Solution
          </a>
          <a href="https://www.instagram.com/ajay1971singh?igsh=Y2NkbmwyYXNtN3Jh" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="insta" /> Ajay Singh
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
