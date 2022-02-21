import React, { useEffect, useRef, useState } from 'react';
import logo_gold from '../assets/images/logo/logo_basic.png';
import logo from '../assets/images/logo/logo_white.png';
import { AppsOutline, CloseOutline, ListOutline, HomeOutline, CallOutline, PhonePortraitOutline, MailOutline, ChatbubbleOutline, PersonCircle, Person, ChevronDown, SettingsOutline, AddCircleOutline, PersonAddOutline, LogInOutline, LogOutOutline, Flag, Close } from 'react-ionicons'
import { Link, Router } from 'react-router-dom';

import styled from 'styled-components';
import { AnchorButtonSharp, ButtonSharp, AnchorButton } from './Button';
import redirectOutside, { redirectToSignInOutside, redirectToSignUpOutside } from './homePage_components/RedirectLink';

const CombinedNavigations = () => {



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
    const [sideNavState, setSideNavState] = useState(false);

    const toggleSideNavBar = () => {
        setSideNavState (!sideNavState);
    }

    const closeSideNavBar = () => {
        setSideNavState (false);
    }

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
    `;

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

    let whicIcon = (
        <AppsOutline />
    )
    // let whichColor = 'rgb(182, 141, 6)'

    if (sideNavState === false) {
        
        if (window.pageYOffset > 100) {
            whicIcon = (
                <AppsOutline color="white" />
            )
        } else {
            whicIcon = (
                <AppsOutline color="rgb(182, 141, 6)" />
            )
        }
    } else if (sideNavState === true) {
        if (window.pageYOffset > 100) {
            whicIcon = (
                <CloseOutline color="white" />
            )
        } else {
            whicIcon = (
                <CloseOutline color="rgb(182, 141, 6)" />
            )
        }
    }

    return (
        <>
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
                            <a href='https://organicspring.world/' className='Linky'>
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
                            </a>
                            {
                                // navLinks.map(({ Icon, IconName, link }, i) => {
                                //   return (
                                //     <Link className='Linky' to={link}>
                                //       <li style={{ width: `${LINK_WIDTH}%`, color: 'white' }} className={active === i ? 'active' : ""} onClick={() => setActive(i)} key={i}>
                                //         <div color="#fff" width="40px" height="30px" className="icon" >{IconName}</div>
                                        
                                //       </li>
                                //     </Link>
                                //   )
                                // })
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

                    <div className="lastDiv" onClick={ toggleSideNavBar }>
                        {/* {
                            sideNavState === false ? 
                        } */}
                        {whicIcon}
                        {/* {
                            window.pageYOffset > 100 ? <AppsOutline color="white" /> : <AppsOutline color="rgb(182, 141, 6)" />
                        } */}

                        {/* <ListOutline color="black" /> */}
                    </div>
                </div>
            </nav>

            <div className={ sideNavState === true ? "dropShadowClose showDropShadowClose" : "dropShadowClose" } onClick={closeSideNavBar} >

            </div>
            
            <div className={ sideNavState === true ? 'openSmallScreenNavigationBar SmallScreenNavigationBar' : 'SmallScreenNavigationBar'}>
                
                <div className="closeBtn" onClick={ toggleSideNavBar }>
                    <CloseOutline color="rgb(182, 141, 6)" />
                </div>
                <div className="navDiv">
                    <div className='ReadMoreBtnDiv'>
                        <AnchorButtonSharp className="encore" fontSize={15} theLink="/" btnText="Home" />
                    </div>
                    <div className='ReadMoreBtnDiv'>
                        {/* <AnchorButtonSharp className="encore" fontSize={15} theLink="registration/" btnText="Sign Up" /> */}
                        <AnchorButtonSharp onACLick={redirectToSignUpOutside} className="encore" fontSize={15} btnText="Sign Up" />
                    </div>
                    <div className='ReadMoreBtnDiv'>
                        {/* <AnchorButtonSharp className="encore" fontSize={15} theLink="login/" btnText="Sign In" /> */}
                        <AnchorButtonSharp onACLick={redirectToSignInOutside} className="encore" fontSize={15} btnText="Sign In" />
                    </div>
                    <div className='ReadMoreBtnDiv'>
                        <AnchorButtonSharp onACLick={redirectOutside} className="encore" fontSize={15} btnText="Compensation Plan" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CombinedNavigations