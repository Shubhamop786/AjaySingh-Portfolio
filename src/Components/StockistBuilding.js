import React from 'react';
import './StockistBuilding.css';
import nationwideLogo from '../assets/images/icon1.png'; // Replace with your logo path
import inventoryLogo from '../assets/images/icon2.png'; // Replace with your logo path
import distributorLogo from '../assets/images/icon3.png'; // Replace with your logo path
import supportLogo from '../assets/images/icon4.png'; // Replace with your logo path

function StockistBuilding() {
    return (
      <div className="stockist-building">
        <div className="stockist-content">
          <h1>Stockist Building</h1>
          <div className="stockist-grid">
            <div className="stockist-grid-item">
              <img src={nationwideLogo} alt="Nationwide Coverage" className="stockist-icon" />
              <h3>Nationwide Coverage</h3>
              <p>Expand your reach to new markets and regions.</p>
            </div>
            <div className="stockist-grid-item">
              <img src={inventoryLogo} alt="Inventory Management" className="stockist-icon" />
              <h3>Inventory Management</h3>
              <p>Optimize stock levels to meet customer demand.</p>
            </div>
            <div className="stockist-grid-item">
              <img src={distributorLogo} alt="Distributor Partnerships" className="stockist-icon" />
              <h3>Distributor Partnerships</h3>
              <p>Forge strong relationships with key channel partners.</p>
            </div>
            <div className="stockist-grid-item">
              <img src={supportLogo} alt="Customer Support" className="stockist-icon" />
              <h3>Customer Support</h3>
              <p>Ensure seamless order fulfillment and after-sales service.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default StockistBuilding;
