import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import yoro from '../assets/images/yoro.png'
import { useGSAP } from "@gsap/react";

function YoreAi() {

    const pinContainer = useRef()

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        let time = gsap.timeline({
            scrollTrigger: {
                trigger: ".sticky_top",
                pin: ".sticky_top",
                pinSpacing: true,
                // pin:true,
                markers: true,
                start: "top top",
                end: "bottom+=600 top",
                scrub: 2,
                yoyo:true
            }
        });
        time.to('.why-card1', {
            scale: 0.90,
            y: 0,
            duration: 3000
            // pin: ".why-card1",
        }, 1)
        time.to('.why-card2', {
            scale: 0.95,
            y: -450,
            duration:   8000,
            marginTop:0
            // pin: ".why-card2",
        }, 1)
        time.to('.why-card3', {
            scale: 0.99,
            y: -900,
            duration: 10000,
            marginTop: 0
        })
      
    }, { scope: pinContainer })


    return (
        <div className="yore-ai-page">
            <Header />

            {/* Start Section*/}
            <div className="section-01">
                <div className="container">
                    <div className="conten-box">
                        <div className="row">
                            <div className="col-md-6 my-auto">
                                <h3 className="y-title mb-2 dark-blue-tx" data-aos="fade-up" data-aos-delay="400">Your personal<br />financial genie</h3>
                                <div className="d-md-none d-block">
                                    <img src={yoro} className="img-fluid animated" alt="" />
                                </div>
                                <p className="txt-35 fw-500 yor-tx-grey">Who grants <span className="blue-tx">yore</span> every wish</p>

                            </div>
                            <div className="col-md-6 d-md-block d-none">
                                <div className="y-card text-center">
                                    <img src={yoro} className="img-fluid animated" alt="" />
                                </div>
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
                                <div className="row align-items-center">
                                    <div className="col-md-8 mx-auto text-center my-md-5 my-4">
                                        <h2 className="y-title yor-tx-blue mb-2">You work hard for <span className="blue-tx">yore</span> money</h2>
                                        <p className="txt-35 fw-500 yor-tx-grey">Let YORO work smart for it. Because who doesn't love a smarter ally?</p>
                                        {/* <h5 className="y-title">Get banking at lightning speed</h5> */}

                                        {/* <button className="yor-btn yor-bg-blue yor-tx-white mt-4 px-5 py-3">Let's play instead</button> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section End */}
            {/* Section Start */}
            <div className="section-03">
                <div className="blue-curv-section">
                    <div className="top-curv"><span></span></div>
                    <div className="curv-cont">
                        <div className="container " ref={pinContainer}>


                            <div className="why-pin sticky_top" id="why-pin"> 
                                <div className="row ">
                                    <div className="col-lg-7 m-auto">
                                        <h3 className="titl-h3 mb-md-5 mb-4">Why Yore?</h3>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="why-cardsss" >

                                            {/* <h3 className="titl-h3 mb-md-5 mb-4">Why Yore?</h3> */}
                                            {/* list area start */}
                                            <div className="why-card custom-card why-card1">
                                                <div className="row">
                                                    <div className="col-md-5 d-md-block d-none">
                                                        <div className="animi-expand-box">
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 my-auto">
                                                        <div className="box-cont">
                                                            <h3 className="y-title text-white mb-3 mob-w-75 mob-mx-auto">Get the VIP treatment for your finances</h3>
                                                            <div className="d-md-none d-block">
                                                                <div className="mob-animi-box"></div>
                                                            </div>
                                                            <p className="txt-35 fw-500 lh-sm text-white my-2">YORO offers personalized guidance and expert advice</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            {/* list area end */}
                                            {/* list area start */}
                                            <div className="why-card custom-card why-card2" >
                                                <div className="row">
                                                    <div className="col-md-5 d-md-block d-none">
                                                        <div className="animi-expand-box">
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 my-auto">
                                                        <div className="box-cont">
                                                            <h3 className="y-title text-white mb-3 mob-w-75 mob-mx-auto">Get the VIP treatment for your finances</h3>
                                                            <div className="d-md-none d-block">
                                                                <div className="mob-animi-box"></div>
                                                            </div>
                                                            <p className="txt-35 fw-500 lh-sm text-white my-2">YORO offers personalized guidance and expert advice</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            {/* list area end */}
                                            {/* list area start */}
                                            <div className="why-card custom-card why-card3">
                                                <div className="row">
                                                    <div className="col-md-5 d-md-block d-none">
                                                        <div className="animi-expand-box">
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 my-auto">
                                                        <div className="box-cont">
                                                            <h3 className="y-title text-white mb-3 mob-w-75 mob-mx-auto">Get the VIP treatment for your finances</h3>
                                                            <div className="d-md-none d-block">
                                                                <div className="mob-animi-box"></div>
                                                            </div>
                                                            <p className="txt-35 fw-500 lh-sm text-white my-2">YORO offers personalized guidance and expert advice</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            {/* list area end */}
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="bottom-curv"><span></span></div>
                </div>
            </div>
            {/* Section End */}

            {/* Section Start */}
            <div className="section-04">
                <div className="container">
                    {/* <div className="row">
                        <div className="col-md-10 mx-auto text-center mb-5">
                            <h3 className="y-title yor-tx-blue mb-2">Experience the thrill of knowledge about money management</h3>
                            <h4 className="y-title yor-tx-grey">While earning real rewards along the way</h4>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="y-title yor-tx-blue mb-md-3">Intelligent <br />insights</h3>
                                        <p className="y-para">Yoro! Our A.I.-powered finance manager provides personalized insights based on your data to help improve your financial health</p>
                                        <div className="yi-animi-box" style={{ minHeight: 300 }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="y-title yor-tx-blue mb-md-3">Multilingual  <br />Support</h3>
                                        <p className="y-para">They say Money talks, but Yoro speaks yore language - the perfect ally you've been waiting for</p>
                                        <div className="yi-animi-box" style={{ minHeight: 300 }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="y-title yor-tx-blue mb-3">Debt<br />management</h3>
                                        <p className="y-para">Say goodbye to debt stress and Let Yoro help you create a plan to pay it off faster </p>
                                        <div className="yi-animi-box" style={{ minHeight: 300 }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="y-title yor-tx-blue mb-3">Predictive<br />analysis</h3>
                                        <p className="y-para">Let Yoro be your financial fortune-teller - predict your future financial status and achieve your goals with ease</p>
                                        <div className="yi-animi-box" style={{ minHeight: 300 }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="y-title yor-tx-blue mb-3">Financial literacy<br />education</h3>
                                        <p className="y-para">Learn the language of finance! Yoro offers expert resources to boost your financial knowledge</p>
                                        <div className="yi-animi-box" style={{ minHeight: 300 }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="y-title yor-tx-blue mb-3">24/7<br />availability</h3>
                                        <p className="y-para">No more waiting - get financial guidance and advice anytime, anywhere Yoro's 24/7 availability</p>
                                        <div className="yi-animi-box" style={{ minHeight: 300 }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="y-title yor-tx-blue mb-3">Budgeting &<br />spending tracking</h3>
                                        <p className="y-para">Budgeting made easy - Yoro helps you stick to your budget and save money effortlessly</p>
                                        <div className="yi-animi-box" style={{ minHeight: 300 }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="y-title yor-tx-blue mb-3">Investment<br />advice</h3>
                                        <p className="y-para">Invest like a pro! Yoro will recommend personalized investment opportunities that fit your goals and preferences</p>
                                        <div className="yi-animi-box" style={{ minHeight: 300 }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            {/* Section End */}

            <Footer />
        </div>
    )
}

export default YoreAi
