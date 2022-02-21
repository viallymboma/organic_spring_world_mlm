import React from 'react';
import about1 from "../../assets/images/aboutus/oswl2.jpg";
import { AnchorButton, AnchorButtonSharp } from '../Button';
import { MedalOutline, LogoInstagram, LogoGoogle, ChevronForwardOutline, CallOutline, MailOutline, LocationOutline } from 'react-ionicons';
import redirectOutside from './RedirectLink';

const ParalaxSection = () => {
  return (
    <div className='ParalaxSectionContent'>
        {/* <div className='image1' >
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
          </div> */}

          <div className="overLay">
            {/* <MedalOutline color="white" /> */}
            <h1>We strive to give the best</h1>
            <p>
              Established in the year 2002, we have been the 
              Leading Food Supplement Product Manufacturer as well as
              the Ayurveda company.
              <br />
              We offer Highly effective Herbal and Ayurvedic Formulations
              for domestic and international Market
            </p>

            <AnchorButtonSharp onACLick={redirectOutside} className="encore" fontSize={15} theLink="about/" btnText="Read More" />
            
            <div className="design"></div>
            <div className="design2"></div>
          </div>
    </div>
  )
}

export default ParalaxSection