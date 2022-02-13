import React, { useEffect, useState } from 'react';
import SliderContent from './SliderContent';
import ImageSlider from './ImageSlider';
import Arrows from './Arrows';
import Dots from './Dots';

const len = ImageSlider.length - 1;

const Slider = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className='sliderContainer'>
            <SliderContent activeIndex={activeIndex} ImageSlider={ImageSlider} />
            <Arrows
                prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlide={() =>
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
            />
            <Dots
                activeIndex={activeIndex}
                ImageSlider={ImageSlider}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            />
            
        </div>
    );
};

export default Slider;
