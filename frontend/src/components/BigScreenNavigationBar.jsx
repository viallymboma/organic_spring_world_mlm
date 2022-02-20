import React, { useEffect, useRef, useState } from 'react';
import logo_gold from '../assets/images/logo/logo_basic.png';
import logo from '../assets/images/logo/logo_white.png';
import { AppsOutline, ListOutline, HomeOutline, CallOutline, PhonePortraitOutline, MailOutline, ChatbubbleOutline, PersonCircle, Person, ChevronDown, SettingsOutline, AddCircleOutline, PersonAddOutline, LogInOutline, LogOutOutline } from 'react-ionicons'
import { Link, Router } from 'react-router-dom';

import styled from 'styled-components';

const BigScreenNavigationBar = () => {
  
  
  const navLinks = [
    {
      Icon: HomeOutline,
      // color: '#5da6ff',
      color: 'rgb(224, 190, 37)',
      IconName: 'Home',
      link: "/"
    },
    {
      Icon: SettingsOutline,
      color: 'green',
      IconName: 'About',
      link: "about/"
    },
    // {
    //   Icon: AddCircleOutline,
    //   // color: '#D7BE69',
    //   // df2fff
    //   color: 'green',
    //   IconName: 'CompPlan'
    // },
    {
      Icon: LogInOutline,
      color: 'green',
      IconName: 'Login',
      link: "login/"
    },
    {
      Icon: Person,
      color: 'green',
      IconName: 'Signup',
      link: "registration/"
    },
    {
      Icon: Person,
      color: 'green',
      IconName: 'Complan',
      link: "complan/"
    }
  ]

  const [active, setActive] = useState(0);
  const [headerOnScroll, setHeaderOnScroll] = useState("BigScreenNavigationBar")
  const highlighterRef = useRef();
  const LINK_WIDTH = 100;
  const StyledHighlighter = styled.div`
    &:before {

      background-color: ${props => props.color};
      box-shadow: 
          0 0 15px ${props => props.color},
          0 0 30px ${props => props.color},
          0 0 45px ${props => props.color},
          0 0 60px ${props => props.color};
    }
  `

  const listenSrollEvent = (event) => {
    // if (window.scrollY < 100) {
    //   return setHeaderOnScroll("BigScreenNavigationBar")
    // } else if (window.scrollY > 100) {
    //   return setHeaderOnScroll("BigScreenNavigationBarScroll")
    // }

    if (window.pageYOffset < 100) {
      return setHeaderOnScroll("BigScreenNavigationBar")
    } else if (window.pageYOffset > 100) {
      return setHeaderOnScroll("BigScreenNavigationBarScroll")
    }
  }

  // useEffect (() => {
  //   highlighterRef.current.style.left = `${(LINK_WIDTH * active) + (LINK_WIDTH / 50)}px`;
  // }, [active])

  useEffect (() => {
    window.addEventListener('scroll', listenSrollEvent);
    return () =>{
      window.removeEventListener('scroll', listenSrollEvent);
    }
  }, [])

  return (
    <nav className={headerOnScroll}>
        {/* Big Screen Navigation Bar */}
        {
          headerOnScroll === "BigScreenNavigationBar" ? 
          <div className="topestDiv">
            <div className="contactPhone">
              <CallOutline color="white" />
              <div className="callText"><h3>09178 3844 8792</h3></div>
            </div>
            <div className="contactEmail twog">
              <MailOutline color="white" />
              <div className="callText"><h3>info@organicspringworld.com</h3></div>
            </div>
          </div> : null
        }
        <div className="overAllContainer">
          <div className="logoContainer">
            {/* Conditionally putting corresponding logo */}
            {
              window.pageYOffset > 100 ? <Link className='Linky' to="/"><img src={logo} alt="logo" /></Link> : <Link className='Linky' to="/"><img src={logo_gold} alt="logo" /></Link>
            }
          </div>
          <div className="middleContainer">

            <ul>
              {/* <a href='https://organicspring.world/' className='Linky'>
                <li style={{ width: `${LINK_WIDTH}%`, color: 'white' }} className='active'>
                  <div color="#fff" width="40px" height="30px" className="icon" >Home</div>
                </li>
              </a>
              <a href='https://organicspring.world/system/site/register' className='Linky'>
                <li style={{ width: `${LINK_WIDTH}%`, color: 'white' }} className='active'>
                  <div color="#fff" width="40px" height="30px" className="icon" >Sign Up</div>
                </li>
              </a>
              <a href='https://organicspring.world/system/site/login' className='Linky'>
                <li style={{ width: `${LINK_WIDTH}%`, color: 'white' }} className='active'>
                  <div color="#fff" width="40px" height="30px" className="icon" >Sign In</div>
                </li>
              </a>
              <a href='https://organicspring.world/Organic_Spring_WorldAFRICA.pdf' className='Linky'>
                <li style={{ width: `${LINK_WIDTH}%`, color: 'white' }} className='active'>
                  <div color="#fff" width="40px" height="30px" className="icon" >Comp Plan</div>
                </li>
              </a> */}
              {
                navLinks.map(({ Icon, IconName, link }, i) => {
                  return (
                    <Link className='Linky' to={link}>
                      <li style={{ width: `${LINK_WIDTH}%`, color: 'white' }} className={active === i ? 'active' : ""} onClick={() => setActive(i)} key={i}>
                        <div color="#fff" width="40px" height="30px" className="icon" >{IconName}</div>
                        
                      </li>
                    </Link>
                  )
                })
              }
              {/* <StyledHighlighter color={navLinks[active].color} ref={ highlighterRef } id="highlighter" /> */}
            </ul>
          </div>

          <div className="userContainer">
            <Link to="login/">
              <LogInOutline color={window.pageYOffset > 100 ? "white" : "#b68d06" } width="40px" height="30px" className="icon" ></LogInOutline>
            </Link>
            <Link to="registration/">
              <Person color={window.pageYOffset > 100 ? "white" : "#b68d06" } width="40px" height="30px" className="icon" ></Person>
            </Link>
            {/* <AppsOutline color="black" /> */}
            {/* <ListOutline color="black" /> */}
          </div>

          <div className="lastDiv">
            {
              window.pageYOffset > 100 ? <AppsOutline color="white" /> : <AppsOutline color="rgb(182, 141, 6)" />
            }
            
            {/* <ListOutline color="black" /> */}
          </div>
        </div>
    </nav>
  );
};

export default BigScreenNavigationBar;






{/* <ul> */}
              // {
              //   navLinks.map(({ Icon, IconName, link }, i) => {
              //     return (
              //       <li style={{ width: `${LINK_WIDTH}%`, color: 'white' }} className={active === i ? 'active' : ""} onClick={() => setActive(i)} key={i}>
                      {/* <Link to="registration/">
                      </Link> */}
                      {/* {
                        IconName == "Login" || "Signup" ? <Icon color="#fff" width="40px" height="30px" className="icon" >{IconName}</Icon> : <div color="#fff" width="40px" height="30px" className="icon" >{IconName}</div>
                      } */}
                      // <nav>
                      //   <Link to={link}>
                          {/* <div color="#fff" width="40px" height="30px" className="icon" >{IconName}</div> */}
                      //   </Link>
                      // </nav>
                      // <div color="#fff" width="40px" height="30px" className="icon" >{IconName}</div>
                      {/* <Icon color="#fff" width="40px" height="30px" className="icon" >{IconName}</Icon> */}
              //       </li>
              //     )
              //   })
              // }
            //   <StyledHighlighter color={navLinks[active].color} ref={ highlighterRef } id="highlighter" />
            // </ul>

{/* <br />
            Products
            <br />
            Gallery 
            <br />
            Videos  */}



            // Home
            // <HomeOutline />
            // <ChevronDown />
            // <br />
            // About 
            // <br />
            // Compensation Plan
            // <br />
            // Contact
            // <br />