// src/components/About.js
import React from 'react';
import './About.css';
import myPhoto from '../assets/images/pic1.png';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left section with the photo */}
        <div className="about-photo">
          <img src={myPhoto} alt="My Photo" />
        </div>

        {/* Right section with the description and button */}
        <div className="about-content">
          <h2>About</h2>
          <p>
          Hi, I'm Ajay Singh. With over 22 years of experience in sales and marketing, I bring a wealth of knowledge to the table. For the past 2 years, I have been at the helm of One Point Solutions Consultancy, where I specialize in the OTC, FMCG, Cosmetic, and Ayurvedic sectors. <br/><br/> My expertise lies in crafting strategic solutions that drive sales growth and optimize market presence. Let's connect and explore how I can help elevate your business.


          </p>
          <a href="/Ajay Singh Resume.pdf" download className="btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
