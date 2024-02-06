import React from "react";
// import '../../assets/css/Style.css';
// import $ from 'jquery';
import blupMap from '../../assets/images/blue-map.svg'


// import jquery from 'jquery';
// window.$ = window.jQuery=jquery;

// Create the function
// export function AddLibrary(urlOfTheLibrary) {
//   const script = document.createElement('script');
//   script.src = urlOfTheLibrary;
//   script.async = true;
//   document.body.appendChild(script);
// }
  

function GoldCredit() {
    return (
        <div className="gold-credit-wrap">
            {/* Section Start */}
            <div className="gold-credit-section-01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="y-card">
                                <div className="row align-items-center">
                                    <div className="col-md-10 mx-auto text-center">
                                        <h2 className="y-title yor-tx-blue mb-2 mt-md-5">Your <span className="yellow-tx">sentiments</span>, our promise</h2>
                                        <p className="txt-35 fw-500 yor-tx-grey">Trust us to handle your gold with care</p>
                                        {/* <h5 className="y-title">Get banking at lightning speed</h5> */}
                                        
                                        <button className="yor-btn yor-bg-blue yor-tx-white mt-3 px-5 py-3">Apply Now</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section End */}
            {/* Section Start */}
            <div className="gold-credit-section-02">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 mx-auto text-center mb-md-5 mb-4">
                            <h3 className="y-title yor-tx-blue mb-2">Find out <span className="blue-tx">yore</span> loan eligibility</h3>
                            <h4 className="y-title yor-tx-grey">Based on the weight of your gold or the desired loan amount</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="y-card-sm">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="loan-eligible">
                                            <h5 className="y-title">Enter Loan Amount</h5>
                                            <input className="form-control" type="tetx" defaultValue="Rs 1,00,000"/>
                                            <p>Minimum Rs. 5,000 to maximum<br/>Rs. 2 crore</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="y-card-sm">
                                <button className="int-lnk"><svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2138 32L13.0112 29.1803L7.54647 23.6721H20.1022V19.7377H7.54647L13.0112 14.2295L10.2138 11.4098L0 21.7049L10.2138 32ZM24.7862 20.5902L35 10.2951L24.8513 0L21.9888 2.81967L27.4535 8.32787H14.8978V12.2623H27.4535L21.9888 17.7705L24.7862 20.5902Z" fill="white"/></svg></button>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="loan-eligible">
                                            <h5 className="y-title">Enter Gold Weight</h5>
                                            <input className="form-control" type="tetx" defaultValue="24.353 GM"/>
                                            <p>1 tola = 10 GM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-md-5 mt-3 text-center">
                            <button className="yor-btn yor-bg-blue yor-tx-white px-5 py-3">Apply Now</button>
                        </div>

                    </div>
                </div>
            </div>
            {/* Section End */}
            {/* Section Start */}
            <div className="gold-credit-section-03">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-7">
                                        <h3 className="y-title yor-tx-blue">Trustworthy Custodians, Closer Than You Think</h3>
                                        <div className="d-md-none d-block">
                                            <div className="animi-icon">
                                                <img src={blupMap} alt="cd-card" className="img-fluid" />
                                            </div>
                                        </div>
                                        <p className="txt-35 lh-sm fw-500 yor-tx-grey">Locate your nearest authorized custodian now</p>
                                        {/* <button className="yor-btn yor-bg-blue yor-tx-white mt-3">Open Saving Account Now</button> */}
                                        {/* <div className="my-5 py-1"></div> */}
                                    </div>
                                    <div className="col-md-5 d-md-block d-none">
                                        <div className="animi-icon">
                                            <img src={blupMap} alt="cd-card" className="img-fluid" />
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
            <div className="gold-credit-section-04">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="y-card mob-text-center">
                                <div className="row">
                                    <div className="col-md-6 d-md-block d-none">
                                        <div className="expand-box">
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-md-auto">
                                        <h3 className="y-title yor-tx-blue mb-md-4 mb-3">Skip the lines and the paperwork</h3>
                                        {/* <h5 className="y-title">Learn the art of budget planning</h5> */}
                                        <p className="txt-35 fw-500 lh-sm yor-tx-grey my-3">Get <span className="blue-tx">yore</span> gold loan instantly with our paperless disbursement process</p>
                                        <div className="d-md-none d-block">
                                            <div className="mob-animi-box"></div>
                                        </div>
                                        <button className="yor-btn yor-bg-blue yor-tx-white mt-md-3 px-5 py-3">Apply Now</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section End */}

        </div>
    );
  }
  
export default GoldCredit;
