import {React, useEffect} from "react";
// import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import $ from 'jquery'; 

import MicroCredit from "../components/yore-credit/MicroCredit";
import P2PCredit from "../components/yore-credit/P2PCredit";
import PersonalCredit from "../components/yore-credit/PersonalCredit";
import GoldCredit from "../components/yore-credit/GoldCredit";
import VehicleCredit from "../components/yore-credit/VehicleCredit";

import crvLeft from '../../src/assets/images/crv-left.png';
import crvRight from '../../src/assets/images/crv-right.png';
// import Marquee from "react-fast-marquee";


import '../../src/components/footer/Footer.css';
// import '../../src/assets/css/Style.css';



function YoreCredit() {

  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);

  // Split the pathname into segments
  const segments = currentPath.split('/');
  
  // Define the desired segment index
  const desiredSegmentIndex = 2;
  
  // Define the desired segment
  var desiredSegment = segments[desiredSegmentIndex];
  console.log(desiredSegment);
 if(!desiredSegment){
    desiredSegment='micro-credit'
  }

  const getTabClassName = (segment) => {
    return desiredSegment === segment ? 'nav-link active' : 'nav-link';
  };

  const detailsTabClassName = (segment) => {
    return desiredSegment === segment ? 'tab-pane fade show active' : 'tab-pane fade';
  };



  useEffect(() => {

    // window.AOS.init({ // Initialization
    //   duration: 2000
    // });
  
    $(".prod-bar .nav-tabs a").click(function() {
      var position = $(this).parent().position();
      var width = $(this).parent().width();
        $(".prod-bar .slider").css({"left":+ position.left,"width":width});
    });
    var actWidth = $(".prod-bar .nav-tabs").find(".active").parent("li").width();
    var actPosition = $(".prod-bar .nav-tabs .active").position();
    $(".prod-bar .slider").css({"left":+ actPosition.left,"width": actWidth});


    // var tabs = $('.tabs');
    // var selector = $('.tabs .yr-tab').find('a').length;
    // //var selector = $(".tabs").find(".selector");
    // var activeItem = tabs.find('.active');
    // var activeWidth = activeItem.innerWidth();
    // $(".selector").css({
    //   "left": activeItem.position.left + "px", 
    //   "width": activeWidth + "px"
    // });

    // $(".tabs .yr-tab").on("click","a",function(e){
    //   e.preventDefault();
    //   $('.tabs .yr-tab a').removeClass("active");
    //   $(this).addClass('active');
    //   var activeWidth = $(this).innerWidth();
    //   var itemPos = $(this).position();
    //   $(".selector").css({
    //     "left":itemPos.left + "px", 
    //     "width": activeWidth + "px"
    //   });
    // });

  });


    return (
      <div className="yore-credit-page">
        <Header />
        <div className="titl-section">
          <div className="container">
            <div className="prod-titl">
              <h2>Enjoy financial freedom knowing you future is stable and secure with us</h2>
            </div>
          </div>
        </div>


        <div className="yore-prod-tab-section">
          <div className="container">

            {/* <div className="inner-tab-wrapper">
                <nav className="tabs" id="myTab" role="tablist">
                  <div className="selector"></div>

                  <div className="yr-tab" role="presentation">
                    <a href="/#" className="active" id="pay-tab" data-bs-toggle="tab" data-bs-target="#pay" type="a" role="tab" aria-controls="pay" aria-selected="true"><span></span><h6>Pay</h6></a>
                  </div>

                  <div className="yr-tab" role="presentation">
                    <a href="/#" id="finances-tab" data-bs-toggle="tab" data-bs-target="#finances" type="a" role="tab" aria-controls="finances" aria-selected="false"><span></span><h6>Finances</h6></a>
                  </div>

                  <div className="yr-tab" role="presentation">
                    <a href="/#" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"><span></span><h6>Credits</h6></a>
                  </div>
                </nav>
              </div> */}

              {/* <div className="tile tile-1" id="tile-1"> */}
              <div className="tile prod-bar">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a href="/#" className={getTabClassName('micro-credit')} id="micro-credit-tab" data-bs-toggle="tab" data-bs-target="#micro-credit" type="a" role="tab" aria-controls="micro-credit" aria-selected="true">
                    <span></span><h6>Micro Credit</h6>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a href="/#" className={getTabClassName('p2p-credit')} id="p2p-credit-tab" data-bs-toggle="tab" data-bs-target="#p2p-credit" type="a" role="tab" aria-controls="p2p-credit" aria-selected="false">
                      <span></span><h6>P2P Credit</h6>
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a href="/#" className={getTabClassName('personal-credit')} id="personal-credit-tab" data-bs-toggle="tab" data-bs-target="#personal-credit" type="button" role="tab" aria-controls="personal-credit" aria-selected="false">
                      <span></span><h6>Personal Credit</h6>
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a href="/#" className={getTabClassName('gold-credit')} id="gold-credit-tab" data-bs-toggle="tab" data-bs-target="#gold-credit" type="button" role="tab" aria-controls="gold-credit" aria-selected="false">
                      <span></span><h6>Gold Credit</h6>
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a href="/#" className={getTabClassName('vehicle-credit')} id="vehicle-credit-tab" data-bs-toggle="tab" data-bs-target="#vehicle-credit" type="button" role="tab" aria-controls="vehicle-credit" aria-selected="false">
                      <span></span><h6>Vehicle Credit</h6>
                    </a>
                  </li>

                  <div className="slider">
                    <div className="curv-left"><img src={crvLeft} className="crv-left" alt="left-curv-icon" /></div>
                    <div className="curv-right"><img src={crvRight} className="crv-right" alt="right-curv-icon" /></div>
                  </div>
                </ul>
              </div>
          </div>
        </div>

        {/* Section Start */}
        <div className="blue-curv-section">
          <div className="top-curv"><span></span></div>
          <div className="curv-cont">
              <div className="container">

              <div className="row top-space">
                  <div className="col-lg-10 m-auto text-center">
                  <h3 className="titl-h3">Financial Solutions that you need to improve your financial health</h3>
                  </div>
              </div>

              </div>
          </div>
          <div className="bottom-curv"><span></span></div>
        </div>
        {/* Section End */}

        {/* product tab conten start */}
        <div className="yore-product-section">
          <div className="tab-content" id="myTabContent">
            <div className={detailsTabClassName('micro-credit')} id="micro-credit" role="tabpanel" aria-labelledby="micro-credit-tab" tabIndex="0">
              <MicroCredit />
            </div>
            <div className={detailsTabClassName('p2p-credit')} id="p2p-credit" role="tabpanel" aria-labelledby="p2p-credit-tab" tabIndex="0">
              <P2PCredit />
            </div>
            <div className={detailsTabClassName('personal-credit')} id="personal-credit" role="tabpanel" aria-labelledby="personal-credit-tab" tabIndex="0">
              <PersonalCredit />
            </div>
            <div className={detailsTabClassName('gold-credit')} id="gold-credit" role="tabpanel" aria-labelledby="gold-credit-tab" tabIndex="0">
              <GoldCredit />
            </div>
            <div className={detailsTabClassName('vehicle-credit')} id="vehicle-credit" role="tabpanel" aria-labelledby="vehicle-credit-tab" tabIndex="0">
              <VehicleCredit />
            </div>
          </div>
        </div>
        {/* product tab conten end */}


        

        {/* <h2>Yore Pay</h2> */}
        <Footer />
      </div>
    );
  }
  
  export default YoreCredit;