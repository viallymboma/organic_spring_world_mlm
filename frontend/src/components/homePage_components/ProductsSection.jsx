import React from 'react';
import { testedImages } from './ImageSlider';
import image2 from "../../assets/images/hero_section_img/arthrow_root.png"
import { AnchorButton } from '../Button';


const ProductsSection = () => {
  return (
    <main className='ProductsSectionContent'>
        <div className="title">
          <h1>Our Products</h1>
          <h1 className='veryBig'>Ayurvedic</h1>
        </div>

        <div className="smalParag">
          <p>We are one of the best Organic Herbal Product Manufacturer in India.</p>
        </div>

        <div className="productContent">

          {
            testedImages.map(image => {
              return (
                // <Tilt></Tilt>
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
                        {/* <img src={image.image} alt="" srcSet="" /> */}
                      </div>
                      <div className="number">
                        <h1>{image.number}</h1>
                      </div>
                    </div>
                    <h3> { image.title } </h3>
                    <p>{ image.description }</p>
                    {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                      Iste nobis deleniti fugiat, iure, enim similique ad facere 
                      tempore porro quos, unde perferendis harum commodi laboriosam 
                      expedita quo quis saepe ullam?</p> */}

                    <AnchorButton fontSize={20} theLink="about/" btnText="Read More" />
                    {/* aditionalClassName="currentAnchoBtn" */}
                  </div>
                </div>
              )
            })
          }
        </div>
    </main>
  );
};

export default ProductsSection;