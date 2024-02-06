import React from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
// import $ from 'jquery'; 
import YoreHelpDesk from "../components/global/YoreHelpDesk";

function Solutions() {
    return (
        <div className="solutions-page">
            <Header />
            
            {/* Start Section*/}
            <div className="section-01">
                <div className="container">
                    <div className="conten-box">
                        <div className="row">
                            <div className="col-lg-10 mx-auto text-center">
                                <h3 className="y-title mb-2 dark-blue-tx" data-aos="fade-up" data-aos-delay="400">Your money, your future,<br/>
                                <span className="red-tx">Our solutions</span></h3>
                                {/* <p className="txt-25 fw-500 yor-tx-grey">Let us prescribe the right remedies for your financial health</p> */}
                                {/* <div data-aos="fade-up" data-aos-delay="800">
                                    <a href="/#" className="btn-default">Learn more</a>
                                </div> */}
                            </div>
                            <div className="col-lg-6 offset-lg-1 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
                            </div>
                        </div>
                    </div>            

                </div>
            </div>
            {/* End Section */}
            {/* Section Start */}
            <div className="section-02">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-6 order-lg-2 d-md-block d-none">
                                        <div className="expand-box">
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-md-auto order-lg-1">
                                        <div className="soul-box-cont lf">
                                            <h3 className="y-title yor-tx-blue mb-3">Financial<br />literacy</h3>
                                            <p className="txt-35 fw-bold lh-sm yor-tx-grey my-2">Money talks, but do you understand the language?</p>

                                            <div className="d-md-none d-block">
                                                <div className="mob-animi-box"></div>
                                            </div>

                                            <p className="y-para yor-tx-grey mt-4">Learn to speak the language of money with the power of financial literacy </p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="y-card y-bg-trnsprent">
                                <div className="row">
                                    <div className="col-md-6 d-md-block d-none">
                                        <div className="expand-box">
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-md-auto">
                                        <div className="soul-box-cont rt">
                                            <h3 className="y-title yor-tx-blue mb-3">Financial<br />Inclusion</h3>
                                            <p className="txt-35 fw-bold lh-sm yor-tx-grey my-2">Get ready to break free from financial barriers!</p>

                                            <div className="d-md-none d-block">
                                                <div className="mob-animi-box"></div>
                                            </div>
                                            
                                            <p className="y-para yor-tx-grey mt-4">Our mission : empowering all, to give freedom without boundaries with financial inclusion</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-6 order-lg-2 d-md-block d-none">
                                        <div className="expand-box">
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-md-auto order-lg-1">
                                        <div className="soul-box-cont lf">
                                            <h3 className="y-title yor-tx-blue mb-3">Financial<br />Health</h3>
                                            <p className="txt-35 fw-bold lh-sm yor-tx-grey my-2">Money may not buy happiness, but a healthy bank account sure can</p>

                                            <div className="d-md-none d-block">
                                                <div className="mob-animi-box"></div>
                                            </div>

                                            <p className="y-para yor-tx-grey mt-4">Let's get your finances on the right track with financial health</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="y-card y-bg-trnsprent">
                                <div className="row">
                                    <div className="col-md-6 d-md-block d-none">
                                        <div className="expand-box">
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-md-auto">
                                        <div className="soul-box-cont rt">
                                            <h3 className="y-title yor-tx-blue mb-3">Financial<br />Guidance</h3>
                                            <p className="txt-35 fw-bold lh-sm yor-tx-grey my-2">Navigate the maze of money matters with our financial guidance</p>

                                            <div className="d-md-none d-block">
                                                <div className="mob-animi-box"></div>
                                            </div>

                                            <p className="y-para yor-tx-grey mt-4">From budgeting to investing, we'll be your financial GPS</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            {/* Section End */}
            <YoreHelpDesk />

            <Footer />
        </div>
    )
}

export default Solutions