import React from 'react';
import './Page7.css';
import image1 from '../assets/21.jpg'; 
import image2 from '../assets/22.jpg'; 
import image3 from '../assets/23.jpg'; 
import image4 from '../assets/24.jpg'; 
import BackToPage1Button from './BackButton';

function Page7() {
  const pictures = [
    {
      imageUrl: image1,
     
      text: (
        <a href="https://www.audi.bg/tt/tt-coupe/pregled">
         Audi TT
        </a>
      ),
    },
    {
      imageUrl: image2,
      
      text: (
        <a href="https://www.lexus.bg/new-cars/ls">
         Lexus LC 500 
        </a>
      ),
    },
    {
      imageUrl: image3,
      
      text: (
        <a href="https://www.ford.com/cars/mustang/models/gt-fastback/">
         Ford Mustang 5.0  
        </a>
      ),
    },
    {
      imageUrl: image4,
      
      text: (
        <a href="-https://www.porsche.com/international/models/911/911-models/carrera/">
         Porsche 911    
        </a>
      ),
    }
  ];

  return (
    <div>
    <BackToPage1Button/>
    <div className="page7">
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

export default Page7;
