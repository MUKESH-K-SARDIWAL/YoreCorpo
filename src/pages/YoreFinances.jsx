import {React, useEffect} from "react";
// import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import $ from 'jquery'; 

import CashflowFinances from "../components/yore-finances/CashflowFinances";
import NetworthFinances from "../components/yore-finances/NetworthFinances";
import CreditHealthFinances from "../components/yore-finances/CreditHealthFinances";
import Loaning from "../components/yore-finances/Loaning";
import BudgetFinances from "../components/yore-finances/BudgetFinances";


import crvLeft from '../../src/assets/images/crv-left.png';
import crvRight from '../../src/assets/images/crv-right.png';
// import Marquee from "react-fast-marquee";


import '../../src/components/footer/Footer.css';
// import '../../src/assets/css/Style.css';



function YoreFinances() {

  const location = useLocation();
  const currentPath = location.pathname;
  // console.log(currentPath);

  // Split the pathname into segments
  const segments = currentPath.split('/');
  
  // Define the desired segment index
  const desiredSegmentIndex = 2;
  
  // Define the desired segment
  var desiredSegment = segments[desiredSegmentIndex];
  // console.log(desiredSegment);
 if(!desiredSegment){
    desiredSegment='cash-flow-manager'
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
      <div className="yore-finances-page">
        <Header />
        <div className="titl-section">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="prod-titl text-center">
                  <h2><span className="blue-tx">Yore</span> finances, our<br />expertise</h2>
                  <h4 className="yor-tx-blue py-2">Ignite your financial&nbsp;wellness</h4>
                  <button className="yor-btn yor-bg-blue yor-tx-white mt-3 px-5 py-3">Get Exclusive Access </button>
                </div>
              </div>
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
                    <a href="/#" className={getTabClassName('cash-flow-manager')} id="cash-flow-manager-tab" data-bs-toggle="tab" data-bs-target="#cash-flow-manager" type="a" role="tab" aria-controls="cash-flow-manager" aria-selected="true">
                      <span></span><h6>Cash Flow Manager</h6>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a href="/#" className={getTabClassName('net-worth-analysis')} id="net-worth-analysis-tab" data-bs-toggle="tab" data-bs-target="#net-worth-analysis" type="a" role="tab" aria-controls="net-worth-analysis" aria-selected="false">
                      <span></span><h6>Net Worth Analysis</h6>
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a href="/#" className={getTabClassName('credit-health-manager')} id="credit-health-manager-tab" data-bs-toggle="tab" data-bs-target="#credit-health-manager" type="button" role="tab" aria-controls="credit-health-manager" aria-selected="false">
                      <span></span><h6>Credit Health Manager</h6>
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a href="/#" className={getTabClassName('loaning')} id="loaning-tab" data-bs-toggle="tab" data-bs-target="#loaning" type="button" role="tab" aria-controls="loaning" aria-selected="false">
                      <span></span><h6>Loaning</h6>
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a href="/#" className={getTabClassName('budget-tracker')} id="budget-tracker-tab" data-bs-toggle="tab" data-bs-target="#budget-tracker" type="button" role="tab" aria-controls="budget-tracker" aria-selected="false">
                      <span></span><h6>Budget Tracker</h6>
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
            <div className={detailsTabClassName('cash-flow-manager')} id="cash-flow-manager" role="tabpanel" aria-labelledby="cash-flow-manager-tab" tabIndex="0">
              <CashflowFinances />
            </div>
            <div className={detailsTabClassName('net-worth-analysis')} id="net-worth-analysis" role="tabpanel" aria-labelledby="net-worth-analysis-tab" tabIndex="0">
              <NetworthFinances />
            </div>
            <div className={detailsTabClassName('credit-health-manager')} id="credit-health-manager" role="tabpanel" aria-labelledby="credit-health-manager-tab" tabIndex="0">
              <CreditHealthFinances />
            </div>
            <div className={detailsTabClassName('loaning')} id="loaning" role="tabpanel" aria-labelledby="loaning-tab" tabIndex="0">
              <Loaning />
            </div>
            <div className={detailsTabClassName('budget-tracker')} id="budget-tracker" role="tabpanel" aria-labelledby="budget-tracker-tab" tabIndex="0">
              <BudgetFinances />
            </div>
          </div>
        </div>
        {/* product tab conten end */}


        

        {/* <h2>Yore Pay</h2> */}
        <Footer />
      </div>
    );
  }
  
  export default YoreFinances;