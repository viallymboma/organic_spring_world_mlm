import React from 'react';
import { ChevronBackOutline, ChevronForwardOutline } from 'react-ionicons';

const Dots = ({ activeIndex, onclick, ImageSlider }) => {
  return (
    <div className='DotsStyle'>
      {
        ImageSlider.map((slide, index) => (
            <span 
                key={index} 
                onClick={() => onclick(index)} 
                className={`${activeIndex === index ? "dot active_dot" : "dot" }`}></span>
        ))
      }
    </div>
  );
};

export default Dots;
