import React from "react";
// import '../../assets/css/Style.css';
// import $ from 'jquery';
import crdHelth from '../../assets/images/crd-helth.svg'
// import Meter from '../../assets/images/meter.png'
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
  

function CreditHealthFinances() {
    return (
        <div className="credit-health-finances-wrap">
            {/* Section Start */}
            <div className="credit-health-finances-section-01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h3 className="y-title yor-tx-blue mb-md-3"><span className="blue-tx">YORE</span> Credit Health Dashboard</h3>
                                        <p className="txt-35 y-para yor-tx-grey">Your finances' personal trainer for a fit credit score</p>
                                    </div>
                                    <div className="col-md-12 text-center mt-md-5 mt-3">
                                        <div className=" d-flex align-items-center justify-content-center meter-sec flex-column  flex-md-row">
                                            <div className="meter">
                                                <img src={crdHelth} alt="meter" className=" img-fluid"/>
                                            </div>
                                            <div className="meter-details">
                                                <div className="details-box mb-3">
                                                    <h4 className=" txt-25 txt-green">100%</h4>
                                                    <p className=" txt-18 p-strong m-0">Payment History</p>
                                                </div>
                                                <div className="details-box mb-3">
                                                    <h4 className=" txt-25 txt-green">6</h4>
                                                    <p className=" txt-18 p-strong m-0">Credit Mix</p>
                                                </div>
                                                <div className="details-box mb-3">
                                                    <h4 className=" txt-25 txt-orange">50%</h4>
                                                    <p className=" txt-18 p-strong m-0">Credit Utilization</p>
                                                </div>
                                                <div className="details-box mb-3">
                                                    <h4 className=" txt-25 txt-red">4</h4>
                                                    <p className=" txt-18 p-strong m-0">Credit Enquires</p>
                                                </div>
                                                <div className="details-box">
                                                    <h4 className=" txt-25 txt-orange">5Y 3M</h4>
                                                    <p className=" txt-18 p-strong m-0">Age of Accounts</p>
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
            {/* Section Start */}
            <div className="credit-health-finances-section-02">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9 col-10 m-auto text-center mb-md-5 mb-4">
                            <h3 className="y-title yor-tx-blue mb-0">Steps to know yore credit health</h3>
                            {/* <h4 className="y-title yor-tx-grey">See All Your Card Activities, Everywhere You Go</h4> */}
                        </div>
                    </div>
                    <div className="row crd-step-row">
                        <div className="col-md-3 col">
                            <div className="y-card-sm">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="y-title blue-tx">Step 1</h4>
                                        <div className="d-md-none d-block">
                                            <div style={{minHeight: 48}}></div>
                                        </div>
                                        <p className="y-para yor-tx-grey">Download the yore app or visit a credit health section</p>
                                        <div className="d-md-block d-none">
                                            <div style={{minHeight: 180}}></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col">
                            <div className="y-card-sm">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="y-title yellow-tx">Step 2</h4>
                                        <div className="d-md-none d-block">
                                            <div style={{minHeight: 48}}></div>
                                        </div>
                                        <p className="y-para yor-tx-grey">Enter yore personal information to verify your identity</p>
                                        <div className="d-md-block d-none">
                                            <div style={{minHeight: 180}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col">
                            <div className="y-card-sm">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="y-title red-tx">Step 3</h4>
                                        <div className="d-md-none d-block">
                                            <div style={{minHeight: 48}}></div>
                                        </div>
                                        <p className="y-para yor-tx-grey">View yore credit health and understand what it means</p>
                                        <div className="d-md-block d-none">
                                            <div style={{minHeight: 180}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col">
                            <div className="y-card-sm">
                                <div className="row">
                                    <div className="col-md-12">
                                        {/* <div className="animi-icon">
                                            <img src={bell} alt="cd-card" className="img-fluid" />
                                        </div> */}
                                        <h4 className="y-title cyan ">Step 4</h4>
                                        <div className="d-md-none d-block">
                                            <div style={{minHeight: 48}}></div>
                                        </div>
                                        <p className="y-para yor-tx-grey">Analyze the factors affecting your credit health</p>
                                        <div className="d-md-block d-none">
                                            <div style={{minHeight: 180}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col">
                            <div className="y-card-sm">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="y-title pink-tx">Step 5</h4>
                                        <div className="d-md-none d-block">
                                            <div style={{minHeight: 48}}></div>
                                        </div>
                                        <p className="y-para yor-tx-grey">Create a plan to improve your credit health </p>
                                        <div className="d-md-block d-none">
                                            <div style={{minHeight: 180}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col">
                            <div className="y-card-sm">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="y-title green-tx">Step 6</h4>
                                        <div className="d-md-none d-block">
                                            <div style={{minHeight: 48}}></div>
                                        </div>
                                        <p className="y-para yor-tx-grey">Monitor & track your credit score regularly with the credit score dashboard</p>
                                        <div className="d-md-block d-none">
                                            <div style={{minHeight: 180}}></div>
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
            <div className="credit-health-finances-section-03">
                <div className="blue-curv-section">
                    <div className="top-curv"><span></span></div>
                    <div className="curv-cont">
                        <div className="container text-center">
                        
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <h3 className="titl-h3 mb-5">5 strategies to turbocharge<br/><span className="cyan">yore</span> credit health </h3>
                                    {/* list area start */}
                                    <div className="row justify-content-center">
                                        <div className="col-md-4">
                                            <div className="y-card-sm">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h4 className="yor-tx-white txt-25 fw-bold">Time is money</h4>
                                                        <p className="txt-18 yor-tx-white opacity">Pay your bills like clockwork to avoid any unwanted surprises</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="y-card-sm">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h4 className="yor-tx-white txt-25 fw-bold">Time is money</h4>
                                                        <p className="txt-18 yor-tx-white opacity">Pay your bills like clockwork to avoid any unwanted surprises</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="y-card-sm">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h4 className="yor-tx-white txt-25 fw-bold">Time is money</h4>
                                                        <p className="txt-18 yor-tx-white opacity">Pay your bills like clockwork to avoid any unwanted surprises</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="y-card-sm">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h4 className="yor-tx-white txt-25 fw-bold">Time is money</h4>
                                                        <p className="txt-18 yor-tx-white opacity">Pay your bills like clockwork to avoid any unwanted surprises</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="y-card-sm">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h4 className="yor-tx-white txt-25 fw-bold">Time is money</h4>
                                                        <p className="txt-18 yor-tx-white opacity">Pay your bills like clockwork to avoid any unwanted surprises</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* list area end */}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="bottom-curv"><span></span></div>
                </div>
            </div>
            {/* Section End */}
            <YoreRewardsCard />
        </div>
    );
  }
  
export default CreditHealthFinances;
