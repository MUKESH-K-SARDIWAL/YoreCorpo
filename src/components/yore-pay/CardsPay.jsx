import React from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import '../../assets/css/Style.css';
// import $ from 'jquery';
import YoreRewardsCard from "../../components/global/YoreRewardsCard";
import Cardverse from '../../assets/images/Cardverse1.png'
import cardThree from '../../assets/images/3cadr.svg'
import Fueled from '../../assets/images/Fueled.png'
import cdCard from '../../assets/images/crd-card.png'
// import jquery from 'jquery';
// window.$ = window.jQuery=jquery;

// Create the function
// export function AddLibrary(urlOfTheLibrary) {
//   const script = document.createElement('script');
//   script.src = urlOfTheLibrary;
//   script.async = true;
//   document.body.appendChild(script);
// }
  

function CardsPay() {
    
    gsap.registerPlugin(ScrollTrigger);

    return (
        <div className="cards-pay-wrap">
            {/* Section Start */}
            <div className="cards-pay-section-01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        {/* <h6 className="y-title text-uppercase yor-tx-grey">Designed for the digital age</h6> */}
                                        <h3 className="y-title yor-tx-blue mb-2">Unlock the yore-Verse</h3>
                                        {/* <h5 className="y-title">No minimum balance</h5> */}
                                        <h4 className="y-title">Control, Access, and Manage All Your Cards in One Place</h4>
                                        {/* <button className="yor-btn yor-tx-blue mt-3">Terms and Condition Apply</button> */}
                                    </div>
                                    <div className="col-md-12">
                                        <div className="animi-icon-box">
                                            <img src={Cardverse} alt="Cardverse" className="img-fluid" />
                                        </div>
                                        {/* <button className="trm-con mt-3">Terms and Condition Apply</button> */}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section End */}
            {/* Section Start */}
            <div className="cards-pay-section-02">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 m-auto text-center mb-md-5 mb-3">
                            <h3 className="y-title yor-tx-blue mb-2">From Swipe to Spend</h3>
                            <h4 className="y-title yor-tx-grey">See All Your Card Activities, Everywhere You Go</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="y-card-sm">
                                <div className="row">
                                    <div className="col-md-12 text-center p-md-4">
                                        {/* <div className="animi-icon">
                                            <img src={bell} alt="cd-card" className="img-fluid" />
                                        </div> */}
                                        <h4 className="y-title yor-tx-blue fw-bold mb-md-4">No hassle of juggling multiple apps or websites to keep track of your spending.</h4>
                                        <p className="y-para yor-tx-grey">"From Swipe to Spend" brings all your card activities together in a single view.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="y-card-sm">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="animi-icon">
                                            <img src={cardThree} alt="cardThree" className="img-fluid" />
                                        </div>
                                        {/* <h4 className="y-title yor-tx-blue mb-4">Celebrate your financial well-being</h4> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Section End */}
            {/* Section Start */}
            <div className="cards-pay-section-03">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-6 col-9 my-md-auto">
                                        {/* <h6 className="y-title text-uppercase yor-tx-grey">Designed for the digital age</h6> */}
                                        <h3 className="y-title yor-tx-blue mb-md-4 mb-2">Keep Your Cards Fueled</h3>
                                        {/* <h5 className="y-title">Get banking at lightning speed</h5> */}
                                        <p className="y-para yor-tx-grey my-md-3">Top up your prepaid, forex, or membership card with ease using our streamlined upload process. Enjoy quick, secure transactions that keep your cards fueled & ready to go.</p>
                                        {/* <button className="yor-btn yor-bg-blue yor-tx-white mt-3">Open Saving Account Now</button> */}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="animi-icon">
                                            <img src={Fueled} alt="Fueled" className="img-fluid" />
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
            <div className="cards-pay-section-04">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-8 offset-md-2 text-md-center">
                                        {/* <h6 className="y-title text-uppercase yor-tx-grey">Designed for the digital age</h6> */}
                                        <h3 className="y-title yor-tx-blue mb-4">Make payments in a snap with NFC</h3>
                                        {/* <h5 className="y-title">No minimum balance</h5> */}
                                        {/* <p className="y-para yor-tx-grey my-3">Open your bank account while scrolling through your feed or binge-watching your favorite show.</p> */}
                                        {/* <button className="yor-btn yor-tx-blue mt-3">Terms and Condition Apply</button> */}
                                    </div>

                                    {/* start tab */}
                                    <div className="col-md-5 my-md-auto order-md-1 order-2">
                                        <ul className="list-tab-style1" id="myTab" role="tablist">
                                            <li role="presentation">
                                                <button className="nav-link active" id="NFC1-tab" data-bs-toggle="tab" data-bs-target="#NFC1-tab-pane" type="button" role="tab" aria-controls="NFC1-tab-pane" aria-selected="true">Contactless</button>
                                            </li>
                                            <li role="presentation">
                                                <button className="nav-link" id="NFC2-tab" data-bs-toggle="tab" data-bs-target="#NFC2-tab-pane" type="button" role="tab" aria-controls="NFC2-tab-pane" aria-selected="false">Fast and easy</button>
                                            </li>
                                            <li role="presentation">
                                                <button className="nav-link" id="NFC3-tab" data-bs-toggle="tab" data-bs-target="#NFC3-tab-pane" type="button" role="tab" aria-controls="NFC3-tab-pane" aria-selected="false">Security</button>
                                            </li>
                                            <li role="presentation">
                                                <button className="nav-link" id="NFC4-tab" data-bs-toggle="tab" data-bs-target="#NFC4-tab-pane" type="button" role="tab" aria-controls="NFC4-tab-pane" aria-selected="false">Versatile</button>
                                            </li>
                                            <li role="presentation">
                                                <button className="nav-link" id="NFC5-tab" data-bs-toggle="tab" data-bs-target="#NFC5-tab-pane" type="button" role="tab" aria-controls="NFC5-tab-pane" aria-selected="false">Low power consumption</button>
                                            </li>
                                        </ul>                                            
                                    </div>
                                    <div className="col-md-7 order-md-2 order-1">
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="NFC1-tab-pane" role="tabpanel" aria-labelledby="NFC1-tab" tabIndex="0">
                                                
                                                <div className="animi-icon-box">
                                                    <img src={cdCard} alt="cd-card" className="img-fluid" />
                                                </div>
                                                {/* <div className="d-md-none d-block">
                                                    <div className="mob-animi-box"></div>
                                                </div> */}

                                            </div>
                                            <div className="tab-pane fade" id="NFC2-tab-pane" role="tabpanel" aria-labelledby="NFC2-tab" tabIndex="0">
                                                <div className="animi-icon-box">
                                                    <img src={cdCard} alt="cd-card" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="NFC3-tab-pane" role="tabpanel" aria-labelledby="NFC3-tab" tabIndex="0">
                                                C
                                            </div>
                                            <div className="tab-pane fade" id="NFC4-tab-pane" role="tabpanel" aria-labelledby="NFC4-tab" tabIndex="0">
                                                d
                                            </div>
                                            <div className="tab-pane fade" id="NFC5-tab-pane" role="tabpanel" aria-labelledby="NFC5-tab" tabIndex="0">
                                                e
                                            </div>
                                        </div>
                                    </div>
                                    {/* end tab */}
                                    {/* <div className="col-md-12">
                                        <button className="trm-con mt-3">Terms and Condition Apply</button>
                                    </div> */}
                                    
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
  
export default CardsPay;
