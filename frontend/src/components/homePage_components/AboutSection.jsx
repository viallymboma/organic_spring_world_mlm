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
import { AnchorButton, AnchorButtonSharp } from '../Button';
// import {Carousel} from "react-responsive-carousel";
// import {
//   FaArrowAltCircleUp,
//   FaArrowDown,
//   FaPhone,
//   FaSearch,
//   FaShoppingCart,
//   FaUser,
// } from 'react-icons/fa';
import { CheckmarkDoneCircleOutline, EyeOutline, LogoFacebook, BulbOutline, LogoInstagram, LogoGoogle, ChevronForwardOutline, CallOutline, MailOutline, LocationOutline } from 'react-ionicons';

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

      <div className="bg"></div>
      <div className="bg2"></div>

      <div className="mainAboutUs">
        <div className="title">
          <h1>Who we are.</h1>
        </div>
        <div className='color1'></div>

        <div className="aboutUsContent">
          <div className='image1' >
            <div className='imgCont'>
              <img src={about1} alt="" srcSet="" />
            </div>
            <div className='dropShadow'>
              <h2>We strive to give the best</h2>
              <p>
                Established in the year 2002, we have been the 
                Leading Food Supplement Product Manufacturer as well as
                the Ayurveda company.
                <br />
                We offer Highly effective Herbal and Ayurvedic Formulations
                for domestic and international Market
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
                    <p>
                    </p>
                    <AnchorButton className="encore" fontSize={15} theLink="about/" btnText="Read More" />
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>

      <div className="bluredBG">
        <div className="blured">

        </div>
        <div className="wrapper">
          <div className='TextArea'>
            <div className="OurObjectives textCard">
              <div className="OurObjectivesIcons">
                <BulbOutline color="green" />
              </div>
              <div className="OurObjectivesTitle">
                <h2>Our Objective </h2>
              </div>
              <div className="OurObjectivesText">
                <p>
                  Being a leading Ayurvedic and Herbal Product supplier, 
                  the sole objective of the ayurveda company in India is customer 
                  satisfaction by delivering excellent products at best price. 

                  {/* and reliable services through our commitment, hard work and dedication.  */}
                  {/* Our superior products and services elevate the quality of life worldwide. */}
                </p>
              </div>
              <div className='ReadMoreBtnDiv'>
                <AnchorButtonSharp className="encore" fontSize={15} theLink="about/" btnText="Read More" />
              </div>
            </div>
            <div className="OurVision textCard">
              <div className="OurVisionIcons">
                <EyeOutline color="green" />
              </div>
              <div className="OurVisionTitle">
                <h2>Our Vision</h2>
              </div>
              <div className="OurVisionText">
                <p>
                  Being top Herbal Product Manufacturer in India, our aim is to offer 
                  people with the knowledge of ancient Ayurveda with a touch of technology 
                  through never ending research. 
                  {/* Our R and D team always strive to offer best 
                  possible amalgamation of Ayurveda and Science as well as to enrich people 
                  financially through our multi level marketing */}
                </p>
              </div>
              <div className='ReadMoreBtnDiv'>
                <AnchorButtonSharp className="encore" fontSize={15} theLink="about/" btnText="Read More" />
              </div>
            </div>
            <div className="QualityControl textCard">
              <div className="QualityControlIcon">
                <CheckmarkDoneCircleOutline color="green" style={{ fontSize: 200 }} />
              </div>
              <div className="QualityControlTitle">
                <h2> Quality Control </h2>
              </div>
              <div className="QualityControlText">
                <p>
                  Being a leading and trusted Herbal Product Manufacturer with breakthrough award 
                  winning products optimum quality is the best policy. 
                  We do not compromise on quality.
                  {/* of raw herb to offer the best quality Herbal Ayurvedic supplements, by focusing on 
                  constant commitment and hard work. */}
                </p>
              </div>
              <div className='ReadMoreBtnDiv'>
                <AnchorButtonSharp className="encore" fontSize={15} theLink="about/" btnText="Read More" />
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </main>
  );
};

export default AboutSection;










// <div className='TextArea'>
//           <div className="OurObjectives textCard">
//             <div className="OurObjectivesIcons">
//               <BulbOutline />
//             </div>
//             <div className="OurObjectivesTitle">
//               <h2>Our Objective </h2>
//             </div>
//             <div className="OurObjectivesText">
//               <p>
//                 Being a leading Ayurvedic and Herbal Product supplier, 
//                 the sole objective of the ayurveda company in India is customer 
//                 satisfaction by delivering excellent products at best price. 

//                 {/* and reliable services through our commitment, hard work and dedication.  */}
//                 {/* Our superior products and services elevate the quality of life worldwide. */}
//               </p>
//             </div>
//             <div className='ReadMoreBtnDiv'>
//               <AnchorButton className="encore" fontSize={15} theLink="about/" btnText="Read More" />
//             </div>
//           </div>
//           <div className="OurVision textCard">
//             <div className="OurVisionIcons">
//               <EyeOutline />
//             </div>
//             <div className="OurVisionTitle">
//               <h2>Our Vision</h2>
//             </div>
//             <div className="OurVisionText">
//               <p>
//                 Being top Herbal Product Manufacturer in India, our aim is to offer 
//                 people with the knowledge of ancient Ayurveda with a touch of technology 
//                 through never ending research. 
//                 {/* Our R and D team always strive to offer best 
//                 possible amalgamation of Ayurveda and Science as well as to enrich people 
//                 financially through our multi level marketing */}
//               </p>
//             </div>
//             <div className='ReadMoreBtnDiv'>
//               <AnchorButton className="encore" fontSize={15} theLink="about/" btnText="Read More" />
//             </div>
//           </div>
//           <div className="QualityControl textCard">
//             <div className="QualityControlIcon">
//               <CheckmarkDoneCircleOutline style={{ fontSize: 200 }} />
//             </div>
//             <div className="QualityControlTitle">
//               <h2> Quality Control </h2>
//             </div>
//             <div className="QualityControlText">
//                 Being a leading and trusted Herbal Product Manufacturer with breakthrough award 
//                 winning products optimum quality is the best policy. 
//                 We do not compromise on quality.
//                 {/* of raw herb to offer the best quality Herbal Ayurvedic supplements, by focusing on 
//                 constant commitment and hard work. */}
//             </div>
//             <div className='ReadMoreBtnDiv'>
//               <AnchorButton className="encore" fontSize={15} theLink="about/" btnText="Read More" />
//             </div>
//           </div>
//         </div>











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