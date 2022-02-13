import React from 'react';

const SliderContent = ({ activeIndex, ImageSlider }) => {
  return (
    <section className='SliderContentStyle'>
      {
        ImageSlider.map((slide, index) => (
            <div 
                key={index} 
                // oncClick={() => onclick(index)} 
                className={ index === activeIndex ? "slides active" : "inactive" }>
                <img className='slide_image' src={slide.image} alt="" />
                <h2 className='slide_title'>{slide.title}</h2>
                <h3 className='slide_text'>{ slide.description }</h3>
            </div>
        ))
      }
    </section>
  );
};

export default SliderContent;