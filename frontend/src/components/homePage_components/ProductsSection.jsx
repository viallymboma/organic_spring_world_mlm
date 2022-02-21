import React from 'react';
import { testedImages } from './ImageSlider';
import image2 from "../../assets/images/hero_section_img/arthrow_root.png"
import { ALinkCustomized, AnchorButton } from '../Button';
import L_GLUTHATION_GINSENG2 from "../../assets/images/hero_section_img/L_GLUTHATION_GINSENG2.png"
import redirectOutside from './RedirectLink';

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

        <div className="startProduct">
          <div className="productSide">
            <img src={L_GLUTHATION_GINSENG2} alt="" srcset="" />
          </div>
          <div className="rightSideDescription">
            <div className="titl">
              <h1>SPRINGCELL MAX</h1>
            </div>
            <div className="description">
              <ul>
                <li className='style_list'>
                  <div className="list_style"></div> 
                  <span>Powerful antioxidant </span>
                </li>
                <br />
                <li className='style_list'>
                  <div className="list_style"></div> 
                  <span>High potency and premium quality</span>
                </li>
                <br />
                <li className='style_list'>
                  <div className="list_style"></div> 
                  <span>Helps Boost brain function, promotes focus, concentration and energy </span>
                </li>
                <br />
                <li className='style_list'>
                  <div className="list_style"></div> 
                  <span>Helps Detoxifies your liver and body </span>
                </li>
                <br />
                <li className='style_list'>
                  <div className="list_style"></div> 
                  <span>Helps Enhance absorption and Bioavailability </span>
                </li>
                <br />
                <li className='style_list'>
                  <div className="list_style"></div> 
                  <span>Helps Enriched with naturally occurring ingredients </span>
                </li>
                <br />
                <li className='style_list'>
                  <div className="list_style"></div> 
                  <span>Helps Improves performance and stamina </span>
                </li>
                <br />
                <li className='style_list'>
                  <div className="list_style"></div> 
                  <span>Helps Improves skin condition, hyperpigmentation and acne scars, lightens and brighten skin naturally.</span>
                </li>
                <br />
              </ul>
            </div>
          </div>
        </div>

        <div className="productContent">

          {
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
                    <h3> { image.title } </h3>
                    <p>{ image.description }</p>

                    <AnchorButton fontSize={20} theLink="about/" onACLick={redirectOutside} btnText="Read More" />
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












                    {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                      Iste nobis deleniti fugiat, iure, enim similique ad facere 
                      tempore porro quos, unde perferendis harum commodi laboriosam 
                      expedita quo quis saepe ullam?</p> */}
                      {/* aditionalClassName="currentAnchoBtn" */}