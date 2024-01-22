// StandardPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './StandardPage.css';

function StandardPage({ title, topPicks, browseAllLink }) { 
  return (
    <div className="standard-page">
      <h1 className="main-header">{title}</h1>
      
      <h2 className="top-picks-header">Our Top Picks</h2>
      <div className="top-picks-container">
        {topPicks.map((pick, index) => (
          <div key={index} className="pick-item">
            <img src={pick.imageUrl} alt={pick.imageAlt} />
            <div className="pick-text"> <a href={pick.linkUrl}>{pick.text}</a></div>
          </div>
        ))}
      </div>
      
      <Link to={browseAllLink} className="browse-all-button">Browse All</Link>
    </div>
  );
}

export default StandardPage;
