import {React, useEffect } from "react";
// import '../../assets/css/Style.css';
// import $ from 'jquery';
import YoreHelpDesk from "../../components/global/YoreHelpDesk";
import YoreRewardsCard from "../../components/global/YoreRewardsCard";
import ClientRoll from '../../assets/animation/client-roll.mp4'

import cdCard from '../../assets/images/crd-card.png'

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
  

function BankingPay() {

    gsap.registerPlugin(ScrollTrigger);


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


    });

    return (
        <div className="banking-pay-wrap">
            {/* Section Start */}
            <div className="banking-pay-section-01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6 className="y-title text-uppercase yor-tx-grey">Designed for the digital age</h6>
                                        <h3 className="y-title yor-tx-blue mb-3 mb-md-4">Join the fast lane to financial freedom!</h3>
                                        <h5 className="y-title">Get banking at lightning speed</h5>

                                        <div className="d-md-none d-block">
                                            <div className="mob-animi-box">
                                                {/* <img src={cdCard} alt="cd-card" className="img-fluid" /> */}
                                            </div>                                            
                                        </div>

                                        <p className="y-para yor-tx-grey my-3">Open your bank account while scrolling through your feed or binge-watching your favorite show.</p>
                                        <button className="yor-btn yor-bg-blue yor-tx-white mt-3">Open Saving Account Now</button>
                                    </div>
                                    <div className="col-md-6 d-md-block d-none">
                                        <img src={cdCard} alt="cd-card" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section End */}

            {/* Section Start */}
            <div className="banking-pay-section-02">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 m-auto text-center">
                            <h3 className="y-title yor-tx-blue mb-3">Tired of juggling multiple bank apps?</h3>
                            <p className="txt-25 fw-500 lh-sm yor-tx-grey">Get a 360-degree view of <span className="blue-tx">Yore</span> finances!<br />Connect all your bank accounts  and stay on top of your finances in one place</p>
                        </div>
                        <div className="col-md-12">
                            <video width="100%" height="auto" loop={true} autoPlay="autoPlay" controls={false} id="ClientRollVid" muted>
                                <source src={ClientRoll} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section End */}

            {/* Section Start */}
            <div className="banking-pay-section-03">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-md-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12">
                                        {/* <h6 className="y-title text-uppercase yor-tx-grey">Designed for the digital age</h6> */}
                                        <h3 className="y-title yor-tx-blue mb-0 mb-md-4">Revolutionize your savings game with an account as unique as you!</h3>
                                        {/* <h5 className="y-title">No minimum balance</h5> */}
                                        {/* <p className="y-para yor-tx-grey my-3">Open your bank account while scrolling through your feed or binge-watching your favorite show.</p> */}
                                        {/* <button className="yor-btn yor-tx-blue mt-3">Terms and Condition Apply</button> */}
                                    </div>

                                    {/* start tab */}
                                    <div className="col-md-7 order-md-1 order-2">
                                        <ul className="list-tab-style1" id="myTab" role="tablist">
                                            <li role="presentation">
                                                <button className="nav-link active" id="savings1-tab" data-bs-toggle="tab" data-bs-target="#savings1-tab-pane" type="button" role="tab" aria-controls="savings1-tab-pane" aria-selected="true">No minimum balance</button>
                                            </li>
                                            <li role="presentation">
                                                <button className="nav-link" id="Savings2-tab" data-bs-toggle="tab" data-bs-target="#Savings2-tab-pane" type="button" role="tab" aria-controls="Savings2-tab-pane" aria-selected="false">Withdraw from any ATM</button>
                                            </li>
                                            <li role="presentation">
                                                <button className="nav-link" id="Savings3-tab" data-bs-toggle="tab" data-bs-target="#Savings3-tab-pane" type="button" role="tab" aria-controls="Savings3-tab-pane" aria-selected="false">No hidden fees</button>
                                            </li>
                                            <li role="presentation">
                                                <button className="nav-link" id="Savings4-tab" data-bs-toggle="tab" data-bs-target="#Savings4-tab-pane" type="button" role="tab" aria-controls="Savings4-tab-pane" aria-selected="false">Doorstep cash deposit and withdrawal </button>
                                            </li>
                                            <li role="presentation">
                                                <button className="nav-link" id="Savings5-tab" data-bs-toggle="tab" data-bs-target="#Savings5-tab-pane" type="button" role="tab" aria-controls="Savings5-tab-pane" aria-selected="false">Dedicated relationship manager service</button>
                                            </li>
                                        </ul>                                            
                                    </div>
                                    <div className="col-md-5 order-md-2 order-1">
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="savings1-tab-pane" role="tabpanel" aria-labelledby="savings1-tab" tabIndex="0">
                                                <div className="animi-icon-box d-md-block d-none">
                                                    <img src={cdCard} alt="cd-card" className="img-fluid" />
                                                </div>
                                                <div className="d-md-none d-block">
                                                    <div className="mob-animi-box">
                                                        {/* <img src={cdCard} alt="cd-card" className="img-fluid" /> */}
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="tab-pane fade" id="Savings2-tab-pane" role="tabpanel" aria-labelledby="Savings2-tab" tabIndex="0">
                                                <div className="animi-icon-box">
                                                    <img src={cdCard} alt="cd-card" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="Savings3-tab-pane" role="tabpanel" aria-labelledby="Savings3-tab" tabIndex="0">
                                                C
                                            </div>
                                            <div className="tab-pane fade" id="Savings4-tab-pane" role="tabpanel" aria-labelledby="Savings4-tab" tabIndex="0">
                                                d
                                            </div>
                                            <div className="tab-pane fade" id="Savings5-tab-pane" role="tabpanel" aria-labelledby="Savings5-tab" tabIndex="0">
                                                e
                                            </div>
                                        </div>
                                    </div>
                                    {/* end tab */}
                                    <div className="col-md-12 order-3">
                                        <button className="trm-con mt-3">Terms and Condition Apply</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section End */}

            <YoreHelpDesk />
            <YoreRewardsCard />


        </div>
    );
  }
  
  export default BankingPay;
