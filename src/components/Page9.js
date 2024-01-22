import React from 'react';
import './Page9.css';
import image1 from '../assets/17.jpg'; 
import image2 from '../assets/18.jpg'; 
import image3 from '../assets/15.jpg'; 
import image4 from '../assets/16.jpg'; 
import BackToPage1Button from './BackButton';

function Page9() {
  const pictures = [
    {
      imageUrl: image1,
   
      text: (
        <a href="https://www.subaru.com/vehicles/brz.htm">
          Subaru BRZ.
        </a>
      ),
    },
    {
      imageUrl: image2,
     
      text: (
        <a href="https://www.mazda.bg/automobiles/mazda-mx-5-roadster/">
         Mazda MX-5
        </a>
      ),
    },
    {
      imageUrl: image3,
      
      text: (
        <a href="https://www.toyota.com/grsupra/">
         Toyota SUPRA
        </a>
      ),
    },
    {
      imageUrl: image4,
      
      text: (
        <a href="https://www.omnicar.nissan.bg/model/2">
          Nissan 370z
        </a>
      ),
    }
  ];

  return (
    <div>
    <BackToPage1Button/>
    <div className="page9">
      <h1 className="page-header">Gallery</h1>
      <div className="pictures-container">
        {pictures.map((picture, index) => (
          <div key={index} className="picture-item">
            <img src={picture.imageUrl}  />
            <div className="pick-text">{picture.text}</div> 
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Page9;
