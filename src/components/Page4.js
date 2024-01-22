
import React from 'react';
import StandardPage from './StandardPage';
import image1 from '../assets/11.jpg'; 
import image2 from '../assets/12.jpg'; 
import BackToPage1Button from './BackButton';

const topPicks = [
  {
    imageUrl: image1,
    imageAlt: 'Description of Image 1',
    text: 'Introducing the Peugeot 208: where style meets performance for a sleek urban driving experience.',
    linkUrl: 'https://www.peugeot.bg/our-models/208.html',
  },
  {
    imageUrl: image2,
    imageAlt: 'Description of Image 2',
    text: 'Introducing the Opel Mokka: style and versatility for dynamic urban adventures.',
    linkUrl: 'https://www.opel.bg/koli/modeli-opel-mokka.html',
  }
];

function Page4() {
  return (
    <div>
    <BackToPage1Button />
    <StandardPage
      title="Boost your budget with Turbo Thrifty – where savings take the fast lane! "
      topPicks={topPicks}
      browseAllLink="/page8" 
    />
    </div>
  );
}

export default Page4;