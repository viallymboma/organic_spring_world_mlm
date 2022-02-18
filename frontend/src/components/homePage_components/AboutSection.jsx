import React from 'react';
// import image1 from "../../assets/images/hero_section_img/agile_plus.png"
// import image2 from "../../assets/images/hero_section_img/SPRINGCELLMAX_MOCK_UP8.png"
import about1 from "../../assets/images/aboutus/oswl2.jpg";
import about2 from "../../assets/images/aboutus/oswl3.jpg";
import about3 from "../../assets/images/aboutus/oswl4.jpg";
// import image3 from "../../assets/images/hero_section_img/diabospring.png"
// import image4 from "../../assets/images/hero_section_img/immunovit.png"
// import image5 from "../../assets/images/hero_section_img/s_power.png"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Tilt from 'react-vanilla-tilt'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Images, { aboutImages, certifiedImages, testedImages } from './ImageSlider'
import { AnchorButton } from '../Button';
// import {Carousel} from "react-responsive-carousel";
// import {
//   FaArrowAltCircleUp,
//   FaArrowDown,
//   FaPhone,
//   FaSearch,
//   FaShoppingCart,
//   FaUser,
// } from 'react-icons/fa';

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

      <div className="mainAboutUs">
        <div className="title">
          <h1>Who we are.</h1>
        </div>
        <div className='color1'></div>
        {/* <div className="smalParag">
          <p>We are one of the best Organic Herbal Product Manufacturer in India.</p>
        </div> */}

        <div className="aboutUsContent">
          <div className='image1' >
            <div className='imgCont'>
              <img src={about1} alt="" srcSet="" />
            </div>
            {/* <div className='dropShadow'></div> */}
            <div className='dropShadow'>
              <h2>We strive to give the best</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Tempora in, molestias nemo provident, dicta excepturi 
                saepe reprehenderit tenetur vel totam facilis nihil quam 
                temporibus rem ullam quos, praesentium quidem suscipit.
              </p>
              <AnchorButton fontSize={15} theLink="about/" btnText="Read More" />
            </div>
          </div>

        </div>
        <div className='ImageDivDown'>
          {
            aboutImages.map(img => {
              return (
                <div className='image12' >
                  <div className='imgCont'>
                    <img src={img.image} alt="" srcSet="" />
                  </div>
                  <div className='dropShadow'>
                    <h2>{img.h2_content}</h2>
                    <p>
                      { img.description }
                    </p>
                    <AnchorButton fontSize={15} theLink="about/" btnText="Read More" />
                  </div>
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






















{/* {
  testedImages.map(image => {
    return (
      <div className="specialCard">
        <div className="imgDivu">
          <img src={image.image} alt="" srcSet="" />
        </div>
        <div className="cardContent">

          <div className="picAndnumber">
            <div className="imgDiv">
              {
                image.image === image2 ? <img src={image.image} style={{ width: 60 }} alt="" srcSet="" /> : <img src={image.image} alt="" srcSet="" />
              }
            </div>
            <div className="number">
              <h1>{image.number}</h1>
            </div>
          </div>
          <h3>Card One</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste nobis deleniti fugiat, iure, enim similique ad facere tempore porro quos, unde perferendis harum commodi laboriosam expedita quo quis saepe ullam?</p>
          <AnchorButton fontSize={20} theLink="about/" btnText="Read More" />
        </div>
      </div>
    )
  })
} */}









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