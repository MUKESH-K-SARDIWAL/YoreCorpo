import React from "react";
import YoreRewardsCard from "../../components/global/YoreRewardsCard";
// import '../../assets/css/Style.css';
// import $ from 'jquery';
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
  

function SplitPay() {
    return (
        <div className="split-pay-wrap">
            {/* Section Start */}
            <div className="split-pay-section-01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-10">
                                        {/* <h6 className="y-title text-uppercase yor-tx-grey">Designed for the digital age</h6> */}
                                        <h3 className="y-title yor-tx-blue mb-4">No more fussing over receipts and unpaid balances!</h3>

                                        <div className="d-md-none d-block">
                                            <div className="mob-animi-box"></div>
                                        </div>

                                        {/* <h5 className="y-title">No minimum balance</h5> */}
                                        <p className="y-para yor-tx-grey my-3">Track shared expenses & balances with ease, Synced across the group, visible to all members</p>
                                        {/* <button className="yor-btn yor-tx-blue mt-3">Terms and Condition Apply</button> */}
                                    </div>
                                    <div className="col-md-10 d-md-block d-none">
                                        <div className="animi-icon-box">
                                            <img src={cdCard} alt="cd-card" className="img-fluid" />
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
            <div className="split-pay-section-02">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12">
                                        {/* <h6 className="y-title text-uppercase yor-tx-grey">Designed for the digital age</h6> */}
                                        <h3 className="y-title yor-tx-blue mb-4">Settle<br />split effortlessly</h3>

                                        <div className="d-md-none d-block">
                                            <div className="mob-animi-box"></div>
                                        </div>

                                        {/* <h5 className="y-title">Get banking at lightning speed</h5> */}
                                        <p className="y-para yor-tx-grey my-3">Never forget who owes what!<br/> Keep track of your shared expenses with ease.</p>
                                        {/* <button className="yor-btn yor-bg-blue yor-tx-white mt-3">Open Saving Account Now</button> */}
                                        <div className="d-md-block d-none">
                                            <img src={cdCard} alt="cd-card" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12">
                                        {/* <h6 className="y-title text-uppercase yor-tx-grey">Designed for the digital age</h6> */}
                                        <h3 className="y-title yor-tx-blue mb-4">Level up your friendship game</h3>

                                        <div className="d-md-none d-block">
                                            <div className="mob-animi-box"></div>
                                        </div>

                                        {/* <h5 className="y-title">Get banking at lightning speed</h5> */}
                                        <p className="y-para yor-tx-grey my-3">Don't let expenses get in the way of the fun! Whether it's a takeout with friends or Office trips with colleagues.</p>
                                        {/* <button className="yor-btn yor-bg-blue yor-tx-white mt-3">Open Saving Account Now</button> */}
                                        <div className="d-md-block d-none">
                                            <img src={cdCard} alt="cd-card" className="img-fluid" />
                                        </div>
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
  
export default SplitPay;
