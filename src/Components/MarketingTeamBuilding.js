import React from 'react';
import './MarketingTeamBuilding.css'; // Make sure to create and include this CSS file
import marketingImage from '../assets/images/teamwork-quotes.png'; // Replace with your image path

function MarketingTeamBuilding() {
    return (
        <section className="marketing-team-building">
            <div className="marketing-image">
                <img src={marketingImage} alt="Marketing Team Building" />
            </div>
            <div className="marketing-content">
                <h2>Marketing Team Building</h2>
                <div className="content-item">
                    <h3>Talent Acquisition</h3>
                    <p>Recruit top-performing marketers to drive results.</p>
                </div>
                <div className="content-item">
                    <h3>Training & Development</h3>
                    <p>Upskill your team to be more effective and efficient.</p>
                </div>
                <div className="content-item">
                    <h3>Process Optimization</h3>
                    <p>Streamline workflows and implement best practices.</p>
                </div>
            </div>
        </section>
    );
}

export default MarketingTeamBuilding;
