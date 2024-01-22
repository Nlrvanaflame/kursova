import React from 'react';
import { Link } from 'react-router-dom';
import './BackButton.css';

function BackToPage1Button() {
  return (
    <Link to="/page1" className="back-button"> &larr;</Link>
  );
}

export default BackToPage1Button;
