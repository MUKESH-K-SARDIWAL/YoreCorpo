import React from "react";
// import '../../assets/css/Style.css';
// import $ from 'jquery';
import YoreHelpDesk from "../../components/global/YoreHelpDesk";
import redGreen from '../../assets/images/redGreen.png'


// import jquery from 'jquery';
// window.$ = window.jQuery=jquery;

// Create the function
// export function AddLibrary(urlOfTheLibrary) {
//   const script = document.createElement('script');
//   script.src = urlOfTheLibrary;
//   script.async = true;
//   document.body.appendChild(script);
// }
  

function NetworthFinances() {
    return (
        <div className="networth-finances-wrap">
            {/* Section Start */}
            <div className="networth-finances-section-01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="y-card">
                                <div className="row align-items-center">
                                    <div className="col-md-12 ">
                                        <h2 className="y-title yor-tx-blue mb-2">From Assets to Liabilities</h2>
                                        <div className="d-md-none d-block">
                                            <div className="mob-animi-box"></div>
                                        </div>
                                        <h4 className="y-title yor-tx-grey"><span className="dark-blue-tx">YORE</span> net worth analyzer helps you stay on top of your financial game</h4>
                                        <div className="d-md-block d-none">
                                            <div style={{minHeight: 390}}></div>
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
            <div className="networth-finances-section-02 my-md-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 m-auto text-center mb-md-5">
                            <h3 className="y-title yor-tx-blue mb-2">Know where you stand, plan where you'll go</h3>
                            <h4 className="y-title yor-tx-grey my-2">With Net Worth analyzer</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div style={{minHeight: 360}}></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section End */}
            {/* Section Start */}
            <div className="networth-finances-section-03">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-md-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-8 text-center m-auto">
                                        <h3 className="y-title yor-tx-blue mb-md-4">From red to green</h3>
                                        <p className="y-para yor-tx-grey my-md-3">Our assets vs. liabilities dashboard helps you slice and dice your finances like a pro</p>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className="animi-icon-box">
                                            <img src={redGreen} alt="redGreen" className="img-fluid" />
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
            <YoreHelpDesk />
        </div>
    );
  }
  
export default NetworthFinances;
