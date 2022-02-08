import React from 'react';
import { ChevronBackOutline, ChevronForwardOutline } from 'react-ionicons';

const HeroSection = () => {
  return (
    <div className='HeroSectionContent'>
        <div className="arrow_left_div">
          <ChevronBackOutline color="black" />
        </div>

        <div className="arrow_right_div">
          <ChevronForwardOutline color="black" />
        </div>
    </div>
  );
};

export default HeroSection;