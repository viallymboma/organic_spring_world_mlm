import React from 'react';

import { LogoFacebook, LogoInstagram, LogoGoogle, ChevronForwardOutline, CallOutline, MailOutline, LocationOutline } from 'react-ionicons';
import Button from './Button';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo_white.png';
import logo_gold from '../assets/images/logo/logo_basic.png';

const FooterContainer = () => {
  return (
    <div className='FooterContainer'>

        <div className="logo">
          <img src={logo_gold} alt="" />
        </div>
        <div className="FooterHeaderContainer">
          <h1>ORGANIC SPRING WORLD</h1>
        </div>

        <div className="FooterBodyContainer">
          
          <div className="GetInTouch">
            <div className="title">
              <h2>Find Us Here</h2>
            </div>
            <div className="contactDetails">
              <div className="contactAddress add_">
                <LocationOutline color="#b68d06" />
                {/* <Link to="about/"> */}
                <span>info@organicspringworld.com</span>
                {/* </Link> */}
              </div>
              <div className="contactPhone add_">
                <CallOutline color="#b68d06" />
                {/* <Link to="/"> */}
                <span>0544249377</span>
                {/* </Link> */}
              </div>
              <div className="contactMail add_">
                <MailOutline color="#b68d06" />
                {/* <Link to="about/"> */}
                <span>info@organicspringworld.com</span>
                {/* </Link> */}
              </div>
            </div>
          </div>

          <div className="ContactUs">
            <div className="title">
              <h2>Send Us Message</h2>
            </div>
            <div className="contactUsbd">
              <form action="" method="post">
                <input type="email" name="email_name" id="email_id" placeholder='Email' />
                <textarea name="" id="" cols="30" rows="10" id="text_id"></textarea>
                <Button text="Reach out" fontSize={18} />
                {/* <button type="submit">Reach Out</button> */}
              </form>
            </div>
          </div>

          <div className="Explore">
            <div className="title">
              <h2>EXPLORE</h2>
            </div>
            <div className="exploration">
              <div className="exploreHome l_in_k">
                <ChevronForwardOutline color="#b68d06" />
                <Link className='link__' to="/">Home
                  {/* <span>Home</span> */}
                </Link>
              </div>
              <div className="exploreAbout l_in_k">
                <ChevronForwardOutline color="#b68d06" />
                <Link className='link__' to="about/">
                  <span>About</span>
                </Link>
              </div>
              <div className="exploreProdcuts l_in_k">
                <ChevronForwardOutline color="#b68d06" />
                <Link className='link__' to="about/">
                  <span>Products</span>
                </Link>
              </div>
              <div className="exploreSignUp l_in_k">
                <ChevronForwardOutline color="#b68d06" />
                <Link className='link__' to="">
                  <span>Sign Up</span>
                </Link>
              </div>
              <div className="exploreSignIn l_in_k">
                <ChevronForwardOutline color="#b68d06" />
                <Link className='link__' to="">
                  <span>Login</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        <div className="SocialMedia">
          <div className="socFB allIcon">
            <LogoFacebook className="LogoFacebook" color="gold" />
          </div>
          <div className="socIG allIcon">
            <LogoInstagram className="LogoInstagram" color="gold" />
          </div>
          <div className="socGL allIcon">
            <LogoGoogle className="LogoGoogle"  color="gold" />
          </div>
        </div>

        <div className="FooterBottomContainer">
          © 2022 Creative | Made With Love By <span style={{ color: "#b68d06"  }}>OSW Software Team </span>
        </div>
    </div>
  );
};

export default FooterContainer;
