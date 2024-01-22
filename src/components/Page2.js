// Page2.js
import React from 'react';
import StandardPage from './StandardPage';
import image1 from '../assets/1.jpg'; 
import image2 from '../assets/2.jpg';
import BackToPage1Button from './BackButton';

const topPicks = [
  {
    imageUrl: image1,
 
    text: 'The Mazda CX-5: Stylish, versatile compact SUV with engaging driving dynamics and advanced safety features.',
    linkUrl: '/link-to-page1',
  },
  {
    imageUrl: image2,
   
    text: 'The BMW X3: a sleek and dynamic luxury crossover with performance, style, and advanced tech.',
    linkUrl: 'https://www.bmw.bg/bg/all-models/x-series/X3/2021/bmw-x3-highlights.html',
  }
];

function Page2() {
  return (
    <div>
    <BackToPage1Button/>
    <StandardPage
      title="Family: the heartbeat of life"
      topPicks={topPicks}
      browseAllLink="/page6" 
    />
    </div>
  );
}

export default Page2;