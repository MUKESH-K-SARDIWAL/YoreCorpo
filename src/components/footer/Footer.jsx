import React from "react";
import { NavLink } from 'react-router-dom';
import '../footer/Footer.css';
import '../../assets/css/Style.css';
import '../../assets/css/Responsiv.css';

// import $ from 'jquery';

import ftrLogo from '../../assets/images/ftr-logo.svg'
import playStor from '../../assets/images/playstor.svg'
import appStor from '../../assets/images/appstor.svg'

// import jquery from 'jquery';
// window.$ = window.jQuery=jquery;

// Create the function
// export function AddLibrary(urlOfTheLibrary) {
//   const script = document.createElement('script');
//   script.src = urlOfTheLibrary;
//   script.async = true;
//   document.body.appendChild(script);
// }
  

function Footer() {
    return (
      <div className="footer">
        <div className="container">
          <div className="foot-wrap">

            <div className="row">
              <div className="col-md-12 d-md-none d-block">
                <div className="ftr-left text-center">
                <a href="/#"><img src={ftrLogo} className="img-fluid animated" alt=""/></a>
                </div>
              </div>
              
              <div className="col-md-12">
                <h3 className="ftr-titl">Start your<br/>financial wellbeing journey right now</h3>
                <div className="ftr-stor">
                  <a href="/#"><img src={appStor} className="img-fluid animated" alt=""/></a>
                  <a href="/#"><img src={playStor} className="img-fluid animated" alt=""/></a>
                </div>
              </div>

              <div className="col-md-4 d-md-block d-none">
                <div className="ftr-left">
                <a href="/#"><img src={ftrLogo} className="img-fluid animated" alt=""/></a>
                  <p>©2020.All rights reserved</p>
                </div>
              </div>

              <div className="col-md-8 d-md-block d-none">
                <div className="ftr-center">

                  <div className="row">
                    <div className="col-md-4">
                      <ul>
                        <li><a href="/#">Help center</a></li>
                        <li><a href="/#">About</a></li>
                        <li><a href="/#">Privacy</a></li>
                        <li><a href="/#">Terms</a></li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li><a href="/#">For business</a></li>
                        <li><a href="/#">Blog</a></li>
                        <li><a href="/#">Contact us</a></li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li><a href="/#">Help</a></li>
                        <li><a href="/#">Your account</a></li>
                        <li><a href="/#">English(India)</a></li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
              {/* mobile footer section */}
              <div className="col-md-8 d-md-none d-block">
                <div className="accordion accordion-flush mob-nav-step-one" id="accordionMobFlushExample">
                  <div className="accordion-item mob-label-one">
                    <h2 className="accordion-header" id="mob-flush-headingOne">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mob-flush-collapseOne" aria-expanded="false" aria-controls="mob-flush-collapseOne"> Website </button>
                    </h2>
                    <div id="mob-flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="mob-flush-headingOne" data-bs-parent="#accordionMobFlushExample">
                        <div className="accordion-body">A</div>
                    </div>
                  </div>


                  <div className="accordion-item mob-label-one">
                    <h2 className="accordion-header" id="mob-flush-headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mob-flush-collapseTwo" aria-expanded="false" aria-controls="mob-flush-collapseTwo">Product</button>
                    </h2>
                    <div id="mob-flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="mob-flush-headingTwo" data-bs-parent="#accordionMobFlushExample">
                        <div className="accordion-body">
                          {/* submenu start*/}
                          <div className="accordion accordion-flush mob-nav-step-two" id="accordionFootNavFlushExample">
                              <div className="accordion-item mob-label-two">
                                <h2 className="accordion-header" id="foot-nav-headingOne">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#foot-nav-collapseOne" aria-expanded="false" aria-controls="foot-nav-collapseOne">Yore Pay</button>
                                </h2>
                                <div id="foot-nav-collapseOne" className="accordion-collapse collapse" aria-labelledby="foot-nav-headingOne" data-bs-parent="#accordionFootNavFlushExample">
                                  <div className="accordion-body">
                                    <div className="mob-menu-sub-link">
                                      <NavLink to="/yore-pay/banking">Banking</NavLink>
                                      <NavLink to="/yore-pay/postpaid-account">Postpaid Account</NavLink>
                                      <NavLink to="/yore-pay/split-pay">Split Pay</NavLink>
                                      <NavLink to="/yore-pay/cards">Cards</NavLink>
                                      <NavLink to="/yore-pay/crypto">Crypto</NavLink>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item mob-label-two">
                                <h2 className="accordion-header" id="foot-nav-headingTwo">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#foot-nav-collapseTwo" aria-expanded="false" aria-controls="foot-nav-collapseTwo">Yore Finances</button>
                                </h2>
                                <div id="foot-nav-collapseTwo" className="accordion-collapse collapse" aria-labelledby="foot-nav-headingTwo" data-bs-parent="#accordionFootNavFlushExample">
                                  <div className="accordion-body">
                                    <div className="mob-menu-sub-link">
                                      <NavLink to="/yore-finances/cash-flow-manager">Cash Flow Manager</NavLink>
                                      <NavLink to="/yore-finances/net-worth-analysis">Net Worth Analysis</NavLink>
                                      <NavLink to="/yore-finances/credit-health-manager">Credit Health Manager</NavLink>
                                      <NavLink to="/yore-finances/loaning">Loaning</NavLink>
                                      <NavLink to="/yore-finances/budget-tracker">Budget Tracker</NavLink>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item mob-label-two">
                                <h2 className="accordion-header" id="foot-nav-headingThree">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#foot-nav-collapseThree" aria-expanded="false" aria-controls="foot-nav-collapseThree">Yore Credit</button>
                                </h2>
                                <div id="foot-nav-collapseThree" className="accordion-collapse collapse" aria-labelledby="foot-nav-headingThree" data-bs-parent="#accordionFootNavFlushExample">
                                  <div className="accordion-body">
                                    <div className="mob-menu-sub-link">
                                      <NavLink to="/yore-credit/micro-credit">Micro Credit</NavLink>
                                      <NavLink to="/yore-credit/p2p-credit">P2P Credit</NavLink>
                                      <NavLink to="/yore-credit/personal-credit">Personal Credit</NavLink>
                                      <NavLink to="/yore-credit/gold-credit">Gold Credit</NavLink>
                                      <NavLink to="/yore-credit/vehicle-credit">Vehicle Credit</NavLink>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* submenu end */}
                        </div>
                    </div>
                  </div>


                  <div className="accordion-item mob-label-one">
                    <h2 className="accordion-header" id="mob-flush-headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mob-flush-collapseThree" aria-expanded="false" aria-controls="mob-flush-collapseThree">Support</button>
                    </h2>
                    <div id="mob-flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="mob-flush-headingThree" data-bs-parent="#accordionMobFlushExample">
                        <div className="accordion-body">C</div>
                    </div>
                  </div>


                  <div className="accordion-item mob-label-one">
                    <h2 className="accordion-header" id="mob-flush-headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mob-flush-collapseFour" aria-expanded="false" aria-controls="mob-flush-collapseFour">Get In Touch</button>
                    </h2>
                    <div id="mob-flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="mob-flush-headingFour" data-bs-parent="#accordionMobFlushExample">
                        <div className="accordion-body">D</div>
                    </div>
                  </div>

                  <div className="accordion-item mob-label-one">
                    <h2 className="accordion-header" id="mob-flush-headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mob-flush-collapseFive" aria-expanded="false" aria-controls="mob-flush-collapseFive">Legal</button>
                    </h2>
                    <div id="mob-flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="mob-flush-headingFive" data-bs-parent="#accordionMobFlushExample">
                        <div className="accordion-body">E</div>
                    </div>
                  </div>
                    
                </div>
              </div>
              {/* mobile footer end */}
              <div className="col-md-12 d-md-none d-block">
                <div className="ftr-left text-center">
                  <p>©2020.All rights reserved</p>
                </div>
              </div>

              
            </div>

          </div>
        </div>        
      </div>
    );
  }
  
  export default Footer;



