import React, { useEffect, useRef, useState } from 'react';
import logo_gold from '../assets/images/logo/logo_basic.png';
import logo from '../assets/images/logo/logo_white.png';
import { HomeOutline, PersonCircle, Person, ChevronDown, SettingsOutline, AddCircleOutline, PersonAddOutline, LogInOutline, LogOutOutline } from 'react-ionicons'
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
      color: 'rgb(224, 190, 37)',
      IconName: 'About',
      link: "about/"
    },
    // {
    //   Icon: AddCircleOutline,
    //   // color: '#D7BE69',
    //   // df2fff
    //   color: 'rgb(224, 190, 37)',
    //   IconName: 'CompPlan'
    // },
    {
      Icon: LogInOutline,
      color: 'rgb(224, 190, 37)',
      IconName: 'Login',
      link: "login/"
    },
    {
      Icon: Person,
      color: 'rgb(224, 190, 37)',
      IconName: 'Signup',
      link: "registration/"
    },
    // {
    //   Icon: LogOutOutline,
    //   color: ''
    // }
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
    if (window.scrollY < 100) {
      return setHeaderOnScroll("BigScreenNavigationBar")
    } else if (window.scrollY > 100) {
      return setHeaderOnScroll("BigScreenNavigationBarScroll")
    }
  }

  useEffect (() => {
    highlighterRef.current.style.left = `${(LINK_WIDTH * active) + (LINK_WIDTH / 50)}px`;
  }, [active])

  useEffect (() => {
    window.addEventListener('scroll', listenSrollEvent);
    return () =>{
      window.removeEventListener('scroll', listenSrollEvent);
    }
  }, [])

  return (
    <nav className={headerOnScroll}>
        {/* Big Screen Navigation Bar */}
        <div className="overAllContainer">
          <div className="logoContainer">
            {/* Conditionally putting corresponding logo */}
            {
              window.pageYOffset > 100 ? <img src={logo} alt="logo" /> : <img src={logo_gold} alt="logo" />
            }
          </div>
          <div className="middleContainer">
            
            <ul>
              {
                navLinks.map(({ Icon, IconName, link }, i) => {
                  return (
                    <li style={{ width: `${LINK_WIDTH}%`, color: 'white' }} className={active === i ? 'active' : ""} onClick={() => setActive(i)} key={i}>
                      <Link to={link}>
                      <div color="#fff" width="40px" height="30px" className="icon" >{IconName}</div>
                      {/* <Icon color="#fff" width="40px" height="30px" className="icon" >{IconName}</Icon> */}
                      </Link>
                    </li>
                  )
                })
              }
              <StyledHighlighter color={navLinks[active].color} ref={ highlighterRef } id="highlighter" />
            </ul>
          </div>

          <div className="userContainer">
            <Link to="login/">
              <LogInOutline color={window.pageYOffset > 100 ? "white" : "black" } width="40px" height="30px" className="icon" ></LogInOutline>
            </Link>
            <Link to="registration/">
              <Person color={window.pageYOffset > 100 ? "white" : "black" } width="40px" height="30px" className="icon" ></Person>
            </Link>
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