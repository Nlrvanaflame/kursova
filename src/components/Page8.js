import React from 'react';
import './Page8.css';
import image1 from '../assets/7.jpg'; 
import image2 from '../assets/8.jpg'; 
import image3 from '../assets/9.jpg'; 
import image4 from '../assets/10.jpg'; 
import BackToPage1Button from './BackButton';

function Page8() {
  const pictures = [
    {
      imageUrl: image1,
     
      text: (
        <a href="https://www.dacia.bg/cars/jogger/overview.html">
        Daccia Jogger
        </a>
      ),
    },
    {
      imageUrl: image2,
      
      text: (
        <a href="https://sale.citroen.bg/cars/search/c3">
         C3 Aircross
        </a>
      ),
    },
    {
      imageUrl: image3,
      
      text: (
        <a href=" https://hyundai.bg/cars/new-i10">
         Huyndai i10   
        </a>
      ),
    },
    {
      imageUrl: image4,
     
      text: (
        <a href="https://www.skoda-auto.bg/models/new_fabia/new_fabia">
         Skoda Fabia
        </a>
      ),
    }
  ];

  return (
    <div>
    <BackToPage1Button/>
    <div className="page8">
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

export default Page8;
