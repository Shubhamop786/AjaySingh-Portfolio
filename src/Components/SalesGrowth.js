import React from 'react';
import './SalesGrowth.css'; // Make sure to create and include this CSS file
import salesgrowthimg from '../assets/images/growthstrategies.webp'; // Replace with your image path

function SalesGrowth() {
    return (
        <section className="salesgrowth">
            <div className="salesgrowth-content">
                <h2>Salesgrowth Team Building</h2>
                <div className="content-item">
                    <h3>Market Research</h3>
                    <p>Understand customer needs and competitive landscape.</p>
                </div>
                <div className="content-item">
                    <h3>Product Positioning</h3>
                    <p>Differentiate your offerings and appeal to target segments.</p>
                </div>
                <div className="content-item">
                    <h3>Channel Optimization</h3>
                    <p>Identify and leverage the most effective sales channels.</p>
                </div>
            </div>
            <div className="salesgrowth-image">
                <img src={salesgrowthimg} alt="Salesgrowth Team Building" />
            </div>
        </section>
    );
}

export default SalesGrowth;
