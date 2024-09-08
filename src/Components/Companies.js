// src/components/Companies.js
import React from 'react';
import './Companies.css';

function Companies() {
  return (
    <section className="companies">
      <div className="companies-container">
        <div className="companies-content">
          <h2>FMCG, OTC & Ayurvedic Expertise</h2>
          <div className="grid">
            <div className="grid-item">
              <h3>Category Insights</h3>
              <p>Deep understanding of consumer <br/> preferences and market trends.</p>
            </div>
            <div className="grid-item">
              <h3>Regulatory Knowledge</h3>
              <p>Navigating complex regulations to ensure <br/> compliant operations.</p>
            </div>
            <div className="grid-item">
              <h3>Formulation Expertise</h3>
              <p>Leveraging Ayurvedic principles to <br/> develop effective products.</p>
            </div>
            <div className="grid-item">
              <h3>Brand Positioning</h3>
              <p>Helping companies stand out in a crowded <br/> marketplace.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Companies;
