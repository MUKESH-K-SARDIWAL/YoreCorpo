import React from "react";
// import '../../assets/css/Style.css';
// import $ from 'jquery';
import YoreRewardsCard from "../../components/global/YoreRewardsCard";
import cyanScreen from '../../assets/images/cyanScreen.png'
import demo2 from '../../assets/images/demo2.svg'
import BudgetTracker from '../../assets/images/demo3.svg'


// import jquery from 'jquery';
// window.$ = window.jQuery=jquery;

// Create the function
// export function AddLibrary(urlOfTheLibrary) {
//   const script = document.createElement('script');
//   script.src = urlOfTheLibrary;
//   script.async = true;
//   document.body.appendChild(script);
// }
  

function BudgetFinances() {
    return (
        <div className="budget-finances-wrap">
            {/* Section Start */}
            <div className="budget-finances-section-01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-5 my-md-auto">
                                        <h3 className="y-title yor-tx-blue mb-md-4">Get more out of yore money</h3>
                                        <h5 className="y-title">Learn the art of budget planning</h5>
                                        <div className="d-md-none d-block">
                                            <div className="mob-animi-box animi-icon">
                                                <img src={cyanScreen} alt="Fueled" className="img-fluid" />
                                            </div>
                                        </div>
                                        <p className="txt-35 fw-500 lh-sm yor-tx-grey my-3">Learn to budget smarter and make informed financial decisions for years to come with <span className="blue-tx">yore</span></p>
                                        {/* <button className="yor-btn yor-bg-blue yor-tx-white mt-3">Open Saving Account Now</button> */}
                                    </div>
                                    <div className="col-md-7 d-md-block d-none">
                                        <div className="animi-icon">
                                            <img src={cyanScreen} alt="Fueled" className="img-fluid" />
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
            <div className="budget-finances-section-02">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-10 m-auto text-center mb-md-5 mb-4">
                            <h3 className="y-title yor-tx-blue mb-2"><span className="blue-tx">YORE</span> goals are our top priority</h3>
                            <h4 className="y-title yor-tx-grey">Plan for it with our goal-setting feature</h4>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row goals-card-row">
                        <div className="col">
                            <div className="goals-card">
                                <div className="goals-icon"></div>
                                <h4 className="y-title yor-tx-blue fw-bold">Dream House</h4>  
                            </div>
                        </div>
                        <div className="col">
                            <div className="goals-card">
                                <div className="goals-icon"></div>
                                <h4 className="y-title yor-tx-blue fw-bold">Retirement</h4>  
                            </div>
                        </div>
                        <div className="col">
                            <div className="goals-card">
                                <div className="goals-icon"></div>
                                <h4 className="y-title yor-tx-blue fw-bold">World Tour</h4>  
                            </div>
                        </div>
                        <div className="col">
                            <div className="goals-card">
                                <div className="goals-icon"></div>
                                <h4 className="y-title yor-tx-blue fw-bold">Child Education</h4>  
                            </div>
                        </div>
                        <div className="col">
                            <div className="goals-card">
                                <div className="goals-icon"></div>
                                <h4 className="y-title yor-tx-blue fw-bold">Emergency Fund</h4>  
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Section End */}
            {/* Section Start */}
            <div className="budget-finances-section-03">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h3 className="y-title yor-tx-blue mb-md-3">Never lose sight of your expenses</h3>
                                        <p className="txt-35 y-para yor-tx-grey">Keep tabs on everything easily with <span className="blue-tx">yore</span> expense tracker</p>
                                    </div>
                                    <div className="col-md-12 text-center mt-md-5 mt-3">
                                        <div className="animi-icon-box">
                                            <img src={demo2} alt="redGreen" className="img-fluid" />
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
            <div className="budget-finances-section-04">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h3 className="y-title yor-tx-blue mb-md-3">Don't let overspending sneak up on you</h3>
                                        <p className="txt-35 lh-sm fw-500 yor-tx-grey">Use <span className="blue-tx"><b>yore</b></span> budget tracker</p>
                                    </div>
                                    <div className="col-md-12 text-center mt-md-5 mt-3">
                                        <div className="animi-icon-box flex-column flex-md-row">
                                            <div className="Budget-Tracker">
                                            <img src={BudgetTracker} alt="BudgetTracker" className="img-fluid" />
                                            </div>
                                            <div className="main-progress-div">
                                                <div className="mb-3">
                                                    <p className=" p-strong text-start ">Essentials  Expenses</p>
                                                    <div className="progress pro-gress-1" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar w-75"></div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <p className=" p-strong text-start">Lifestyle Expenses </p>
                                                    <div className="progress pro-gress-2" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar w-25"></div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <p className=" p-strong text-start ">Savings</p>
                                                    <div className="progress pro-gress-3" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar w-50"></div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <p className=" p-strong text-start ">Investments</p>
                                                    <div className="progress pro-gress-4" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar w-75"></div>
                                                    </div>
                                                </div>
                                            </div>
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
            <YoreRewardsCard />
        </div>
    );
  }
  
export default BudgetFinances;
