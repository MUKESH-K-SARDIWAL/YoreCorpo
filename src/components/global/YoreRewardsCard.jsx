import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// import jquery from 'jquery';
// window.$ = window.jQuery=jquery;
import cardImg from '../../assets/images/3d-illustration-green-sprout-with-golden-coins 1.png'
import DreamInto from '../../assets/images/DreamInto.png'
import Decentralized from '../../assets/images/Decentralized.png'
import ReferToEarn from '../../assets/images/ReferToEarn.png'
import { useGSAP } from "@gsap/react";

function YoreRewardsCard() {

  useEffect(() => {

    // gsap.fromTo(
    //   ".rwd-box:not(:first-child)",
    //   {
    //     x: () => window.innerWidth / 2 + 100,
    //     rotate: -90,
    //   },
    //   {
    //     x: 0,
    //     stagger: 0.5,
    //     rotate: 0,
    //     scrollTrigger: {
    //       trigger: ".rwd-area",
    //       pin: ".rewards-card-section section-05",
    //       pinSpacing: true,
    //       markers: true,
    //       scrub: true,
    //       start: "top top",
    //       end: "+=30000",
    //       invalidateOnRefresh: true
    //     }
    //   }
    // );



    //   let rwd = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".rewards-card-section .section-05",
    //       pin: ".rewards-card-section .section-05",
    //       // pin: ".why-pin",
    //       // pinSpacing: true,
    //       markers: false,
    //       start: "top top",
    //       end: "bottom+=2000 top",
    //       scrub: 2,
    //     }
    //   });
    //   // tl.addLabel("why-card1");
    //   rwd.to('.rd-one',{
    //     yPercent:0,
    //     opacity: 1
    //   }) 

    //   rwd.from('.rd-two', {
    //     yPercent:160,
    //     opacity: 1,
    //   }) 

    //   rwd.to('.rd-one',{
    //     scale:0.90,
    //   //   scale:0.95,
    //     yPercent:-0.5,
    //     opacity: 1
    //   }, "-=0.5") 

    //   rwd.to('.rd-two', {
    //       yPercent:0,
    //       opacity: 1
    //     }) 

    //   rwd.from('.rd-three', {
    //       yPercent:160,
    //       opacity: 1,
    //     }) 

    //   rwd.to('.rd-two',{
    //     scale:0.95,
    //     yPercent:-0.4,
    //     opacity: 1
    //   }, "-=0.5")

    //   rwd.to('.rd-three', {
    //       yPercent:0,
    //       opacity: 1
    //     }) 

  }, []);

  const rewardContainer = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".rwd-area",
        start: "center center", // Adjust as needed
        end: "300px top", // Adjust as needed
        scrub: 1,
        pin: true,
        pinSpacing:true,
        pinSpacer:false,
        markers: true
      },
    });
    tl.fromTo(".rd-two", { x: 1300, }, { x: 100, duration: 1, });
    tl.fromTo(".rd-three", { x: 1400, }, { x: 200, duration: 1 });
  }, { scope: rewardContainer });


  return (
    <div className="rewards-card-section" ref={rewardContainer}>
      {/* Start Section - 05 */}
      <div className="section-05" >
        <div className="container">
          {/* <div className="save-box">
                <a href="/#">How can I save more money?</a>
                <a href="/#">How can I start investing?</a>
              </div>
              <img src={bd} className="img-fluid animated" alt=""/>
              <div className="title">
                <h3><span>YORE Rewards</span>, designed to add value!</h3>
              </div>  
            </div> */}

          <div className="conten-box">
            <div className="row g-0">

              <div className="col-lg-12">

                <div className="rwd-area">
                  {/* reword box start */}
                  <div className="rwd-box rd-one">
                    <div className="rd-titl">
                      <h6>Yore Rewards</h6>
                    </div>
                    <div className="d-lg-flex align-items-center">
                      {/* <h6>Earn 10% interest on AMB</h6> */}
                      <div className="rd-img">
                        <img src={DreamInto} className="img-fluid animated bobo" alt="" />
                      </div>
                      <div className="rd-cont">
                        <h4>Transforming Dreams into Reality </h4>
                        <p>Reach your dreams with <span className="blue-tx">yore</span> rewards, fueling your journey towards success.</p>
                        <a className="btn-default" href="/">Learn more</a>
                      </div>
                    </div>
                    {/* <img src={aniCircl} className="img-fluid animated ani-circl" alt=""/> */}
                  </div>
                  {/* reword box end */}
                  {/* reword box start */}
                  <div className="rwd-box rd-two">
                    <div className="rd-titl">
                      <h6>Decentralized revolution</h6>
                    </div>
                    <div className="d-lg-flex align-items-center">
                      {/* <h6>Earn 10% interest on AMB</h6> */}
                      <div className="rd-img">
                        <img src={Decentralized} className="img-fluid animated bobo" alt="" />
                      </div>
                      <div className="rd-cont">
                        <h4>Where rewards meet the decentralized ledger technology </h4>
                        <p>Join the decentralized revolution</p>
                        <a className="btn-default" href="/">Learn more</a>
                      </div>
                    </div>
                    {/* <img src={aniCircl} className="img-fluid animated ani-circl" alt=""/> */}
                  </div>
                  {/* reword box end */}
                  {/* reword box start */}
                  <div className="rwd-box rd-three">
                    <div className="rd-titl">
                      <h6>Originator Code</h6>
                    </div>
                    <div className="d-lg-flex align-items-center">
                      {/* <h6>Earn 10% interest on AMB</h6> */}
                      <div className="rd-img">
                        <img src={ReferToEarn} className="img-fluid animated bobo" alt="" />
                      </div>
                      <div className="rd-cont">
                        <h4>Refer to earn “Originator Code”</h4>
                        <p><span className="blue-tx">Yore</span> ticket to a world of exclusive rewards and privileges</p>
                        <a className="btn-default" href="/">Learn more</a>
                      </div>
                    </div>
                    {/* <img src={aniCircl} className="img-fluid animated ani-circl" alt=""/> */}
                  </div>
                  {/* reword box end */}
                </div>


              </div>
              {/* <div className="col-lg-4" data-aos="fade-left" data-aos-delay="200">
                  <div className="rwd-box rd-blue">
                    <img src={aniCircl} className="img-fluid animated ani-circl" alt=""/>
                    <img src={yoro} className="img-fluid animated bobo" alt=""/>
                    <p>YORE Reward Token (YRT) is a cryptographic token deployed on YORE Distributed Meta-Database & Ledger Technology (DMLT) platform.</p>
                  </div>                  
                </div>
                <div className="col-lg-4" data-aos="fade-left" data-aos-delay="200">
                  <div className="rwd-box rd-yellow">
                    <img src={aniCircl} className="img-fluid animated ani-circl" alt=""/>
                    <img src={yoro} className="img-fluid animated bobo" alt=""/>
                    <p>YORE Reward Token (YRT) is a cryptographic token deployed on YORE Distributed Meta-Database & Ledger Technology (DMLT) platform.</p>
                  </div>                  
                </div> */}

            </div>
          </div>

        </div>
      </div>
      {/* End Section - 05 */}
    </div>
  );
}

export default YoreRewardsCard;
