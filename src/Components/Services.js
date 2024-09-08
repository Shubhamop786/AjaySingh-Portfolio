import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id='service' className="services-section">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-grid">
        <div className="service-item">
          <h3>Stockist Network</h3>
          <p>One Point Solution helps businesses establish and manage robust stockist networks, ensuring efficient product distribution and market penetration.</p>
        </div>
        <div className="service-item">
          <h3>Marketing Strategies</h3>
          <p>The firm develops tailored marketing plans that leverage traditional and digital channels to enhance brand visibility and drive consumer engagement.</p>
        </div>
        <div className="service-item">
          <h3>Team Building & Training</h3>
          <p>One Point Solution offers comprehensive team-building programs and customized training solutions that foster collaboration, enhance performance, and boost morale.</p>
        </div>
        <div className="service-item">
          <h3>Sales Growth</h3>
          <p>The consultancy provides data-driven insights and strategic guidance to help businesses achieve significant sales growth and achieve their revenue targets.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
