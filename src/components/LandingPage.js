import React from 'react';
import './LandingPage.css'; 
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="background-image">
      <h1 className="title">Elysium Motors Haven</h1>
      <p className="subtitle">Elevate Your Drive to Paradise!</p>
      <Link to="/page1" className="enter-button">Enter Paradise</Link>
    </div>
  );
}

export default LandingPage;
