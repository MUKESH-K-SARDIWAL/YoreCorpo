import React from "react";
// import '../../assets/css/Style.css';
// import $ from 'jquery';
import YoreRewardsCard from "../../components/global/YoreRewardsCard";

import Rupee from '../../assets/images/rupee.svg';
import percent from '../../assets/images/par.png';
// import jquery from 'jquery';
// window.$ = window.jQuery=jquery;

// Create the function
// export function AddLibrary(urlOfTheLibrary) {
//   const script = document.createElement('script');
//   script.src = urlOfTheLibrary;
//   script.async = true;
//   document.body.appendChild(script);
// }
  

function P2PCredit() {
    return (
        <div className="p2p-credit-wrap">
            {/* Section Start */}
            <div className="p2p-credit-section-01">
                <div className="container">
                    {/* <div className="row">
                        <div className="col-md-9 m-auto text-center mb-5">
                            <h3 className="y-title yor-tx-blue mb-2">From Swipe to Spend</h3>
                            <h4 className="y-title yor-tx-grey">See All Your Card Activities, Everywhere You Go</h4>
                        </div>
                    </div> */}
                    <div className="row g-md-4 g-2">
                        <div className="col-md-6 col-6">
                            <div className="y-card p2p-card">
                                <div className="row">
                                    <div className="col-md-11 m-auto">
                                        {/* <div className="animi-icon">
                                            <img src={bell} alt="cd-card" className="img-fluid" />
                                        </div> */}
                                        <h3 className="y-title blue-tx">Peer To Peer Credit</h3>
                                        <p className="y-para blue-tx">Individual investors lending money directly to borrowers</p>
                                        <p className="y-para blue-tx">Offers borrowers lower interest rates</p>
                                        <p className="y-para blue-tx">Since most of the process is online, borrowers can often get their loan early</p>
                                        <p className="y-para blue-tx">Offer greater flexibility to borrowers and lenders</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">
                            <div className="y-card p2p-card">
                                <button className="int-lnk">VS</button>
                                <div className="row">
                                    <div className="col-md-11 m-auto">
                                        <h3 className="y-title">Traditional Lending</h3>
                                        <p className="y-para yor-tx-grey">It often act as intermediaries between lenders & borrowers</p>
                                        <p className="y-para yor-tx-grey">Offers borrowers comparatively higher interest rates</p>
                                        <p className="y-para yor-tx-grey">It may take weeks or even months to approve and disburse a loan</p>
                                        <p className="y-para yor-tx-grey">less scope of flexibility to borrowers and lenders</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Section End */}
            {/* Section Start */}
            <div className="p2p-credit-section-02">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="y-title yor-tx-blue">Invest in people, not on digits</h3>
                                        <p className="txt-35 fw-500 yor-tx-grey">with <span className="blue-tx">yore</span> trusted P2P marketplace</p>
                                        {/* <button className="yor-btn yor-bg-blue yor-tx-white mt-3">Open Saving Account Now</button> */}
                                        <div className="d-md-none d-block">
                                            <div className="mob-animi-box"></div>
                                        </div>
                                        <div className="my-5 py-1 d-md-block d-none"></div>
                                    </div>
                                    <div className="col-md-7">
                                        <ul className="dot-list-style">
                                            <li>Connect with multiple P2P platforms effortlessly</li>
                                            <li>Join a community of lenders & borrowers for a seamless P2P experience</li>
                                            <li>Compare loan and borrowing offers in one place to make an informed decision</li>
                                            <li>Find the best interest rates & terms that suit your financial needs</li>
                                            <li>Stay informed with risk assessment tool and get alerts on activities</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section End */}
            {/* Section Start */}
            <div className="p2p-credit-section-03">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 m-auto text-center mb-md-4 mb-3">
                            <h3 className="y-title yor-tx-blue">5 easy steps to get started</h3>
                            {/* <h4 className="y-title yor-tx-grey">Plan for it with our goal-setting feature</h4> */}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-0 justify-content-center">
                        {/* start tab */}
                        <div className="col-md-12">
                            <ul className="offer-avail-list" id="myStapeTab" role="tablist">
                                <li role="presentation">
                                    <button className="nav-link active" id="offer-loan-tab" data-bs-toggle="tab" data-bs-target="#offer-loan-tab-pane" type="button" role="tab" aria-controls="offer-loan-tab-pane" aria-selected="true">Offer a loan</button>
                                    <p className="y-para text-center p-md-3 mt-2">Maximize <span className="blue-tx">yore</span> Gains</p>
                                </li>
                                <li role="presentation">
                                    <button className="nav-link" id="avail-loan-tab" data-bs-toggle="tab" data-bs-target="#avail-loan-tab-pane" type="button" role="tab" aria-controls="avail-loan-tab-pane" aria-selected="false">Avail a loan</button>
                                    <p className="y-para text-center p-md-3 mt-2">Minimize <span className="blue-tx">yore</span> Costs</p>
                                </li>
                            </ul>                                            
                        </div>
                        <div className="col-md-12 mx-auto">
                            <div className="tab-content" id="myStapeTabContent">
                                <div className="tab-pane fade show active" id="offer-loan-tab-pane" role="tabpanel" aria-labelledby="offer-loan-tab" tabIndex="0">

                                    <div className="ofr-alv-tab-cont">
                                        <div className="alav-box">
                                            <div className="y-card-sm">
                                                <div className="d-md-block d-none">
                                                    <div style={{minHeight: 153}}></div>
                                                </div>
                                            </div>
                                            <h6>Download yore app</h6>
                                        </div>
                                        <div className="alav-box">
                                            <div className="y-card-sm">
                                                <div className="d-md-block d-none">
                                                    <div style={{minHeight: 153}}></div>
                                                </div>
                                            </div>
                                            <h6>Make Investment Profile</h6>
                                        </div>
                                        <div className="alav-box">
                                            <div className="y-card-sm">
                                                <div className="d-md-block d-none">
                                                    <div style={{minHeight: 153}}></div>
                                                </div>
                                            </div>
                                            <h6>Avail Loan Listing</h6>
                                        </div>
                                        <div className="alav-box">
                                            <div className="y-card-sm">
                                                <div className="d-md-block d-none">
                                                    <div style={{minHeight: 153}}></div>
                                                </div>
                                            </div>
                                            <h6>Select Loan</h6>
                                        </div>
                                        <div className="alav-box">
                                            <div className="y-card-sm">
                                                <div className="d-md-block d-none">
                                                    <div style={{minHeight: 153}}></div>
                                                </div>
                                            </div>
                                            <h6>Receive EMI</h6>
                                        </div>
                                    </div>

                                </div>
                                <div className="tab-pane fade" id="avail-loan-tab-pane" role="tabpanel" aria-labelledby="avail-loan-tab" tabIndex="0">
                                    
                                <div className="ofr-alv-tab-cont">
                                        <div className="alav-box">
                                            <div className="y-card-sm">
                                                <div className="d-md-block d-none">
                                                    <div style={{minHeight: 153}}></div>
                                                </div>
                                            </div>
                                            <h6>Download yore app</h6>
                                        </div>
                                        <div className="alav-box">
                                            <div className="y-card-sm">
                                                <div className="d-md-block d-none">
                                                    <div style={{minHeight: 153}}></div>
                                                </div>
                                            </div>
                                            <h6>Make Investment Profile</h6>
                                        </div>
                                        <div className="alav-box">
                                            <div className="y-card-sm">
                                                <div className="d-md-block d-none">
                                                    <div style={{minHeight: 153}}></div>
                                                </div>
                                            </div>
                                            <h6>Avail Loan Listing</h6>
                                        </div>
                                        <div className="alav-box">
                                            <div className="y-card-sm">
                                                <div className="d-md-block d-none">
                                                    <div style={{minHeight: 153}}></div>
                                                </div>
                                            </div>
                                            <h6>Select Loan</h6>
                                        </div>
                                        <div className="alav-box">
                                            <div className="y-card-sm">
                                                <div className="d-md-block d-none">
                                                    <div style={{minHeight: 153}}></div>
                                                </div>
                                            </div>
                                            <h6>Receive EMI</h6>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* end tab */}

                    </div>
                </div>
            </div>
            {/* Section End */}
            {/* Section Start */}
            <div className="p2p-credit-section-04">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-md-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="y-title yor-tx-blue mob-w-75 mob-mx-auto">Trust in data, not in chance</h3>
                                        <div className="d-md-none d-block">
                                            <div className="mob-animi-box"></div>
                                        </div>
                                        <p className="txt-35 fw-500 yor-tx-grey mob-w-75 mob-mx-auto mb-0">With <span className="blue-tx">yore</span> risk assessment tool for P2P credit</p>
                                        {/* <button className="yor-btn yor-bg-blue yor-tx-white mt-3">Open Saving Account Now</button> */}
                                    </div>
                                    <div className="col-md-7 d-md-block d-none">
                                        <div style={{minHeight: 440}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section End */}
            {/* Section Start */}
            <div className="p2p-credit-section-05">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 m-auto text-center mb-md-5 mb-4">
                            <h3 className="y-title yor-tx-blue mb-2">Know before you owe</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="y-card-sm">
                                <button className="int-lnk">Lending</button>
                                <div className="row">
                                    <div className="col-md-12">
                                        {/* <div className="loan-compare-cal">
                                            fgfg
                                        </div> */}

                                        <div className="Lending-div">
                                            <div className="left-amount">
                                                <form action="#">
                                                    <p className=" txt-18 yor-tx-grey fw-500">Loan Amount</p>
                                                    <div className="in-amount position-relative">
                                                        <input type="text" value="1,40,000" />
                                                        <img src={Rupee} alt="Rupee" className=" img-fluid" />
                                                    </div>
                                                    <p className=" txt-18 yor-tx-grey fw-500 mt-3">Loan Amount</p>
                                                    <div className="in-amount position-relative">
                                                        <input type="text" value="12" />
                                                        <img src={percent} alt="percent" className=" img-fluid" />
                                                    </div>
                                                    <p className=" txt-18 yor-tx-grey fw-500 mt-3">Loan Amount</p>
                                                    <div className="in-amount position-relative">
                                                        <input type="text" value={"60"} />
                                                        <h3>Months</h3>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="right-interest">
                                                <div className="mb-4">
                                                    <p>Monthly Interest</p>
                                                    <h4>₹84,000</h4>
                                                </div>
                                                <div className="mb-4">
                                                    <p>Monthly Principal</p>
                                                    <h4>₹2,333</h4>
                                                </div>
                                                <div className="mb-4">
                                                    <p>EMI</p>
                                                    <h4>₹86,333</h4>
                                                </div>
                                                <div>
                                                    <p>Loan Amount</p>
                                                    <h4>₹1,40,000</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="y-card-sm">
                                <button className="int-lnk">Borrowing</button>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="Borrowing-div">
                                            <h3 className=" txt-18 yor-tx-blue fw-bold text-center">Enter amount you want to borrow</h3>
                                            <form action="#">
                                                <div className="search-now position-relative">
                                                    <img src={Rupee} alt="rupee" className=" img-fluid" />
                                                    <input type="text" value={"1,40,00"} />
                                                    <button type="submit">Search Now</button>
                                                </div>
                                            </form>
                                            <div className="Borrow-details mt-2">
                                                <div className="loan">
                                                    <p>Loan Amount</p>
                                                    <h5>₹1,40,000</h5>
                                                </div>
                                                <div className="Interest">
                                                    <p>Interest</p>
                                                    <h5>6.5% ( p.a. )</h5>
                                                </div>
                                                <div className="Tenure">
                                                    <p>Tenure</p>
                                                    <h5>12 Months</h5>
                                                </div>
                                                <div className="EMI">
                                                    <p>EMI</p>
                                                    <h5>₹12,000</h5>
                                                </div>
                                                <div>
                                                    <a className="Borrow-btn" href="#">Avail Now</a>
                                                </div>
                                            </div>
                                            <div className="Borrow-details mt-2">
                                                <div className="loan">
                                                    <p>Loan Amount</p>
                                                    <h5>₹1,40,000</h5>
                                                </div>
                                                <div className="Interest">
                                                    <p>Interest</p>
                                                    <h5>8% ( p.a. )</h5>
                                                </div>
                                                <div className="Tenure">
                                                    <p>Tenure</p>
                                                    <h5>24 Months</h5>
                                                </div>
                                                <div className="EMI">
                                                    <p>EMI</p>
                                                    <h5>₹6,332</h5>
                                                </div>
                                                <div>
                                                    <a className="Borrow-btn" href="#">Avail Now</a>
                                                </div>
                                            </div>
                                            <div className="Borrow-details mt-2">
                                                <div className="loan">
                                                    <p>Loan Amount</p>
                                                    <h5>₹1,40,000</h5>
                                                </div>
                                                <div className="Interest">
                                                    <p>Interest</p>
                                                    <h5>9% ( p.a. )</h5>
                                                </div>
                                                <div className="Tenure">
                                                    <p>Tenure</p>
                                                    <h5>36 Months</h5>
                                                </div>
                                                <div className="EMI">
                                                    <p>EMI</p>
                                                    <h5>₹4,452</h5>
                                                </div>
                                                <div>
                                                    <a className="Borrow-btn" href="#">Avail Now</a>
                                                </div>
                                            </div>

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
  
export default P2PCredit;
