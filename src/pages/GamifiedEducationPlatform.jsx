import React from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
// import '../assets/css/patti.css';

import pie1 from '../assets/images/PieChart1.png'
import pie2 from '../assets/images/PieChart2.png'
import pie3 from '../assets/images/PieChart3.png'



function GamifiedEducationPlatform() {
    return (
        <div className="education-platform-page">
            <Header />

            {/* Start Section - 03 */}
            <div className="section-03">
                <div className="container">

                    {/* <div className="title">
                    <h3>Gamified & incentives financial education system</h3>
                    </div> */}

                    <div className="chart-animi-wrap">
                    <div className="chrt-left-box">
                        <img src={pie2} className="img-fluid animated" alt=""/>
                    </div>
                    <div className="chrt-right-box">
                        <img src={pie1} className="img-fluid animated" alt=""/>
                        <img src={pie3} className="img-fluid animated" alt=""/>
                    </div>
                    </div>

                    <div className="conten-box">
                    <div className="row">
                        <div className="col-lg-12 m-auto text-center">
                            <h3 className="titl-h3" data-aos="fade-up" data-aos-delay="400">Tired of dozing off during<br />finance lectures?</h3>
                            <p className="txt-35 y-para yor-tx-grey">Join yore gamified knowledge revolution</p>
                            {/* <div data-aos="fade-up" data-aos-delay="800">
                                <a href="/#" className="btn-default">Learn more</a>
                            </div> */}
                        </div>
                        {/* <div className="col-lg-6 offset-lg-1 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
                        </div> */}
                    </div>
                    </div>            

                </div>
            </div>
            {/* End Section - 03 */}
            {/* Section Start */}
            <div className="section-04 pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="y-card">
                                <div className="row align-items-center">
                                    <div className="col-md-8 mx-auto text-center my-md-5">
                                        <h2 className="y-title yor-tx-blue mb-2">Join the game of money</h2>
                                        <p className="txt-35 fw-500 yor-tx-grey">Knowledge about money shouldn't be a task</p>
                                        {/* <h5 className="y-title">Get banking at lightning speed</h5> */}
                                        
                                        <button className="yor-btn yor-bg-blue yor-tx-white mt-4 px-5 py-3">Let's play instead</button>
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
                        <div className="col-md-9 col-10 mx-auto text-center mb-md-3">
                            <h3 className="y-title yor-tx-blue mb-md-2">Who knew financial education could be so addictive?</h3>
                            {/* <h4 className="y-title yor-tx-grey">Based on the weight of your gold or the desired loan amount</h4> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="y-card-sm fin-edu">
                                <div className="row">
                                    <div className="col-md-3 col-1">
                                        <div className="num-cont blue-bg">1</div>
                                    </div>
                                    <div className="col-md-9 col-11">
                                        <p className="y-para"> Our onboarding process makes financial education exciting by connecting it to a higher purpose and showing you the "big picture" of why it's important</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="y-card-sm fin-edu">
                                <div className="row">
                                    <div className="col-md-3 col-1">
                                        <div className="num-cont red-bg">2</div>
                                    </div>
                                    <div className="col-md-9 col-11">
                                        <p className="y-para">Stay motivated and see your progress in a whole new light with our status bar that lets you track your progress and feel a sense of accomplishment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="y-card-sm fin-edu">
                                <div className="row">
                                    <div className="col-md-3 col-1">
                                        <div className="num-cont cyan-bg">3</div>
                                    </div>
                                    <div className="col-md-9 col-11">
                                        <p className="y-para">Keep your knowledge experience engaging and fun with our gamified challenges and quizzes that keep you on your toes and curious about what's next</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="y-card-sm fin-edu">
                                <div className="row">
                                    <div className="col-md-3 col-1">
                                        <div className="num-cont yellow-bg">4</div>
                                    </div>
                                    <div className="col-md-9 col-11">
                                        <p className="y-para">Get rewarded for your hard work and watch your financial knowledge grow with our incentives program that lets you earn real rewards for your efforts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="y-card-sm fin-edu">
                                <div className="row">
                                    <div className="col-md-3 col-1">
                                        <div className="num-cont red-dark-bg">5</div>
                                    </div>
                                    <div className="col-md-9 col-11">
                                        <p className="y-para">Join a community of like-minded learners and compete with other users on our leaderboard, tapping into the power of social influence</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="y-card-sm fin-edu">
                                <div className="row">
                                    <div className="col-md-3 col-1">
                                        <div className="num-cont green-bg">6</div>
                                    </div>
                                    <div className="col-md-9 col-11">
                                        <p className="y-para">Take action and make progress towards your financial goals with our platform that encourages you to be proactive and seize the day</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="y-card-sm fin-edu">
                                <div className="row">
                                    <div className="col-md-3 col-1">
                                        <div className="num-cont yellow-dark-bg">7</div>
                                    </div>
                                    <div className="col-md-9 col-11">
                                        <p className="y-para">Share your knowledge journey with your social network, receiving recognition along the way to help you feel empowered and motivated</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="y-card-sm fin-edu">
                                <div className="row">
                                    <div className="col-md-3 col-1">
                                        <div className="num-cont pink-dark-bg">8</div>
                                    </div>
                                    <div className="col-md-9 col-11">
                                        <p className="y-para">Avoid common financial pitfalls with our expert advice & guidance, giving you the confidence to make smart, informed decisions</p>
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
                        <div className="col-md-10 mx-auto text-center mb-md-5 mb-4">
                            <h3 className="y-title yor-tx-blue mb-2">Experience the thrill of knowledge about money management</h3>
                            <h4 className="y-title yor-tx-grey">While earning real rewards along the way</h4>
                        </div>
                    </div>
                    <div className="row g-md-4 g-3">
                        <div className="col-md-6 col-6">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="y-title yor-tx-blue mb-2">YORE<br/>Tokens</h3>
                                        <div className="d-md-block d-none">
                                            <div style={{minHeight: 410}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="y-title yor-tx-blue mb-2">YORE<br/>Badges</h3>
                                        <div className="d-md-block d-none">
                                            <div style={{minHeight: 410}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="y-title yor-tx-blue mb-2">Personalized<br/>Rewards</h3>
                                        <div className="d-md-block d-none">
                                            <div style={{minHeight: 410}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">
                            <div className="y-card">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="y-title yor-tx-blue mb-2">YORE<br/>Level</h3>
                                        <div className="d-md-block d-none">
                                            <div style={{minHeight: 410}}></div>
                                        </div>
                                        
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
    );
}

export default GamifiedEducationPlatform
