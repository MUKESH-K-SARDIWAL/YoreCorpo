import React from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
// import '../assets/css/patti.css';

import score1 from '../assets/images/Score1.png'
import rang from '../assets/images/rang.svg'

const FinancialHealth = () => {
    return (
        <div className="financial-health-page">
            <Header />

            {/* Start Section - 03 */}
            <div className="section-03">
                <div className="container">

                    <div className="chart-animi-wrap">
                        <div className="score-box">
                            <img src={score1} className="img-fluid animated" alt=""/>
                        </div>
                    </div>

                    <div className="conten-box">
                        <div className="row">
                            <div className="col-lg-10 col-10 mx-auto text-center">
                                <h3 className="titl-h3 mb-2" data-aos="fade-up" data-aos-delay="400">Check the pulse of your finances</h3>
                                <p className="txt-25 fw-500 yor-tx-grey">Let us prescribe the right remedies for your financial health</p>
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
            {/* End Section - 03 */}
            {/* Section Start */}
            <div className="section-04">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-10 mx-auto text-center">
                                        <h3 className="y-title yor-tx-blue">Ready to get financially fit?</h3>
                                        <p className="txt-35 lh-sm fw-500 yor-tx-grey"><span className="blue-tx">YORE</span> financial health evaluation is the ultimate workout for your money</p>
                                        {/* <button className="yor-btn yor-bg-blue yor-tx-white mt-3">Open Saving Account Now</button> */}
                                        {/* <div className="my-5 py-1"></div> */}
                                    </div>
                                    <div className="col-md-10 mx-auto mt-4">
                                        <div className='average-score mb-4'>
                                            <div className="range-average">
                                                <img src={rang} className="img-fluid animated" alt=""/>
                                            </div>
                                            <div className='round-average'>
                                                <div className='round-average-center text-center'>
                                                    <div>
                                                    <h4>yore</h4>
                                                    <p className=' txt-18 yor-tx-grey fw-500 p-0'>Score is average</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-score-box">
                                            <div className='Financia-box'>
                                                <p className=' yor-tx-blue fw-bold m-0'>Financial Stability</p>
                                                <h5 className='txt-18 blue-tx m-0'>300</h5>
                                            </div>
                                            <div className='Financia-box'>
                                                <p className=' yor-tx-blue fw-bold m-0'>Financial Stability</p>
                                                <h5 className='txt-18 blue-tx m-0'>300</h5>
                                            </div>
                                            <div className='Financia-box'>
                                                <p className=' yor-tx-blue fw-bold m-0'>Financial Stability</p>
                                                <h5 className='txt-18 blue-tx m-0'>300</h5>
                                            </div>
                                            <div className='Financia-box'>
                                                <p className=' yor-tx-blue fw-bold m-0'>Financial Stability</p>
                                                <h5 className='txt-18 blue-tx m-0'>300</h5>
                                            </div>
                                            <div className='Financia-box'>
                                                <p className=' yor-tx-blue fw-bold m-0'>Financial Stability</p>
                                                <h5 className='txt-18 blue-tx m-0'>300</h5>
                                            </div>
                                            <div className='Financia-box'>
                                                <p className=' yor-tx-blue fw-bold m-0'>Financial Stability</p>
                                                <h5 className='txt-18 blue-tx m-0'>300</h5>
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
            <div className="section-05">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mx-auto text-center mb-md-5 mb-4">
                            <h3 className="y-title yor-tx-blue mb-md-3 mb-2">6 strategies to be <span className="blue-tx">yore</span> own financial superhero</h3>
                            <h4 className="y-title w-75 mx-auto yor-tx-grey">With our financial health analyzer you have the power to make a difference</h4>
                        </div>
                    </div>
                    <div className="row g-md-4 g-3 super-hero-row">
                        <div className="col-md-4 col-8">
                            <div className="super-hero">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Invest in yourself</h4>
                                        <div className="supr-mob-icon" style={{minHeight: 65}}></div>
                                        <p>Watch our <span className="blue-tx">personal finance videos</span> or participate in a quiz to level up your money game.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-8">
                            <div className="super-hero">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Make your budget your best friend</h4>
                                        <div className="supr-mob-icon" style={{minHeight: 65}}></div>
                                        <p>Give it a name and make <span className="blue-tx">yore budget tracker</span> part of your journey.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-8">
                            <div className="super-hero">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Cut down on unnecessary expenses</h4>
                                        <div className="supr-mob-icon" style={{minHeight: 65}}></div>
                                        <p>Do you really need a third OTT service? ask <span className="blue-tx">yore cashflow manager</span>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-8">
                            <div className="super-hero">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Think ahead and plan for the future</h4>
                                        <div className="supr-mob-icon" style={{minHeight: 65}}></div>
                                        <p><span className="blue-tx">Setting a budget goal</span> now, means peace of mind later.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-8">
                            <div className="super-hero">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Avoid debt like the pro</h4>
                                        <div className="supr-mob-icon" style={{minHeight: 65}}></div>
                                        <p>Liability is an old concept, let's get ahead of the game with <span className="blue-tx">yore networth analyser</span>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-8">
                            <div className="super-hero">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Get smart about your credit health</h4>
                                        <div className="supr-mob-icon" style={{minHeight: 65}}></div>
                                        <p><span className="blue-tx">Monitor</span> it like a hawk and reap the rewards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
            {/* Section End */}
            {/* Section Start */}
            <div className="section-06">
                <div className="blue-curv-section">
                    <div className="top-curv"><span></span></div>
                    <div className="curv-cont">
                        <div className="container text-center">
                        
                            <div className="row">
                                <div className="col-lg-7 col-10  mx-auto">
                                    <h3 className="titl-h3 mb-md-5 mb-3">Why financial health evaluation ?</h3>
                                </div>
                                <div className="col-lg-12">
                                    {/* list area start */}
                                    <div className="row justify-content-md-center evalution-row">
                                        <div className="col-md-4 col-8">
                                            <div className="y-card-sm">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h4 className="yor-tx-white txt-25 fw-bold">Don't just guess</h4>
                                                        <p className="txt-18 yor-tx-white opacity">A financial health evaluation helps you know exactly where you stand.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-8">
                                            <div className="y-card-sm">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h4 className="yor-tx-white txt-25 fw-bold">Get ahead of the game</h4>
                                                        <p className="txt-18 yor-tx-white opacity">A financial health evaluation helps you catch potential financial issues before they become problems</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-8">
                                            <div className="y-card-sm">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h4 className="yor-tx-white txt-25 fw-bold">Be your own financial doctor</h4>
                                                        <p className="txt-18 yor-tx-white opacity">A financial health evaluation helps you diagnose and treat your financial problems</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-8">
                                            <div className="y-card-sm">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h4 className="yor-tx-white txt-25 fw-bold">Don't let your finances go unchecked</h4>
                                                        <p className="txt-18 yor-tx-white opacity">A financial health evaluation is like a yearly physical for your money.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-8">
                                            <div className="y-card-sm">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h4 className="yor-tx-white txt-25 fw-bold">Get ready to conquer your finances</h4>
                                                        <p className="txt-18 yor-tx-white opacity">A financial health evaluation helps you create a personalized roadmap to financial success.</p>
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

            <Footer />
        </div>
    )
}

export default FinancialHealth