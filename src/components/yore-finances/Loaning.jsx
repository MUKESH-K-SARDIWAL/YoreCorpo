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
  

function LendingBorrowingFinances() {
    return (
        <div className="lending-borrowing-finances-wrap">
            {/* Section Start */}
            <div className="lending-borrowing-finances-section-01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="y-card">
                                <div className="row align-items-center">
                                    <div className="col-md-10 offset-md-1 text-center my-md-5 my-3">
                                        {/* <h6 className="y-title text-uppercase yor-tx-grey">Designed for the digital age</h6> */}
                                        <h2 className="y-title yor-tx-blue mb-md-3">Strengthen your bonding knots with personal loans</h2>
                                        {/* <h5 className="y-title">Get banking at lightning speed</h5> */}
                                        <p className="txt-35 fw-500 yor-tx-grey">Loaning made easier</p>
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
            <div className="lending-borrowing-finances-section-02">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h3 className="y-title yor-tx-blue mb-3">Give, take, track - all in one place</h3>
                                        <div className="d-md-none d-block">
                                            <div className="mob-animi-box"></div>
                                        </div>
                                        <p className="txt-35 yor-tx-grey w-75 m-auto lh-sm"><span className="blue-tx">YORE</span> personal loan tracker makes loan managing a breeze</p>
                                    </div>
                                    <div className="d-md-block d-none">
                                        <div style={{minHeight: 400}}></div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section End */}
            {/* Section Start */}
            {/* <div className="lending-borrowing-finances-section-03">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <div style={{minHeight: 600}}></div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* Section End */}
            <YoreRewardsCard />
        </div>
    );
  }
  
export default LendingBorrowingFinances;
