import {React, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useLocation, NavLink } from 'react-router-dom';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import $ from 'jquery'; 

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import BankingPay from "../components/yore-pay/BankingPay";
import SplitPay from "../components/yore-pay/SplitPay";
import PostpaidAccountPay from "../components/yore-pay/PostpaidAccountPay";
import CardsPay from "../components/yore-pay/CardsPay";
import CryptoPay from "../components/yore-pay/CryptoPay";

// import ResultTable from "../components/result-table/ResultTable";
// import DownloadApp from "../components/download/DownloadApp";
// import Graph from '../../src/assets/images/Untitled design (4).png';
import crvLeft from '../../src/assets/images/crv-left.png';
import crvRight from '../../src/assets/images/crv-right.png';

import pay1 from '../../src/assets/images/pay1.png';
import pay2 from '../../src/assets/images/pay2.png';
import pay3 from '../../src/assets/images/pay3.png';
import pay4 from '../../src/assets/images/pay4.png';
import pay5 from '../../src/assets/images/pay5.png';


// import Marquee from "react-fast-marquee";


import '../../src/components/footer/Footer.css';
// import '../../src/assets/css/Style.css';



function YourPay() {

  gsap.registerPlugin(ScrollTrigger);

  //const [stateSeg, setStateSeg] = useState("banking");

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
    desiredSegment='banking'
  }

  const getTabClassName = (segment) => {
    return desiredSegment === segment ? 'nav-link active' : 'nav-link';
  };

  const detailsTabClassName = (segment) => {
    return desiredSegment === segment ? 'tab-pane fade show active' : 'tab-pane fade';
  };

  const MyComponent = ({ value }) => {
    let htmlToRender;
  
    if (value === "banking") {
      htmlToRender = <p>Value 1 HTML</p>;
    } else if (value === "split-pay") {
      htmlToRender = <div>Value 2 HTML</div>;
    } else if (value === "postpaid-account") {
      htmlToRender = <span>Value 3 HTML</span>;
    } else if (value === "cards") {
      htmlToRender = <h2>Value 4 HTML</h2>;
    } else if (value === "crypto") {
      htmlToRender = <strong>Value 5 HTML</strong>;
    } else {
      htmlToRender = <p>Invalid value</p>;
    }
  
    return <div>{htmlToRender}</div>;
  };
  


  useEffect(() => {


    // gsap.fromTo(
    //     ".rwd-box:not(:first-child)",
    //     {
    //       x: () => window.innerWidth / 2 + 100,
    //       rotate: -90,
    //     },
    //     {
    //       x: 0,
    //       stagger: 0.5,
    //       rotate: 0,
    //       scrollTrigger: {
    //         pin: ".rwd-area",
    //         markers: true,
    //         scrub: true,
    //         start: "top top",
    //         end: "+=30000",
    //         invalidateOnRefresh: true
    //       }
    //     }
    //   );


    // let rwd = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".rwd-area",
    //     pin: ".rwd-area",
    //     // pin: ".why-pin",
    //     // pinSpacing: true,
    //     markers: true,
    //     start: "top top",
    //     end: "bottom+=2000 top",
    //     scrub: 2,
    //   }
    // });
    // // tl.addLabel("why-card1");
    // rwd.to('.rd-one',{
    //   yPercent:0,
    //   opacity: 1
    // }) 
    
    // rwd.from('.rd-two', {
    //   yPercent:160,
    //   opacity: 1,
    // }) 

    // rwd.to('.rd-one',{
    //   scale:0.90,
    // //   scale:0.95,
    //   yPercent:-0.5,
    //   opacity: 1
    // }, "-=0.5") 
    
    // rwd.to('.rd-two', {
    //     yPercent:0,
    //     opacity: 1
    //   }) 
      
    // rwd.from('.rd-three', {
    //     yPercent:160,
    //     opacity: 1,
    //   }) 

    // rwd.to('.rd-two',{
    //   scale:0.95,
    //   yPercent:-0.4,
    //   opacity: 1
    // }, "-=0.5")
    
    // rwd.to('.rd-three', {
    //     yPercent:0,
    //     opacity: 1
    //   }) 

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
      <div className="yore-pay-page">
        <Header />
        <div className="titl-section">
          <div className="container">
            <div className="prod-titl text-center">
              <h2>Power up with <span className="blue-tx">yore</span> payments</h2>
              <h4 className="yor-tx-blue txt-35 py-2">Ignite your financial wellness</h4>
              <button className="yor-btn yor-bg-blue yor-tx-white mt-3 px-5 py-3">Get Exclusive Access </button>
            </div>
            
          </div>

          <div className="payBnrGrphis">

            <div className="BnrGrap grpOne">
              <img src={pay1} alt="Banner Graphics One" />
            </div>
            <div className="BnrGrap grpTwo">
              <img src={pay2} alt="Banner Graphics Two" />
            </div>
            <div className="BnrGrap grpThree">
              <img src={pay3} alt="Banner Graphics Three" />
            </div>
            <div className="BnrGrap grpFour">
              <img src={pay4} alt="Banner Graphics Four" />
            </div>
            <div className="BnrGrap grpFive">
              <img src={pay5} alt="Banner Graphics Five" />
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
                    <NavLink to="/yore-pay/banking" className={getTabClassName('banking')} id="banking-tab" data-bs-toggle="tab" data-bs-target="#banking" type="a" role="tab" aria-controls="banking" aria-selected="true">
                    <span></span><h6>Banking</h6>
                    </NavLink>
                  </li>
                  <li className="nav-item" role="presentation">
                    <NavLink to="/yore-pay/split-pay" className={getTabClassName('split-pay')} id="Split-Pay-tab" data-bs-toggle="tab" data-bs-target="#Split-Pay" type="a" role="tab" aria-controls="Split-Pay" aria-selected="false">
                      <span></span><h6>Split Pay</h6>
                    </NavLink>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a href="/#" className={getTabClassName('postpaid-account')} id="postpaid-account-tab" data-bs-toggle="tab" data-bs-target="#postpaid-account" type="button" role="tab" aria-controls="postpaid-account" aria-selected="false">
                      <span></span><h6>Postpaid Account</h6>
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a href="/#" className={getTabClassName('cards')} id="cards-tab" data-bs-toggle="tab" data-bs-target="#cards" type="button" role="tab" aria-controls="cards" aria-selected="false">
                      <span></span><h6>Cards</h6>
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a href="/#" className={getTabClassName('crypto')} id="crypto-tab" data-bs-toggle="tab" data-bs-target="#crypto" type="button" role="tab" aria-controls="crypto" aria-selected="false">
                      <span></span><h6>Crypto</h6>
                    </a>
                  </li>

                  <div className="slider">
                    <div className="curv-left"><img src={crvLeft} className="crv-left" alt="left-curv-icon" /></div>
                    <div className="curv-right"><img src={crvRight} className="crv-right" alt="right-curv-icon" /></div>
                  </div>
                </ul>
                {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <NavLink to="/yore-pay/banking" className={getTabClassName('banking')} id="banking-tab" data-bs-toggle="tab" data-bs-target="#banking" type="a" role="tab" aria-controls="banking" aria-selected="true">
                    <span></span><h6>Banking</h6>
                    </NavLink>
                  </li>
                  <li className="nav-item" role="presentation">
                    <NavLink to="/yore-pay/split-pay" className={getTabClassName('split-pay')} id="Split-Pay-tab" data-bs-toggle="tab" data-bs-target="#Split-Pay" type="a" role="tab" aria-controls="Split-Pay" aria-selected="false">
                      <span></span><h6>Split Pay</h6>
                    </NavLink>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a href="/#" className={getTabClassName('postpaid-account')} id="postpaid-account-tab" data-bs-toggle="tab" data-bs-target="#postpaid-account" type="button" role="tab" aria-controls="postpaid-account" aria-selected="false">
                      <span></span><h6>Postpaid Account</h6>
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a href="/#" className={getTabClassName('cards')} id="cards-tab" data-bs-toggle="tab" data-bs-target="#cards" type="button" role="tab" aria-controls="cards" aria-selected="false">
                      <span></span><h6>Cards</h6>
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a href="/#" className={getTabClassName('crypto')} id="crypto-tab" data-bs-toggle="tab" data-bs-target="#crypto" type="button" role="tab" aria-controls="crypto" aria-selected="false">
                      <span></span><h6>Crypto</h6>
                    </a>
                  </li>

                  <div className="slider">
                    <div className="curv-left"><img src={crvLeft} className="crv-left" alt="left-curv-icon" /></div>
                    <div className="curv-right"><img src={crvRight} className="crv-right" alt="right-curv-icon" /></div>
                  </div>
                </ul> */}
              </div>
          </div>
        </div>

        {/* Section Start */}
        <div className="blue-curv-section">
          <div className="top-curv"><span></span></div>
          <div className="curv-cont">
              <div className="container">
              <MyComponent value={desiredSegment} />
              {/* <div className="row top-space">
                  <div className="col-lg-10 m-auto text-center">
                  <h3 className="titl-h3">Financial Solutions that you need to improve your financial health</h3>
                  </div>
              </div> */}

              </div>
          </div>
          <div className="bottom-curv"><span></span></div>
        </div>
        {/* Section End */}

        {/* product tab conten start */}
        <div className="yore-product-section">
          <div className="tab-content" id="myTabContent">
            <div className={detailsTabClassName('banking')} id="banking" role="tabpanel" aria-labelledby="banking-tab" tabIndex="0">
                <BankingPay />
            </div>
            <div className={detailsTabClassName('split-pay')} id="Split-Pay" role="tabpanel" aria-labelledby="Split-Pay-tab" tabIndex="0">
              <SplitPay />
            </div>
            <div className={detailsTabClassName('postpaid-account')} id="postpaid-account" role="tabpanel" aria-labelledby="postpaid-account-tab" tabIndex="0">
              <PostpaidAccountPay />
            </div>
            <div className={detailsTabClassName('cards')} id="cards" role="tabpanel" aria-labelledby="cards-tab" tabIndex="0">
              <CardsPay />
            </div>
            <div className={detailsTabClassName('crypto')} id="crypto" role="tabpanel" aria-labelledby="crypto-tab" tabIndex="0">
              <CryptoPay />
            </div>
          </div>
        </div>
        {/* product tab conten end */}


        

        {/* <h2>Yore Pay</h2> */}
        <Footer />
      </div>
    );
  }
  
  export default YourPay;