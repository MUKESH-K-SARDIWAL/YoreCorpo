import React, { } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Navigation, Mousewheel, Pagination, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
// import '../assets/css/patti.css';
import Tokan from '../assets/images/Tokan.png'




function Rewards() {
    return (
        <div className="rewards-page">
            <Header />
            
            {/* Start Section*/}
            <div className="section-01">
                <div className="container">
                    <div className="conten-box">
                        <div className="row">
                            <div className="col-lg-6 col-10 m-auto text-center min">
                                <h3 className="y-title mb-2 dark-blue-tx" data-aos="fade-up" data-aos-delay="400">Personal finance, Personalized rewards</h3>
                                <p className="txt-35 fw-500 yor-tx-grey">It's a match made in financial<br />heaven with <span className="blue-tx">yore</span></p>
                                {/* <div data-aos="fade-up" data-aos-delay="800">
                                    <a href="/#" className="btn-default">Learn more</a>
                                </div> */}
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
                                    <div className="col-md-11 mx-auto text-center my-md-5">
                                        <h2 className="y-title yor-tx-blue mb-2">The future of rewards is <span className="red-tx">Decentralized</span> & we are making it happen</h2>
                                        <p className="txt-35 fw-500 yor-tx-grey">Join us and start earning rewards that are truly <span className="red-tx">yore's</span> </p>
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
            <div className="section-03 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="y-title yor-tx-blue"><span className="blue-tx">YORE</span> Token</h3>
                                        <h6 className="dark-blue-tx txt-25 fw-bold mb-md-5">The currency of yore future </h6>

                                        <div className="d-md-none d-block">
                                            <div className="mob-animi-box">
                                                <img src={Tokan} className="img-fluid animated" alt=""/>   
                                            </div>
                                        </div>
                                    
                                        <ul className="dot-list-style">
                                            <li>YORE Tokens are decentralized & can be used across multiple platforms</li>
                                            <li>Users become value creators by using & promoting YORE Tokens</li>
                                            <li>The more you use, the more yore tokens are worth</li>
                                            <li>YORE Tokens' value has the potential to increase forever</li>
                                            <li>YORE Tokens are secure and backed by our platform</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 d-md-block d-none">
                                        <div className="text-center">
                                            <img src={Tokan} className="img-fluid animated" alt=""/>   
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
            <div className="section-04">
                <div className="blue-curv-section">
                    <div className="top-curv"><span></span></div>
                    <div className="curv-cont">
                        <div className="container text-center">
                        
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <h3 className="titl-h3 mb-5">5 ways to earn YORE tokens</h3>
                                </div>
                                <div className="col-lg-12">
                                    {/* list area start */}
                                    <div className="evalution-row three-swp-card">.

                                    <Swiper
                                        modules={[Autoplay, Navigation, Mousewheel, Pagination, A11y]}
                                        slidesPerView={3}
                                        loop={true}
                                        centeredSlides={true}
                                        spaceBetween={0}
                                        autoplay={{ delay: 4000, disableOnInteraction: false,}}
                                        navigation
                                        pagination={{ clickable: true }}
                                        scrollbar={{ draggable: true }}
                                        // onSwiper={(swiper) => console.log(swiper)}
                                        // onSlideChange={() => console.log('slide change')}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className="y-card-sm-blue">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h4 className="yor-tx-white txt-25 fw-bold">Spread the Word</h4>
                                                        <p className="txt-18 yor-tx-white opacity">Share the news about YORE Tokens with your friends and family to earn it.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="y-card-sm-blue">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h4 className="yor-tx-white txt-25 fw-bold">Get Active</h4>
                                                        <p className="txt-18 yor-tx-white opacity">The more you engage, the more your chances of earning it increases.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="y-card-sm-blue">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h4 className="yor-tx-white txt-25 fw-bold">Use the app</h4>
                                                        <p className="txt-18 yor-tx-white opacity">Use the yore app to unlock exclusive rewards and YORE tokens</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="y-card-sm-blue">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h4 className="yor-tx-white txt-25 fw-bold">Participate in events</h4>
                                                        <p className="txt-18 yor-tx-white opacity">Join our exciting events to win YORE Tokens and other prizes.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="y-card-sm-blue">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h4 className="yor-tx-white txt-25 fw-bold">Refer and Earn</h4>
                                                        <p className="txt-18 yor-tx-white opacity">Invite your friends to join YORE app, and get rewarded for every successful referral.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                        {/* <div className="col-md-4 col-8">
                                            
                                        </div>
                                        <div className="col-md-4 col-8">
                                            
                                        </div>
                                        <div className="col-md-4 col-8">
                                            
                                        </div>
                                        <div className="col-md-4 col-8">
                                            
                                        </div>
                                        <div className="col-md-4 col-8">
                                            
                                        </div> */}

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
            {/* Section Start */}
            <div className="vehicle-credit-section-04">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-8 col-lg-7 my-auto">
                                        <h3 className="y-title yor-tx-blue mb-md-4">Join the elite group with the <span className="red-tx">Originator Code</span></h3>
                                        <div className="d-md-none d-block">
                                            <div className="mob-animi-box"></div>
                                        </div>
                                        <p className="txt-35 lh-sm fw-500 yor-tx-grey">Be an early bird! Get your unique originator code and refer high-quality leads for a chance to earn millions in the future</p>
                                    </div>
                                    <div className="col-md-4 col-lg-5 text-center d-md-block d-none">
                                        <div className="animi-icon">
                                            <div style={{minHeight: 500}}></div>
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
            <div className="section-06">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mx-auto text-center mb-md-5">
                            <h3 className="y-title yor-tx-blue mb-3">Yore Token’s <span className="blue-tx">Utility</span></h3>
                            {/* <h4 className="y-title w-75 mx-auto yor-tx-grey">With our financial health analyzer you have the power to make a difference</h4> */}
                        </div>
                    </div>
                    <div className="row justify-content-center g-md-4 g-3">
                        <div className="col-md-6 col-6">
                            <div className="token-uti">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Redeem for Discounts</h4>
                                        <p>Redeem yore tokens for discounts on purchases within our platform or other renowned online destinations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">
                            <div className="token-uti">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Swap Tokens</h4>
                                        <p>Exchange yore tokens in form of real money to enjoy more flexibility</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">
                            <div className="token-uti">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Unlock premium services</h4>
                                        <p>Unlock premium features using yore tokens</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">
                            <div className="token-uti">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Partner Rewards</h4>
                                        <p>Shop on your favorite online destination with a exclusive discount using your tokens</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">
                            <div className="token-uti">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Interest Rate Reduction</h4>
                                        <p>Use yore tokens to reduce interest rates on loans or credit card balances </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">
                            <div className="token-uti">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Utility Bill Payment</h4>
                                        <p>Use yore tokens to pay for utility bills such as electricity, water or internet services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">
                            <div className="token-uti">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Mobile Recharge</h4>
                                        <p>Users can use yore tokens to recharge or top-up their mobile phone balances</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">
                            <div className="token-uti">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Online Bill Payment</h4>
                                        <p>Use yore tokens for paying various online services or subscriptions through yore app</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">
                            <div className="token-uti">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Travel and Accommodation</h4>
                                        <p>Use yore tokens for booking flights, hotels, or other travel-related services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">
                            <div className="token-uti">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Exclusive Merchandise</h4>
                                        <p>Treat yourself to exclusive merchandise available only through yore tokens</p>
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

export default Rewards
