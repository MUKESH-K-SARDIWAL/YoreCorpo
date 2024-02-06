import React from "react";
// import '../../assets/css/Style.css';
// import $ from 'jquery';
import YoreRewardsCard from "../../components/global/YoreRewardsCard";


// import jquery from 'jquery';
// window.$ = window.jQuery=jquery;

// Create the function
// export function AddLibrary(urlOfTheLibrary) {
//   const script = document.createElement('script');
//   script.src = urlOfTheLibrary;
//   script.async = true;
//   document.body.appendChild(script);
// }
  

function CryptoPay() {
    return (
        <div className="crypto-pay-wrap">
            {/* Section Start */}
            <div className="crypto-pay-section-01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-7">
                                        {/* <h6 className="y-title text-uppercase yor-tx-grey">Designed for the digital age</h6> */}
                                        <h3 className="y-title yor-tx-blue mb-4">YORE HODLing strategy just got smarter</h3>
                                        <h5 className="y-title fw-normal">Store, send, and receive with <span className="yor-tx-grey">yore</span> Store Wallet</h5>

                                        <div className="d-md-none d-block">
                                            <div className="mob-animi-box"></div>
                                        </div>

                                        <div className="my-5 py-1 d-md-block d-none"></div>
                                        <h4 className="fw-bold">Manage crypto assets of 25+ major public blockchains</h4>
                                        <p className="y-para yor-tx-grey my-3">Secure your assets with our single & dual signature authentication</p>
                                        {/* <button className="yor-btn yor-bg-blue yor-tx-white mt-3">Open Saving Account Now</button> */}
                                    </div>
                                    {/* <div className="col-md-6">
                                        <img src={cdCard} alt="cd-card" className="img-fluid" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section End */}
            {/* Section Start */}
            <div className="crypto-pay-section-02">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 m-auto text-center mb-md-5 mb-3">
                            <h3 className="y-title yor-tx-blue mb-2">From crypto to cash in a flash</h3>
                            <h4 className="y-title yor-tx-grey">Let <span className="blue-tx">yore</span> Spend Wallet speed things up</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="y-card-sm">
                                <div className="row">
                                    <div className="col-md-12 col-10">
                                        <h4 className="y-title yor-tx-blue fw-bold mb-4">Over 50+ crypto assets can be uploaded to <span className="blue-tx">yore</span> Spend Wallet</h4>
                                        <div className="my-5 py-5 d-md-block d-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="y-card-sm">
                                <div className="row">
                                    <div className="col-md-12 col-10">
                                        <h4 className="y-title yor-tx-blue fw-bold mb-4">Load in cryptos and spend through UPI, RTGS, NEFT, and IMPS</h4>
                                        <div className="my-5 py-5 d-md-block d-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Section End */}
            {/* Section Start */}
            <div className="crypto-pay-section-03">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12">
                                        {/* <h6 className="y-title text-uppercase yor-tx-grey">Designed for the digital age</h6> */}
                                        <h3 className="y-title yor-tx-blue mb-4">Who says credit and crypto don't mix?</h3>
                                        <p className="y-para yor-tx-grey my-3">We're here to prove them wrong with <span className="blue-tx">yore</span> credit wallet</p>

                                        <div className="d-md-none d-block">
                                            <div className="mob-animi-box"></div>
                                        </div>
                                        <div className="my-5 py-1 d-md-block d-none"></div>

                                    </div>
                                    <div className="col-md-7">
                                        <h5 className="y-title">Pledge your digital assets with up to 65% of their market value</h5>
                                        <p className="y-para yor-tx-grey my-3">With revolving credit we offer flexible funding without selling your crypto assets</p>
                                    </div>
                                    {/* <div className="col-md-6">
                                        <img src={cdCard} alt="cd-card" className="img-fluid" />
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
  
export default CryptoPay;
