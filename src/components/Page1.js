import React from 'react';
import { Link } from 'react-router-dom';
import './Page1.css'; // Make sure this file contains your CSS styles
import image1 from "../assets/kola2.png"
import image2 from "../assets/kola3.png"
import image3 from "../assets/kola4.png"
import image4 from "../assets/kola5.png"

function Page1() {
    return (
      <div>
         <header className="site-header">
        <h1>Elysium Motors Haven</h1>
      </header>
        <div className="image-grid">
          <div className="image-container">
            <Link to="/page2" className="image-link">
              <img src={image1} alt="Description for Image 1"/>
              <div className="overlay">
              <div className="text">Family</div>
              </div>
              </Link>
              </div>
              <div className="image-container">
    <Link to="/page3" className="image-link">
      <img src={image2} alt="Description for Image 2" />
      <div className="overlay">
        <div className="text">Adventure</div>
      </div>
    </Link>
  </div>

  <div className="image-container">
    <Link to="/page4" className="image-link">
      <img src={image3} alt="Description for Image 3" />
      <div className="overlay">
        <div className="text">Turbo Thrifty</div>
      </div>
    </Link>
  </div>

  <div className="image-container">
    <Link to="/page5" className="image-link">
      <img src={image4} alt="Description for Image 4" />
      <div className="overlay">
        <div className="text">Samurai Speedster</div>
      </div>
    </Link>
  </div>
</div>
</div>
    );
}

export default Page1;
