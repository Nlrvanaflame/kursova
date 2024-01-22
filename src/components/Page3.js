
import React from 'react';
import StandardPage from './StandardPage';
import image1 from '../assets/19.jpg'; 
import image2 from '../assets/20.jpg';
import BackToPage1Button from './BackButton';

const topPicks = [
  {
    imageUrl: image1,
  
    text: 'The BMW Z4: A sleek and sporty convertible or coupe, known for its powerful performance and luxurious design.',
    linkUrl: 'https://www.bmw.bg/bg/all-models/z-series/roadster/2022/bmw-z4-overview.html',
  },
  {
    imageUrl: image2,
   
    text: 'Mercedes-AMG SL: Luxury meets power in a convertible masterpiece.',
    linkUrl: 'https://www.mercedes-benz.bg/passengercars/mercedes-benz-cars/models/sl/roadster-r232/pad.html',
  }
];

function Page3() {
  return (
    <div>
    <BackToPage1Button />
    <StandardPage
      title="Embark on epic journeys with Adventure, where the thrill of the unknown becomes your companion! "
      topPicks={topPicks}
      browseAllLink="/page7" 
    />
  </div>
  );
}

export default Page3;