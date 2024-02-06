import React, { useEffect, useState, useRef } from "react";
import { NavLink } from 'react-router-dom';
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import '../header/Header.css';
import '../../assets/css/Style.css';
import '../../assets/css/Responsiv.css';

// import MobileMenu from "../components/header/MobileMenu";
// import '../../assets/js/Main.js';
// import { BottomSheet } from 'react-spring-bottom-sheet';
// import 'react-spring-bottom-sheet/dist/style.css'

import MobileMenu from "./MobileMenu";

// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

import logo from '../../assets/images/logo.png';
import mnuIconOne from '../../assets/images/mnuIconOne.png';
import mnuIconTwo from '../../assets/images/mnuIconTwo.png';
import mnuIconThree from '../../assets/images/mnuIconThree.png';

import $ from 'jquery'; 



function Header() {

  
  useEffect(() => {    

  });

      

  // gsap.registerPlugin(ScrollTrigger); 

  // $(function () {
  //   $('.header-wrap h3 i').removeClass("fa-chevron-up");
  //     $('.header-wrap h3').on('click', function () {
  //         if ($('.header-wrap h3 i').hasClass("fa-chevron-down")) {
  //             $(".header-wrap h3 i").removeClass("fa-chevron-down");
  //             $(".header-wrap h3 i").addClass("fa-chevron-up");
  //         }
  //         else {
  //             $('.header-wrap h3 i').addClass("fa-chevron-down");
  //             $('.header-wrap h3 i').removeClass("fa-chevron-up");
  //         }
  //     });
  //     $('#exampleModal').modal({backdrop: 'static', keyboard: false})  
  // });

  // const [open, setOpen] = useState(false)

  // function onDismiss() {
  //   setOpen(false)
  // }
    return (
      <div className="header-wrap">
        <header className="fixed-top d-flex align-items-center">
          <div className="container">
            <div className="head-wrap d-flex align-items-center justify-content-between">
              
              <div className="logo">
                <NavLink to="/">
                  <img src={logo} alt="yore-logo" />
                </NavLink>
              </div>

              <nav id="navbar" className="navbar">
                <ul>
                  {/* <li><NavLink className="nav-link scrollto" to="/">Home</NavLink></li> */}
                  <li className="dropdown"><a className="nav-link scrollto" href="javascript:void(0)">Product <i className="bi bi-chevron-right"></i></a>
                    <ul className="d-md-flex">
                        <li>
                          <NavLink to="/yore-pay">Your Pay</NavLink>
                          <NavLink to="/yore-pay/banking">Banking</NavLink>
                          <NavLink to="/yore-pay/postpaid-account">Postpaid Account</NavLink>
                          <NavLink to="/yore-pay/split-pay">Split Pay</NavLink>
                          <NavLink to="/yore-pay/cards">Cards</NavLink>
                          <NavLink to="/yore-pay/crypto">Crypto</NavLink>
                        </li>
                        <li>
                          <NavLink to="/yore-finances">Your Finances</NavLink>
                          <NavLink to="/yore-finances/cash-flow-manager">Cash Flow Manager</NavLink>
                          <NavLink to="/yore-finances/net-worth-analysis">Net Worth Analysis</NavLink>
                          <NavLink to="/yore-finances/credit-health-manager">Credit Health Manager</NavLink>
                          <NavLink to="/yore-finances/loaning">Loaning</NavLink>
                          <NavLink to="/yore-finances/budget-tracker">Budget Tracker</NavLink>
                        </li>
                        <li>
                          <NavLink to="/yore-credit">Your Credit</NavLink>
                          <NavLink to="/yore-credit/micro-credit">Micro Credit</NavLink>
                          <NavLink to="/yore-credit/p2p-credit">P2P Credit</NavLink>
                          <NavLink to="/yore-credit/personal-credit">Personal Credit</NavLink>
                          <NavLink to="/yore-credit/gold-credit">Gold Credit</NavLink>
                          <NavLink to="/yore-credit/vehicle-credit">Vehicle Credit</NavLink>
                        </li>
                      </ul>
                  </li>
                  <li><NavLink className="nav-link scrollto" to="/Solutions">Solutions</NavLink></li>
                  <li><NavLink className="nav-link scrollto" to="/About">About</NavLink></li>

                  {/* <li><NavLink className="nav-link scrollto" to="#contact">Contact</NavLink></li> */}
                  {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                    <ul>
                      <li><a href="#">Drop Down 1</a></li>
                      <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                        <ul>
                          <li><a href="#">Deep Drop Down 1</a></li>
                          <li><a href="#">Deep Drop Down 2</a></li>
                          <li><a href="#">Deep Drop Down 3</a></li>
                          <li><a href="#">Deep Drop Down 4</a></li>
                          <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Drop Down 2</a></li>
                      <li><a href="#">Drop Down 3</a></li>
                      <li><a href="#">Drop Down 4</a></li>
                    </ul>
                  </li>
                  <li><a className="nav-link scrollto" href="#contact">Contact</a></li> */}
                </ul>
                <button className="mob-nav-icon" data-bs-toggle="modal" data-bs-target="#mobileNavModal">
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H7C6.45 10 6 10.45 6 11C6 11.55 6.45 12 7 12ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1ZM7 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H7C6.45 5 6 5.45 6 6C6 6.55 6.45 7 7 7Z" fill="#243257"/>
                  </svg>
                </button>
                {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
              </nav>
              
              <div className="desk-menu d-none">
                <div className="row">
                  <div className="col-md-4">
                    <div  className="mnuBox">
                      <div className="mnuGrap"><img src={mnuIconOne} alt="Menu icon one"/></div>
                      <h5>Your Pay</h5>
                      <p>Power up with yore payments with this services</p>                      
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div  className="mnuBox">
                      <div className="mnuGrap"><img src={mnuIconTwo} alt="Menu icon one"/></div>
                      <h5>Your Finances</h5>
                      <p>Yore finances, our expertise</p>                      
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div  className="mnuBox">
                      <div className="mnuGrap"><img src={mnuIconThree} alt="Menu icon one"/></div>
                      <h5>Your Credit</h5>
                      <p>Credit made simple, Dreams made possible</p>                      
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>          
        </header>

        {/* mobile menu */}
        <MobileMenu />
        {/* mobile menu end */}
      </div>
    );
  }
  //   $(function () {
  //     $('.header-wrap h3 i').removeClass("fa-chevron-up");
  //     $('.header-wrap h3').on('click', function () {
  //       console.log('clicked')
  //         if ($('.header-wrap h3 i').hasClass("fa-chevron-down")) {
  //             $(".header-wrap h3 i").removeClass("fa-chevron-down");
  //             $(".header-wrap h3 i").addClass("fa-chevron-up");
  //         }
  //         else {
  //             $('.header-wrap h3 i').addClass("fa-chevron-down");
  //             $('.header-wrap h3 i').removeClass("fa-chevron-up");
  //         }
  //     });
  //     $('#exampleModal').modal({backdrop: 'static', keyboard: false})  
  // });
 

  export default Header;


  