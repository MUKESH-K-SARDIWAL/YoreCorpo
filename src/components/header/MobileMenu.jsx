import { React } from "react";
import { NavLink } from 'react-router-dom';
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import '../header/Header.css';
import '../../assets/css/Style.css';
import '../../assets/css/Responsiv.css';

// import '../../assets/js/Main.js';
// import { BottomSheet } from 'react-spring-bottom-sheet';
// import 'react-spring-bottom-sheet/dist/style.css'



// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

import logo from '../../assets/images/logo.png';


// import $ from 'jquery'; 




function MobileMenu() {


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
        
        <div className="modal fade" id="mobileNavModal" tabIndex="-1" aria-labelledby="mobileNavModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="mobileNavModalLabel">
                  <div className="mob-logo">
                    <a href="/#"><img src={logo} className="img-fluid animated" alt=""/></a>
                  </div>
                </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body">
                <div className="mob-menu">
                  {/* mobile nav start */}
                  <div className="">
                    <div className="accordion accordion-flush mob-nav-step-one" id="accordionMobNav">
                      <div className="accordion-item mob-label-one">
                        <h2 className="accordion-header" id="mob-nav-headingOne">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mob-nav-collapseOne" aria-expanded="false" aria-controls="mob-nav-collapseOne"> Product </button>
                        </h2>
                        <div id="mob-nav-collapseOne" className="accordion-collapse collapse" aria-labelledby="mob-nav-headingOne" data-bs-parent="#accordionMobNav">
                            <div className="accordion-body">
                              {/* submenu start*/}
                              <div className="accordion accordion-flush mob-nav-step-two" id="accordionFlushExample">
                                <div className="accordion-item mob-label-two">
                                  <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Yore Pay</button>
                                  </h2>
                                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
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
                                  <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Yore Finances</button>
                                  </h2>
                                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
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
                                  <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Yore Credit</button>
                                  </h2>
                                  <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
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
                        <h2 className="accordion-header">
                          <button className="accordion-button del-arow" type="button">
                            <NavLink className="nav-link scrollto" data-bs-dismiss="modal" to="/Solutions">Solutions</NavLink>
                          </button>
                        </h2>
                        {/* <div id="mob-nav-collapseTwo" className="accordion-collapse collapse" aria-labelledby="mob-nav-headingTwo" data-bs-parent="#accordionMobNav">
                            <div className="accordion-body">B</div>
                        </div> */}
                      </div>


                      <div className="accordion-item mob-label-one">
                        <h2 className="accordion-header">
                          <button className="accordion-button del-arow" type="button">
                            <NavLink className="nav-link scrollto" data-bs-dismiss="modal" to="/About">About</NavLink>
                          </button>
                        </h2>
                        {/* <div id="mob-nav-collapseThree" className="accordion-collapse collapse" aria-labelledby="mob-nav-headingThree" data-bs-parent="#accordionMobNav">
                            <div className="accordion-body">C</div>
                        </div> */}
                      </div>



                      {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="mob-nav-headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mob-nav-collapseTwo" aria-expanded="false" aria-controls="mob-nav-collapseTwo">Solutions</button>
                        </h2>
                        <div id="mob-nav-collapseTwo" className="accordion-collapse collapse" aria-labelledby="mob-nav-headingTwo" data-bs-parent="#accordionMobNav">
                            <div className="accordion-body">B</div>
                        </div>
                      </div>


                      <div className="accordion-item">
                        <h2 className="accordion-header" id="mob-nav-headingThree">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mob-nav-collapseThree" aria-expanded="false" aria-controls="mob-nav-collapseThree">About</button>
                        </h2>
                        <div id="mob-nav-collapseThree" className="accordion-collapse collapse" aria-labelledby="mob-nav-headingThree" data-bs-parent="#accordionMobNav">
                            <div className="accordion-body">C</div>
                        </div>
                      </div> */}


                      {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="mob-flush-headingFour">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mob-flush-collapseFour" aria-expanded="false" aria-controls="mob-flush-collapseFour">Get In Touch</button>
                        </h2>
                        <div id="mob-flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="mob-flush-headingFour" data-bs-parent="#accordionMobFlushExample">
                            <div className="accordion-body">D</div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header" id="mob-flush-headingFive">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mob-flush-collapseFive" aria-expanded="false" aria-controls="mob-flush-collapseFive">Legal</button>
                        </h2>
                        <div id="mob-flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="mob-flush-headingFive" data-bs-parent="#accordionMobFlushExample">
                            <div className="accordion-body">E</div>
                        </div>
                      </div> */}
                        
                    </div>
                  </div>
                  {/* mobile nav end */}
                </div>
              </div>

              {/* <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div> */}
            </div>
          </div>
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
 

  export default MobileMenu;