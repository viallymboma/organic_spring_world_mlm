import React from 'react';
// import image1 from "../../assets/images/hero_section_img/vasat_world_small.png"
// import image2 from "../../assets/images/hero_section_img/5_power_capsule.png"
// import image3 from "../../assets/images/hero_section_img/long_small.png"

// import image4 from "../../assets/images/hero_section_img/gold_green_banner.png"
// import image5 from "../../assets/images/hero_section_img/gold_green_banner_.png"
// import image6 from "../../assets/images/hero_section_img/gold_green_banner_more.png"
// import { Swiper, SwiperSlide } from 'swiper/react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { certifiedImages } from './ImageSlider'
// import {Carousel} from "react-responsive-carousel";


const AboutSection = () => {
  return (
    <main className='AboutSectionContent'>
      
      <div className="CertifiedBy">
        <div className="certifiedByHeaderDiv">
          <h1>Certified and Approved By</h1>
        </div>
        <div className="StandardCompanies">
          {
            certifiedImages.map((certImg) => {
              return (
                <div className="certImgDiv">
                  <img src={certImg.image} alt="hello" srcSet="" />
                </div>
              )
            })
          }
        </div>
      </div>
        
    </main>
  );
};

export default AboutSection;































{/* <Carousel 
infiniteLoop autoPlay
interval={5000}
className='AboutSectionContent'>

  
  <div className="img_div">
    <img src={image1} alt="organic bottle" />
  </div>
  <div className="img_div">
    <img src={image2} alt="organic bottle" />
  </div>
  <div className="img_div">
    <img src={image3} alt="organic bottle" />
  </div>

</Carousel> */}






{/* <Swiper 
  spaceBetween={50} 
  slidesPerGroup={3} 
  onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)} >
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide>
</Swiper> */}

{/* <Slider /> */}
{/* <div className="arrow_left_div">
<ChevronBackOutline color="black" />
        </div>

        <div className="img_div">
        <img src={image1} alt="img" />
        </div>
        
        
        <div className="arrow_right_div">
        <ChevronForwardOutline color="black" />
      </div> */}