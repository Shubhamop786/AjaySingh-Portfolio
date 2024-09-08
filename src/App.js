// src/App.js
import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';

import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';
import About from './Components/About';
import Services from './Components/Services';
import Expertise from './Components/Expertise';
import Companies from './Components/Companies';
import MarketingTeamBuilding from './Components/MarketingTeamBuilding';
import StockistBuilding from './Components/StockistBuilding';
import SalesGrowth from './Components/SalesGrowth';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
     <About />
     <Expertise/>
     <Services />
     <Companies/>
     <MarketingTeamBuilding/>
     <StockistBuilding/>
     <SalesGrowth/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
