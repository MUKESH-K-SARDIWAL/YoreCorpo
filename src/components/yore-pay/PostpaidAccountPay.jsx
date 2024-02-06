import React from "react";
// import '../../assets/css/Style.css';
// import $ from 'jquery';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import YoreRewardsCard from "../../components/global/YoreRewardsCard";
import cdCard from '../../assets/images/crd-card.png'
import coinPay from '../../assets/images/coin-pay.png'
import demoOne from '../../assets/images/demo.svg'

import bell from '../../assets/images/bell.png'
import win from '../../assets/images/win.png'
import pie from '../../assets/images/pie.png'


// import jquery from 'jquery';
// window.$ = window.jQuery=jquery;

// Create the function
// export function AddLibrary(urlOfTheLibrary) {
//   const script = document.createElement('script');
//   script.src = urlOfTheLibrary;
//   script.async = true;
//   document.body.appendChild(script);
// }
  

function PostpaidAccountPay() {

    gsap.registerPlugin(ScrollTrigger);

    
    return (
        <div className="postpaid-pay-wrap">
            {/* Section Start */}
            <div className="postpaid-pay-section-01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-5 my-auto">
                                        {/* <h6 className="y-title text-uppercase yor-tx-grey">Designed for the digital age</h6> */}
                                        <h3 className="y-title yor-tx-blue mb-4">Credit account with a brain</h3>

                                        <div className="d-md-none d-block">
                                            <div className="mob-animi-box px-5 pt-4">
                                                <img src={coinPay} alt="cd-card" className="img-fluid" />
                                            </div>
                                        </div>
                                        
                                        {/* <h5 className="y-title">Get banking at lightning speed</h5> */}
                                        <p className="y-para2 yor-tx-grey my-md-3">Get the credit limit you deserve based on your financial habits, not just on your credit history!</p>
                                        {/* <button className="yor-btn yor-bg-blue yor-tx-white mt-3">Open Saving Account Now</button> */}
                                    </div>
                                    <div className="col-md-7 d-md-block d-none">
                                        <div className="coin-pay">
                                            <img src={coinPay} alt="cd-card" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section End */}
            {/* Section Start */}
            <div className="postpaid-pay-section-02">
                {/* <div className="blue-curv-section"> */}
                {/* <div className="top-curv"><span></span></div> */}
                {/* <div className="curv-cont"> */}
                <div className="container text-center">
                    <div className="y-card">
                        <div className="row">
                            <div className="col-lg-10 m-auto">
                                <h3 className="y-title yor-tx-blue mb-2"><span className="cyan">YORE</span> credit, your rules</h3>
                                <h4 className="txt-35 yor-tx-grey">Get the credit you deserve, with</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 my-md-5 my-3">
                                {/* <img src={demoOne} alt="cd-card" className="img-fluid" /> */}
                                <div className="credit-flex">
                                    <div className="pay-radio1">
                                        <h5 className="txt-25">Multiple Payment Cycles</h5>
                                        <div className="all-redio mt-4">
                                            <div className="redio-boxs mb-3" id="pay-cycle ">
                                                <div className=" d-flex align-items-center">
                                                    <div className="radio-cycle cycle-blue  d-flex align-items-center justify-content-center">
                                                        <div className="center-radio"></div>
                                                    </div>
                                                    <strong>15 Days</strong>
                                                </div>
                                                <p className=" m-0">₹1,000</p>
                                            </div>
                                            <div className="redio-boxs mb-3" id="pay-cycle">
                                                <div className=" d-flex align-items-center">
                                                    <div className="radio-cycle cycle-red d-flex align-items-center justify-content-center">
                                                        <div className="center-radio"></div>
                                                    </div>
                                                    <strong>30 Days</strong>
                                                </div>
                                                <p className=" m-0">₹1,500</p>
                                            </div>
                                            <div className="redio-boxs mb-3" id="pay-cycle">
                                                <div className=" d-flex align-items-center">
                                                    <div className="radio-cycle cycle-yellow d-flex align-items-center justify-content-center">
                                                        <div className="center-radio"></div>
                                                    </div>
                                                    <strong>45 Days</strong>
                                                </div>
                                                <p className=" m-0">₹2,000</p>
                                            </div>
                                            <div className="redio-boxs" id="pay-cycle">
                                                <div className=" d-flex align-items-center">
                                                    <div className="radio-cycle cycle-green d-flex align-items-center justify-content-center">
                                                        <div className="center-radio"></div>
                                                    </div>
                                                    <strong>60 Days</strong>
                                                </div>
                                                <p className=" m-0">₹3,000</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="andbox">
                                        <h4 className="txt-35 yor-tx-grey">$</h4>
                                        <div className="hr-div mx-auto"></div>
                                    </div>
                                    <div className="installment">
                                        <h5 className=" txt-25">Equated Cycle Installments</h5>
                                        <h6 className=" txt-25 yor-tx-grey mt-4">ECI is a flexible repayment facility that allows you to choose your cycle tenure as per your convenience</h6>
                                        <div className="ment-amount mx-auto">
                                            <div className="mt-4">
                                                <ul className="d-flex justify-content-between txt-18">
                                                    <li>Cycle</li>
                                                    <li>Amount</li>
                                                    <li>Tenure</li>
                                                </ul>
                                            </div>
                                            <div className="redio-boxs mt-3">
                                                <strong>15 Days</strong>
                                                <div className=" for-border"></div>
                                                <strong>₹3,000</strong>
                                                <div className=" for-border"></div>
                                                <strong>30 Cycles</strong>
                                            </div>
                                            <div className="redio-boxs mt-3">
                                                <strong>45 Days</strong>
                                                <div className=" for-border"></div>
                                                <strong>₹9,000</strong>
                                                <div className=" for-border"></div>
                                                <strong>10 Cycles</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-2">
                                    </div>
                                    <div className="col-md-5">
                                    </div> */}
                            <div className="col-md-12">
                                <button className="trm-con2 mt-3">Terms and Condition Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                {/* <div className="bottom-curv"><span></span></div> */}
                {/* </div> */}
            </div>
            {/* Section End */}
            {/* Section Start */}
            <div className="postpaid-pay-section-03">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 m-auto text-center mb-md-5">
                            <h3 className="y-title yor-tx-blue mb-3">Credit Facility Evaluation</h3>
                            <p className="txt-35 fw-500 lh-sm yor-tx-grey">It is based on borrowing habit and activities<br />which can increase or decrease as per users financial activities</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-6">
                            <div className="y-card-sm">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="animi-icon">
                                            <img src={bell} alt="cd-card" className="img-fluid" />
                                        </div>
                                        <h4 className="y-title yor-tx-blue mb-4">Get alerts on bad credit</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="y-card-sm">
                                <div className="row">
                                    <div className="col-md-12">
                                        {/* <h6 className="y-title text-uppercase yor-tx-grey">Designed for the digital age</h6> */}
                                        <div className="animi-icon">
                                            <img src={pie} alt="cd-card" className="img-fluid" />
                                        </div>
                                        <h4 className="y-title yor-tx-blue mb-4">Tailor <span className="blue-tx">yore</span><br/>credit limit</h4>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="y-card-sm">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="animi-icon">
                                            <img src={win} alt="cd-card" className="img-fluid" />
                                        </div>
                                        <h4 className="y-title yor-tx-blue mb-4">Celebrate your<br />financial well-being</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Section End */}
            <YoreRewardsCard />
        </div>
    );
  }
  
export default PostpaidAccountPay;
