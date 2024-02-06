import React from "react";
// import '../../assets/css/Style.css';
// import $ from 'jquery';
import cashFlow from '../../assets/images/cash-flow.png'



// import jquery from 'jquery';
// window.$ = window.jQuery=jquery;

// Create the function
// export function AddLibrary(urlOfTheLibrary) {
//   const script = document.createElement('script');
//   script.src = urlOfTheLibrary;
//   script.async = true;
//   document.body.appendChild(script);
// }
  

function CashflowFinances() {
    return (
        <div className="cashflow-finances-wrap">
            {/* Section Start */}
            <div className="cashflow-finances-section-01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-md-5">
                            <div className="y-card">
                                <div className="row align-items-center">
                                    <div className="col-md-10 offset-md-1 text-center my-md-5 py-2">
                                        {/* <h6 className="y-title text-uppercase yor-tx-grey">Designed for the digital age</h6> */}
                                        <h2 className="y-title yor-tx-blue mb-4">Cash flow management on autopilot</h2>
                                        {/* <h5 className="y-title">Get banking at lightning speed</h5> */}
                                        <p className="y-para yor-tx-grey my-3">Sit back, relax, and let <span className="blue-tx">yore</span> system do the work</p>
                                        {/* <button className="yor-btn yor-bg-blue yor-tx-white mt-3">Open Saving Account Now</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section End */}
            {/* Section Start */}
            <div className="cashflow-finances-section-02">
                <div className="container">
                    {/* <div className="row">
                        <div className="col-md-9 m-auto text-center mb-5">
                            <h3 className="y-title yor-tx-blue mb-2">From Swipe to Spend</h3>
                            <h4 className="y-title yor-tx-grey">See All Your Card Activities, Everywhere You Go</h4>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12 col-7">
                                        {/* <div className="animi-icon">
                                            <img src={bell} alt="cd-card" className="img-fluid" />
                                        </div> */}
                                        <h3 className="y-title yor-tx-blue">Get a clear view of <span className="blue-tx">yore</span> Income</h3>
                                        <p className="y-para yor-tx-grey">Link your salary accounts, cash accounts to see it all at a glance </p>                                        
                                    </div>
                                    <div className="col-md-12 col-5">
                                        <div className="d-md-block d-none" style={{minHeight: 390}}></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12 col-7 order-md-1 order-2 text-end text-md-start">
                                        <h3 className="y-title yor-tx-blue">From coffee to cashmere</h3>
                                        <p className="y-para yor-tx-grey"><span className="blue-tx">YORE</span> app track all your expenses to give you a detailed view of it</p>
                                    </div>
                                    <div className="col-md-12 col-5 order-md-2 order-1">
                                        <div  className="d-md-block d-none" style={{minHeight: 390}}></div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Section End */}
            {/* Section Start */}
            <div className="cashflow-finances-section-03">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="y-card">
                                <div className="row align-items-center">
                                    <div className="col-md-12 col-7">
                                        <h3 className="y-title yor-tx-blue mb-md-2">Meet yore inner money detective</h3>
                                        <p className="y-para yor-tx-grey my-md-3"><span className="blue-tx">yore</span> app helps you break bad spending habits and build better ones</p>
                                    </div>
                                    <div className="col-md-12 col-5">
                                        <div  className="d-md-block d-none" style={{minHeight: 400}}></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section End */}
            {/* Section Start */}
            <div className="cashflow-finances-section-04">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-5 my-md-auto">
                                        <h3 className="y-title yor-tx-blue mb-md-4">Cash flow simplified, Finance Amplified</h3>
                                        <p className="y-para yor-tx-grey my-md-3">With <span className="blue-tx">yore</span> payable and receivable manager</p>
                                        {/* <button className="yor-btn yor-bg-blue yor-tx-white mt-3">Open Saving Account Now</button> */}
                                    </div>
                                    <div className="col-md-7">
                                        <div className="animi-icon">
                                            <img src={cashFlow} alt="Fueled" className="img-fluid" />
                                        </div>
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
  
  export default CashflowFinances;
