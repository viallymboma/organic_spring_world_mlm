import React, { useEffect, useState } from 'react';
import { ChevronBackOutline, ChevronForwardOutline } from 'react-ionicons';
import Slider from './Slider';

// import { Swiper, SwiperSlide } from 'swiper/react';

import Parallax from 'react-rellax';

import "react-responsive-carousel/lib/styles/carousel.min.css";
// import {Carousel} from "react-responsive-carousel";
import ImageSlider from './ImageSlider';
import Button from '../Button';
import redirectOutside from './RedirectLink';

const len = ImageSlider.length - 1;

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    let measurements = {}
    return measurements = {
        width,
        height
    };
  }

  const measurements = getWindowDimensions();

  const [windowDimensions, setWindowDimensions] = useState(measurements);
  useEffect(() => {
      const interval = setInterval(() => {
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      }, 5000);

      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        clearInterval(interval)
      };
  }, [activeIndex]);

  const runSetActiveIndex = (direction) => {
    console.log("first");
    if (direction === "prev") {
      setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
      console.log("prev");
    } else if (direction === "next") {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
      console.log("next");
    }
  }

  

  const determinHeroImageParalaxSpeed = () => {
    let paralaxValue = -5;
    if (measurements.width > 1360) {
      return paralaxValue;
    } else if (measurements.width === 1360 && measurements.width > 500) {
      return paralaxValue = -1
    }
  }

  
  return (
    
    <div className='HeroSectionContent'>
      <div className="arrow_left_div">
        <ChevronBackOutline color="black" onClick={() => runSetActiveIndex("prev")} />
      </div>


      <section className='SliderContentStyle'>
      {
        ImageSlider.map((slide, index) => (
            <div 
                key={index}
                className={ index === activeIndex ? "slides active" : "inactive" }>
                  <div className="write_up">
                    {
                      slide.small_title ? <div className="small_title">
                      <h5>{slide.small_title}</h5>
                    </div> : null
                    }
                    <div className="h2_style">
                      <h2 className='slide_title'>{slide.title}</h2>
                    </div>
                    <div className="h3_style">
                      <h3 className='slide_text'>{ slide.description }</h3>
                    </div>
                    <a href="https://organicspring.world/Organic_Spring_WorldAFRICA.pdf">
                      <Button text="Explore" onACLick={redirectOutside} />
                    </a>
                  </div>
                  <div className="imgDiv">
                  {/* speed={ determinHeroImageParalaxSpeed() } */}
                    <Parallax speed={ 0 } className="intermediary">
                      <img className='slide_image' src={slide.image} alt="" />
                    </Parallax>
                  </div>
            </div>
        ))
      }
      </section>


      <div className="arrow_right_div">
        <ChevronForwardOutline color="black" onClick={() => runSetActiveIndex("next")} />
      </div>

      <div className='DotsStyle'>
      {
        ImageSlider.map((slide, index) => (
            <span 
                key={index} 
                onClick={() => setActiveIndex(index)} 
                className={`${activeIndex === index ? "dot active_dot" : "dot" }`}></span>
        ))
      }
      </div>
    </div>
  );
};

export default HeroSection;










// <Carousel 
    //   infiniteLoop autoPlay
    //   interval={5000}
    //   className='HeroSectionContent'>

    //     <div className="img_div">
    //       <img src={image1} alt="organic bottle" />
    //     </div>
    //     <div className="img_div">
    //       <img src={image2} alt="organic bottle" />
    //     </div>
    //     <div className="img_div">
    //       <img src={image3} alt="organic bottle" />
    //     </div>
    // </Carousel>

    // <div className='HeroSectionContent'>
    //   <Slider />
    // </div>