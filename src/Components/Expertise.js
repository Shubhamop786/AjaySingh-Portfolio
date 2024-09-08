// src/components/Expertise.js
import React from 'react';
import './Expertise.css';
import expertiseImage from '../assets/images/be-your-procurement-consultant.jpg'; // Replace with your image path

function Expertise() {
  return (
    <section className="expertise">
      <div className="expertise-container">
        <div className="expertise-image">
          <img src={expertiseImage} alt="Expertise" />
        </div>
        <div className="expertise-content">
          <h2>My Expertise</h2>
          <div className="expertise-item">
            <h3>22+ Years Experience</h3>
            <p>Extensive background in sales and marketing in the FMCG industry.</p>
          </div>
          <div className="expertise-item">
            <h3>Proven Strategies</h3>
            <p>Develop customized solutions to boost revenue and market share.</p>
          </div>
          <div className="expertise-item">
            <h3>Industry Insights</h3>
            <p>Deep understanding of OTC, Ayurvedic, and consumer trends.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
