import React from 'react';
import './Page6.css';
import image1 from '../assets/3.jpg'; 
import image2 from '../assets/4.jpg'; 
import image3 from '../assets/5.jpg'; 
import image4 from '../assets/6.jpg'; 
import BackToPage1Button from './BackButton';

function Page6() {
  const pictures = [
    {
      imageUrl: image1,
      text: (
        <a href="https://www.volvocars.com/bg/cars/xc40/">
         Volvo XC-40
        </a>
      ),
    },
    {
      imageUrl: image2,
      text: (
        <a href="https://www.porsche.com/central-eastern-europe/en/bulgaria/models/cayenne/cayenne-models/cayenne/">
        Porsche Cayenne
        </a>
      ),
    },
    {
      imageUrl: image3,
      text: (
        <a href="https://www.mercedes-benz.bg/passengercars/mercedes-benz-cars/models/gle/suv-v167/explore.html">
         Mercedes GLE AMG 
        </a>
      ),
    },
    {
      imageUrl: image4,
      text: (
        <a href="https://www.ford.bg/cars/explorer">
         Ford Explorer
        </a>
      ),
    }
  ];

  return (
<div>
    <BackToPage1Button/>
    <div className="page6">  
      <h1 className="page-header">Gallery</h1>
      <div className="pictures-container">
        {pictures.map((picture, index) => (
          <div key={index} className="picture-item">
            <img src={picture.imageUrl} alt={picture.imageAlt} />
            <div className="pick-text">{picture.text}</div> 
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Page6;
