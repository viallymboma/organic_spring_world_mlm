import React from 'react';
import { ChevronBackOutline, ChevronForwardOutline } from 'react-ionicons';

const Arrows = ({ prevSlide, nextSlide }) => {
  return (
    <div className='ArrowsStyle'>
      <div className="arrow_left_div">
          <ChevronBackOutline color="black" onClick={prevSlide} />
        </div>

        <div className="arrow_right_div">
          <ChevronForwardOutline color="black" onClick={nextSlide} />
        </div>
    </div>
  );
};

export default Arrows;
