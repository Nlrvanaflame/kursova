
import React from 'react';
import StandardPage from './StandardPage';
import image1 from '../assets/13.jpg'; 
import image2 from '../assets/14.jpg'; 
import BackToPage1Button from './BackButton';

const topPicks = [
  {
    imageUrl: image1,
    
    text: 'The Toyota GR86 is a nimble and performance-focused rear-wheel-drive coupe in Toyota`s Gazoo Racing series',
    linkUrl: 'https://www.toyota.bg/discover-toyota/toyota-gazoo-racing/gr-86',
  },
  {
    imageUrl: image2,
  
    text: 'The Nissan GT-R is a high-performance sports car known for its speed, twin-turbo engine, and iconic design.',
    linkUrl: 'https://www.omnicar.nissan.bg/model/5',
  }
];

function Page5() {
  return (
    <div>
    <BackToPage1Button/>
    <StandardPage
      title="Unleash the spirit of the Samurai Speedster, where elegance meets velocity on the open road!"
      topPicks={topPicks}
      browseAllLink="/page9"
    />
    </div>
  );
}

export default Page5;