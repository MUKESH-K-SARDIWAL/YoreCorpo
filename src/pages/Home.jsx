import React, { useEffect, Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Stats, OrbitControls, Environment, useGLTF, Circle, useScroll, useAnimations, ScrollControls, ArcballControls } from '@react-three/drei'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import $ from 'jquery';
import { gsap } from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
// import YoreRewardsCard from "../components/global/YoreRewardsCard";
import ModelView from "../ModelViewer";


import yoro from '../assets/images/yoro.svg'
import bnrAnimi from '../assets/animation/bnr-animi.mp4'
import splitVid from '../assets/animation/lst.mp4'
import wellBeing from '../assets/animation/1.mp4'
import security from '../assets/animation/2.mp4'
import stability from '../assets/animation/3.mp4'
import fingltf from '../assets/animation/fin.gltf'
import gemiFi from '../assets/animation/gmi.mp4'
import helTh from '../assets/animation/helt.mp4'
import DreamInto from '../assets/images/DreamInto.png'
import Decentralized from '../assets/images/Decentralized.png'
import ReferToEarn from '../assets/images/ReferToEarn.png'
import YoreRewardsCard from "../components/global/YoreRewardsCard";




function Home() {
  // const gltf = useLoader(GLTFLoader, coinImage)

  const videoRef = useRef(null);

  useEffect(() => {

    // const loader = new GLTFLoader();

    // window.AOS.init({ // Initialization
    //   duration: 2000
    // });


    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".trigger",
    //     start: "top top",
    //     end: "+=1000",
    //     scrub: 1,
    //     pin: true,
    //     markers: true
    //   }
    // });
    // tl.to(".box", {yPercent: 350, duration: 1})
    // tl.to(".box", {rotation: 360, duration: 3})
    // tl.to(".box", {xPercent: 350, duration: 1})


    // $("#tile-1 .nav-tabs a").click(function() {
    //   var position = $(this).parent().position();
    //   var width = $(this).parent().width();
    //     $("#tile-1 .slider").css({"left":+ position.left,"width":width});
    // });
    // var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
    // var actPosition = $("#tile-1 .nav-tabs .active").position();
    // $("#tile-1 .slider").css({"left":+ actPosition.left,"width": actWidth});



    var tabs = $('.tabs');
    var selector = $('.tabs .yr-tab').find('a').length;
    //var selector = $(".tabs").find(".selector");
    var activeItem = tabs.find('.active');
    var activeWidth = activeItem.innerWidth();
    $(".selector").css({
      "left": activeItem.position.left + "px",
      "width": activeWidth + "px"
    });

    $(".tabs .yr-tab").on("click", "a", function (e) {
      e.preventDefault();
      $('.tabs .yr-tab a').removeClass("active");
      $(this).addClass('active');
      var activeWidth = $(this).innerWidth();
      var itemPos = $(this).position();
      $(".selector").css({
        "left": itemPos.left + "px",
        "width": activeWidth + "px"
      });
    });

    //GSAP Code start

    gsap.registerPlugin(ScrollTrigger);

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



    // let rwd = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".rewards-card-section .section-05 ",
    //     pin: ".rewards-card-section .section-05",
    //     // pin: ".why-pin",
    //     // pinSpacing: true,            
    //     // markers: true,
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: 2,
    //     duration: "500%"
    //   }
    // });
    // tl.addLabel("why-card1");
    // rwd.to('.rd-one', {
    //   yPercent: 0,
    //   opacity: 1
    // })

    // rwd.from('.rd-two', {
    //   xPercent: 93,
    //   opacity: 1,
    // })

    // rwd.to('.rd-one',{
    //     scale:0.90,
    //     yPercent:-0.5,
    //     opacity: 1
    //   }, "-=0.5")


    // rwd.to('.rd-two', {
    //   xPercent: 7,
    //   opacity: 1
    // })

    // rwd.from('.rd-three', {
    //   xPercent: 100,
    //   opacity: 1,
    // })

    // rwd.to('.rd-two',{
    //     scale:0.95,
    //     yPercent:-0.4,
    //     opacity: 1
    //   }, "-=0.5")

    // rwd.to('.rd-three', {
    //   xPercent: 14,
    //   opacity: 1
    // })

  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    setTimeout(() => {
      videoElement.pause();
    }, 200);
  }, [])

  const handleButtonClick = async (start, end) => {
    if (videoRef.current) {
      videoRef.current.currentTime = start;
      await videoRef.current.play();

      setTimeout(async () => {
        await videoRef.current.pause();
      }, end);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      updatePositions()
    }, 4000)

    setInterval(() => {
      updatePositions()
    }, 7000)
  }, [])

  function updatePositions() {

    const parent = document.querySelector('.gallery-container');
    const boxes = parent.querySelectorAll('.gallery-item');

    boxes.forEach((b, i) => console.log(b.classList.add(`box_${i + 1}`)));

    setTimeout(() => {
      let box = Array.from(boxes);

      let first = box[0];
      box.shift();
      box.push(first);

      parent.innerHTML = '';
      box.forEach((element, i) => {
        // Get the list of classes for the current element
        const classes = element.classList;

        // Use Array.from to convert the DOMTokenList to an array
        Array.from(classes).forEach(className => {
          // Check if the class name starts with "box_"
          if (className.startsWith('box_')) {
            // Remove the class
            element.classList.remove(className);
          }
        });
        parent.appendChild(element);
      });
    }, 4000)
  }



  return (
    <div className="home-page">
      <Header />

      <div id="hero">
        <div className="hero-wrap">
          <div className="container-fluid">
            <div className="row">

              <div className="col-lg-10 m-auto text-center">
                <h1 data-aos="fade-up">Master the art of money<br />management to achieve <br />


                  {/* <div>
                    <h1>My 3D Model Viewer</h1>
                    <ModelViewer />
                  </div> */}
                  <div className="blue-tx" id="bannerDynmicText">Financial Well-Being</div>

                  {/* <Swiper
                    modules={[Autoplay, EffectFade, Navigation]}
                    spaceBetween={0}
                    effect={'fade'}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                      delay: 6000,
                     
                    }}
                    navigation={false}
                    pagination={{
                      clickable: true,
                    }}

                    className="swpAnimiFedTxt"
                  >
                    <SwiperSlide>
                      
                      <div className="blue-tx">Financial Well-Being</div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="red-tx">Financial Stability</div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="yellow-tx">Financial Goal</div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="yellow-tx">Financial Freedom</div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="red-tx">Financial Security</div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="blue-tx">Financial Well-Being</div>
                    </SwiperSlide>
                  </Swiper> */}

                  {/* <div className="cubespinner animate-flipper pb-2">
                      <div className="face1 red-tx">Financial Well-Being</div>
                      <div className="face2 blue-tx">Management to achieve</div>
                      <div className="face3 green-tx">Master the art of money</div>
                  </div> */}

                  {/* <span className="red-tx">Financial Well-Being</span> */}

                </h1>
                {/* <h2 data-aos="fade-up" data-aos-delay="400">Make your transactions with peace and privacy</h2>            */}
              </div>
              <div className="col-lg-10 text-center m-auto">
                <div className="hero-img ">
                  <div className="gallery">
                    <div className="gallery-container">
                      <div className="gallery-item" id="box-1">
                        <Canvas >
                          <ambientLight />
                          <directionalLight intensity={1.5} position={[5, 5, 5]} />
                          
                          <Suspense fallback={null}>
                            

                            <Model />
                            
                          </Suspense>

                          <ArcballControls
                            enablePan={false}
                            enableRotate={false}
                            enableZoom={false}
                          />
                        </Canvas>
                      </div>
                      <div className="gallery-item" id="box-2">

                        <Canvas >
                          <ambientLight />
                          <directionalLight intensity={1.5} position={[5, 5, 5]} />
                          
                          <Suspense fallback={null}>
                            
                            <Model />
                            
                          </Suspense>

                          <ArcballControls
                            enablePan={false}
                            enableRotate={false}
                            enableZoom={false}
                          />
                        </Canvas>
                      </div>
                      <div className="gallery-item" id="box-3">
                        <Canvas>
                          <ambientLight />
                          <directionalLight intensity={1.5} position={[5, 5, 5]} />
                          
                          <Suspense fallback={null}>
                            
                            <Model />
                            
                          </Suspense>
                          <ArcballControls
                            enablePan={false}
                            enableRotate={false}
                            enableZoom={false}
                          />
                        </Canvas>
                      </div>
                      <div className="gallery-item" id="box-4">
                        <Canvas >
                          <ambientLight />
                          <directionalLight intensity={1.5} position={[5, 5, 5]} />
                          
                          <Suspense fallback={null}>
                            
                            <Model />
                            
                          </Suspense>

                          <ArcballControls
                            enablePan={false}
                            enableRotate={false}
                            enableZoom={false}
                          />
                        </Canvas>
                      </div>
                      <div className="gallery-item" id="box-5">
                        <Canvas >
                          <ambientLight />
                          <directionalLight intensity={1.5} position={[5, 5, 5]} />
                          
                          <Suspense fallback={null}>
                            
                            <Model />
                            
                          </Suspense>

                          <ArcballControls
                            enablePan={false}
                            enableRotate={false}
                            enableZoom={false}
                          />
                        </Canvas>
                      </div>
                    </div>
                    {/* <div className="gallery-container">
                      <div className="gallery-item" id="box-1">

                      </div>
                      <div className="gallery-item" id="box-2">
                        
                      </div>
                      <div className="gallery-item" id="box-3">
                       
                      </div>
                      <div className="gallery-item" id="box-4">
                        
                      </div>
                      <div className="gallery-item" id="box-5">
                        
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






      {/* <div className="container pp">
        <div className="spacer"></div>
          <div className="cardss">
              <div className="cardd card-one justify-content-center">card1</div>
              <div className="cardd card-two">card2</div>
              <div className="cardd card-three">card3</div>
          </div>
        <div className="hhhh"></div>
      </div> */}




      {/* <div className="wrapper d-flex flex-nowrap">
  <section className="section section--large flex-shrink-0 vw-100 vh-100 d-flex justify-content-center align-items-center">
    Part One
  </section>
  <section className="section section--dark section--small vh-100 flex-shrink-0 d-flex justify-content-center align-items-center">
    Part Two
  </section>
  <section className="section section--small vh-100 flex-shrink-0 d-flex justify-content-center align-items-center">
    Part Three
  </section>
  <section className="section section--large flex-shrink-0 vw-100 vh-100 d-flex justify-content-center align-items-center">
    Part Four
  </section>
</div>

<div className="center-marker"></div> */}



      {/* Start Section - 02 */}
      <div className="section-02">
        <div className="top-curv"><span></span></div>
        <div className="curv-cont">
          <div className="container">

            <div className="row">
              <div className="col-lg-10 m-auto text-center">
                {/* <h3 className="titl-h3">Financial Solutions that you need to improve your financial health</h3> */}
                <h3 className="titl-h3">Revolutionizing the rules,<br />

                  <div className="d-flex flex-wrap justify-content-center">
                    <div>Redefining</div>
                    <div className="cubespinner animate-flipper pb-2 flp-animi-02">
                      <div className="face1 cyan">yore</div>
                      <div className="face2 blue-tx">your</div>
                      <div className="face3 green-tx">yore</div>
                    </div>
                    {/* <span className="cyan">yore</span>  */}
                    <div>potential</div>
                  </div>

                </h3>

                <p className="txt-25 fw-500 lh-sm text-white opacity my-3 d-md-block d-none">Financial services for infinite possibilities</p>
              </div>
            </div>


            {/* <div className="tile" id="tile-1">
                <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a href="/#" className="nav-link active" id="pay-tab" data-bs-toggle="tab" data-bs-target="#pay" type="a" role="tab" aria-controls="pay" aria-selected="true">
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4406 0.690809C18.0801 0.866995 19.7539 2.54032 19.809 5.05118C19.864 7.55674 18.0117 9.47973 15.3944 9.47707C12.8765 9.47441 11.1113 7.49299 11.0261 5.19107C10.9409 2.89711 12.9413 0.653624 15.4406 0.690809Z" fill="#FD4078"/>
                        <path d="M9.44923 15.661C9.44923 16.9399 9.43868 18.2178 9.45451 19.4967C9.46066 19.9544 9.3112 20.1494 8.85139 20.1466C6.33696 20.1338 3.8234 20.1494 1.30897 20.1384C0.740144 20.1356 0.634643 20.0111 0.675964 19.4243C0.783223 17.8709 1.24215 16.4336 2.06945 15.1319C2.71125 14.1221 3.4691 13.2342 4.45553 12.5622C5.83847 11.6202 7.33218 11.0719 8.99382 11.0463C9.28043 11.0417 9.43604 11.1479 9.43692 11.46C9.43692 11.7338 9.45011 12.0075 9.45011 12.2812C9.45187 13.4072 9.45011 14.5341 9.45011 15.6601H9.44835L9.44923 15.661Z" fill="#FFCC01"/>
                        <path d="M17.7335 15.4712C17.2169 15.4712 16.7002 15.4528 16.1845 15.4756C15.5243 15.5055 15.324 15.6862 15.3039 16.3345C15.2737 17.2952 15.3003 18.2577 15.2829 19.2192C15.2728 19.7948 15.121 19.9194 14.5888 19.7816C12.4738 19.2333 11.0098 17.6409 11.0235 15.5985C11.0409 13.1603 13.0371 11.2275 15.7374 11.367C17.9777 11.482 19.4919 13.2165 19.7718 14.8027C19.8733 15.3774 19.8038 15.4616 19.1911 15.4747C18.7055 15.4853 18.2191 15.4765 17.7335 15.4765C17.7335 15.4747 17.7335 15.4739 17.7335 15.4721V15.4712Z" fill="#33CBCC"/>
                        <path d="M9.28406 9.47707C6.51149 6.62278 3.73982 3.76849 0.981445 0.927914C1.1952 0.604373 1.40895 0.704909 1.60762 0.705822C3.85157 0.710392 6.09641 0.711306 8.34036 0.71222C8.51775 0.71222 8.69513 0.71222 8.87163 0.701252C9.2814 0.67749 9.45524 0.868507 9.45435 1.29532C9.44726 4.00155 9.4508 6.70687 9.4508 9.4131C9.39493 9.43412 9.33905 9.45514 9.28406 9.47707Z" fill="#1B79EA"/>
                      </svg> Pay
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a href="/#" className="nav-link" id="finances-tab" data-bs-toggle="tab" data-bs-target="#finances" type="a" role="tab" aria-controls="finances" aria-selected="false">
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4406 0.690809C18.0801 0.866995 19.7539 2.54032 19.809 5.05118C19.864 7.55674 18.0117 9.47973 15.3944 9.47707C12.8765 9.47441 11.1113 7.49299 11.0261 5.19107C10.9409 2.89711 12.9413 0.653624 15.4406 0.690809Z" fill="#FD4078"/>
                        <path d="M9.44923 15.661C9.44923 16.9399 9.43868 18.2178 9.45451 19.4967C9.46066 19.9544 9.3112 20.1494 8.85139 20.1466C6.33696 20.1338 3.8234 20.1494 1.30897 20.1384C0.740144 20.1356 0.634643 20.0111 0.675964 19.4243C0.783223 17.8709 1.24215 16.4336 2.06945 15.1319C2.71125 14.1221 3.4691 13.2342 4.45553 12.5622C5.83847 11.6202 7.33218 11.0719 8.99382 11.0463C9.28043 11.0417 9.43604 11.1479 9.43692 11.46C9.43692 11.7338 9.45011 12.0075 9.45011 12.2812C9.45187 13.4072 9.45011 14.5341 9.45011 15.6601H9.44835L9.44923 15.661Z" fill="#FFCC01"/>
                        <path d="M17.7335 15.4712C17.2169 15.4712 16.7002 15.4528 16.1845 15.4756C15.5243 15.5055 15.324 15.6862 15.3039 16.3345C15.2737 17.2952 15.3003 18.2577 15.2829 19.2192C15.2728 19.7948 15.121 19.9194 14.5888 19.7816C12.4738 19.2333 11.0098 17.6409 11.0235 15.5985C11.0409 13.1603 13.0371 11.2275 15.7374 11.367C17.9777 11.482 19.4919 13.2165 19.7718 14.8027C19.8733 15.3774 19.8038 15.4616 19.1911 15.4747C18.7055 15.4853 18.2191 15.4765 17.7335 15.4765C17.7335 15.4747 17.7335 15.4739 17.7335 15.4721V15.4712Z" fill="#33CBCC"/>
                        <path d="M9.28406 9.47707C6.51149 6.62278 3.73982 3.76849 0.981445 0.927914C1.1952 0.604373 1.40895 0.704909 1.60762 0.705822C3.85157 0.710392 6.09641 0.711306 8.34036 0.71222C8.51775 0.71222 8.69513 0.71222 8.87163 0.701252C9.2814 0.67749 9.45524 0.868507 9.45435 1.29532C9.44726 4.00155 9.4508 6.70687 9.4508 9.4131C9.39493 9.43412 9.33905 9.45514 9.28406 9.47707Z" fill="#1B79EA"/>
                      </svg> Finances
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a href="/#" className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4406 0.690809C18.0801 0.866995 19.7539 2.54032 19.809 5.05118C19.864 7.55674 18.0117 9.47973 15.3944 9.47707C12.8765 9.47441 11.1113 7.49299 11.0261 5.19107C10.9409 2.89711 12.9413 0.653624 15.4406 0.690809Z" fill="#FD4078"/>
                        <path d="M9.44923 15.661C9.44923 16.9399 9.43868 18.2178 9.45451 19.4967C9.46066 19.9544 9.3112 20.1494 8.85139 20.1466C6.33696 20.1338 3.8234 20.1494 1.30897 20.1384C0.740144 20.1356 0.634643 20.0111 0.675964 19.4243C0.783223 17.8709 1.24215 16.4336 2.06945 15.1319C2.71125 14.1221 3.4691 13.2342 4.45553 12.5622C5.83847 11.6202 7.33218 11.0719 8.99382 11.0463C9.28043 11.0417 9.43604 11.1479 9.43692 11.46C9.43692 11.7338 9.45011 12.0075 9.45011 12.2812C9.45187 13.4072 9.45011 14.5341 9.45011 15.6601H9.44835L9.44923 15.661Z" fill="#FFCC01"/>
                        <path d="M17.7335 15.4712C17.2169 15.4712 16.7002 15.4528 16.1845 15.4756C15.5243 15.5055 15.324 15.6862 15.3039 16.3345C15.2737 17.2952 15.3003 18.2577 15.2829 19.2192C15.2728 19.7948 15.121 19.9194 14.5888 19.7816C12.4738 19.2333 11.0098 17.6409 11.0235 15.5985C11.0409 13.1603 13.0371 11.2275 15.7374 11.367C17.9777 11.482 19.4919 13.2165 19.7718 14.8027C19.8733 15.3774 19.8038 15.4616 19.1911 15.4747C18.7055 15.4853 18.2191 15.4765 17.7335 15.4765C17.7335 15.4747 17.7335 15.4739 17.7335 15.4721V15.4712Z" fill="#33CBCC"/>
                        <path d="M9.28406 9.47707C6.51149 6.62278 3.73982 3.76849 0.981445 0.927914C1.1952 0.604373 1.40895 0.704909 1.60762 0.705822C3.85157 0.710392 6.09641 0.711306 8.34036 0.71222C8.51775 0.71222 8.69513 0.71222 8.87163 0.701252C9.2814 0.67749 9.45524 0.868507 9.45435 1.29532C9.44726 4.00155 9.4508 6.70687 9.4508 9.4131C9.39493 9.43412 9.33905 9.45514 9.28406 9.47707Z" fill="#1B79EA"/>
                      </svg> Credits
                    </a>
                  </li>

                  <div className="slider"></div>
                </ul>
              </div> */}


            <div className="yr-tab-wrapper">

              <nav className="tabs" id="myTab" role="tablist">
                <div className="selector"></div>

                <div className="yr-tab" role="presentation">
                  <a href="/#" className="active" id="pay-tab" data-bs-toggle="tab" data-bs-target="#pay" type="a" role="tab" aria-controls="pay" aria-selected="true">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.4406 0.690809C18.0801 0.866995 19.7539 2.54032 19.809 5.05118C19.864 7.55674 18.0117 9.47973 15.3944 9.47707C12.8765 9.47441 11.1113 7.49299 11.0261 5.19107C10.9409 2.89711 12.9413 0.653624 15.4406 0.690809Z" fill="#FD4078" />
                      <path d="M9.44923 15.661C9.44923 16.9399 9.43868 18.2178 9.45451 19.4967C9.46066 19.9544 9.3112 20.1494 8.85139 20.1466C6.33696 20.1338 3.8234 20.1494 1.30897 20.1384C0.740144 20.1356 0.634643 20.0111 0.675964 19.4243C0.783223 17.8709 1.24215 16.4336 2.06945 15.1319C2.71125 14.1221 3.4691 13.2342 4.45553 12.5622C5.83847 11.6202 7.33218 11.0719 8.99382 11.0463C9.28043 11.0417 9.43604 11.1479 9.43692 11.46C9.43692 11.7338 9.45011 12.0075 9.45011 12.2812C9.45187 13.4072 9.45011 14.5341 9.45011 15.6601H9.44835L9.44923 15.661Z" fill="#FFCC01" />
                      <path d="M17.7335 15.4712C17.2169 15.4712 16.7002 15.4528 16.1845 15.4756C15.5243 15.5055 15.324 15.6862 15.3039 16.3345C15.2737 17.2952 15.3003 18.2577 15.2829 19.2192C15.2728 19.7948 15.121 19.9194 14.5888 19.7816C12.4738 19.2333 11.0098 17.6409 11.0235 15.5985C11.0409 13.1603 13.0371 11.2275 15.7374 11.367C17.9777 11.482 19.4919 13.2165 19.7718 14.8027C19.8733 15.3774 19.8038 15.4616 19.1911 15.4747C18.7055 15.4853 18.2191 15.4765 17.7335 15.4765C17.7335 15.4747 17.7335 15.4739 17.7335 15.4721V15.4712Z" fill="#33CBCC" />
                      <path d="M9.28406 9.47707C6.51149 6.62278 3.73982 3.76849 0.981445 0.927914C1.1952 0.604373 1.40895 0.704909 1.60762 0.705822C3.85157 0.710392 6.09641 0.711306 8.34036 0.71222C8.51775 0.71222 8.69513 0.71222 8.87163 0.701252C9.2814 0.67749 9.45524 0.868507 9.45435 1.29532C9.44726 4.00155 9.4508 6.70687 9.4508 9.4131C9.39493 9.43412 9.33905 9.45514 9.28406 9.47707Z" fill="#1B79EA" />
                    </svg> Pay
                  </a>
                </div>

                <div className="yr-tab" role="presentation">
                  <a href="/#" id="finances-tab" data-bs-toggle="tab" data-bs-target="#finances" type="a" role="tab" aria-controls="finances" aria-selected="false">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.4406 0.690809C18.0801 0.866995 19.7539 2.54032 19.809 5.05118C19.864 7.55674 18.0117 9.47973 15.3944 9.47707C12.8765 9.47441 11.1113 7.49299 11.0261 5.19107C10.9409 2.89711 12.9413 0.653624 15.4406 0.690809Z" fill="#FD4078" />
                      <path d="M9.44923 15.661C9.44923 16.9399 9.43868 18.2178 9.45451 19.4967C9.46066 19.9544 9.3112 20.1494 8.85139 20.1466C6.33696 20.1338 3.8234 20.1494 1.30897 20.1384C0.740144 20.1356 0.634643 20.0111 0.675964 19.4243C0.783223 17.8709 1.24215 16.4336 2.06945 15.1319C2.71125 14.1221 3.4691 13.2342 4.45553 12.5622C5.83847 11.6202 7.33218 11.0719 8.99382 11.0463C9.28043 11.0417 9.43604 11.1479 9.43692 11.46C9.43692 11.7338 9.45011 12.0075 9.45011 12.2812C9.45187 13.4072 9.45011 14.5341 9.45011 15.6601H9.44835L9.44923 15.661Z" fill="#FFCC01" />
                      <path d="M17.7335 15.4712C17.2169 15.4712 16.7002 15.4528 16.1845 15.4756C15.5243 15.5055 15.324 15.6862 15.3039 16.3345C15.2737 17.2952 15.3003 18.2577 15.2829 19.2192C15.2728 19.7948 15.121 19.9194 14.5888 19.7816C12.4738 19.2333 11.0098 17.6409 11.0235 15.5985C11.0409 13.1603 13.0371 11.2275 15.7374 11.367C17.9777 11.482 19.4919 13.2165 19.7718 14.8027C19.8733 15.3774 19.8038 15.4616 19.1911 15.4747C18.7055 15.4853 18.2191 15.4765 17.7335 15.4765C17.7335 15.4747 17.7335 15.4739 17.7335 15.4721V15.4712Z" fill="#33CBCC" />
                      <path d="M9.28406 9.47707C6.51149 6.62278 3.73982 3.76849 0.981445 0.927914C1.1952 0.604373 1.40895 0.704909 1.60762 0.705822C3.85157 0.710392 6.09641 0.711306 8.34036 0.71222C8.51775 0.71222 8.69513 0.71222 8.87163 0.701252C9.2814 0.67749 9.45524 0.868507 9.45435 1.29532C9.44726 4.00155 9.4508 6.70687 9.4508 9.4131C9.39493 9.43412 9.33905 9.45514 9.28406 9.47707Z" fill="#1B79EA" />
                    </svg> Finances
                  </a>
                </div>

                <div className="yr-tab" role="presentation">
                  <a href="/#" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.4406 0.690809C18.0801 0.866995 19.7539 2.54032 19.809 5.05118C19.864 7.55674 18.0117 9.47973 15.3944 9.47707C12.8765 9.47441 11.1113 7.49299 11.0261 5.19107C10.9409 2.89711 12.9413 0.653624 15.4406 0.690809Z" fill="#FD4078" />
                      <path d="M9.44923 15.661C9.44923 16.9399 9.43868 18.2178 9.45451 19.4967C9.46066 19.9544 9.3112 20.1494 8.85139 20.1466C6.33696 20.1338 3.8234 20.1494 1.30897 20.1384C0.740144 20.1356 0.634643 20.0111 0.675964 19.4243C0.783223 17.8709 1.24215 16.4336 2.06945 15.1319C2.71125 14.1221 3.4691 13.2342 4.45553 12.5622C5.83847 11.6202 7.33218 11.0719 8.99382 11.0463C9.28043 11.0417 9.43604 11.1479 9.43692 11.46C9.43692 11.7338 9.45011 12.0075 9.45011 12.2812C9.45187 13.4072 9.45011 14.5341 9.45011 15.6601H9.44835L9.44923 15.661Z" fill="#FFCC01" />
                      <path d="M17.7335 15.4712C17.2169 15.4712 16.7002 15.4528 16.1845 15.4756C15.5243 15.5055 15.324 15.6862 15.3039 16.3345C15.2737 17.2952 15.3003 18.2577 15.2829 19.2192C15.2728 19.7948 15.121 19.9194 14.5888 19.7816C12.4738 19.2333 11.0098 17.6409 11.0235 15.5985C11.0409 13.1603 13.0371 11.2275 15.7374 11.367C17.9777 11.482 19.4919 13.2165 19.7718 14.8027C19.8733 15.3774 19.8038 15.4616 19.1911 15.4747C18.7055 15.4853 18.2191 15.4765 17.7335 15.4765C17.7335 15.4747 17.7335 15.4739 17.7335 15.4721V15.4712Z" fill="#33CBCC" />
                      <path d="M9.28406 9.47707C6.51149 6.62278 3.73982 3.76849 0.981445 0.927914C1.1952 0.604373 1.40895 0.704909 1.60762 0.705822C3.85157 0.710392 6.09641 0.711306 8.34036 0.71222C8.51775 0.71222 8.69513 0.71222 8.87163 0.701252C9.2814 0.67749 9.45524 0.868507 9.45435 1.29532C9.44726 4.00155 9.4508 6.70687 9.4508 9.4131C9.39493 9.43412 9.33905 9.45514 9.28406 9.47707Z" fill="#1B79EA" />
                    </svg> Credits
                  </a>
                </div>
                {/* <a href="/#"><i className="fas fa-burn"></i>Marvel</a> */}
              </nav>
            </div>

            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="pay" role="tabpanel" aria-labelledby="pay-tab" tabIndex="0">

                <div className="conten-box">

                  <div className="finan-health">
                    <div className="row align-items-md-center">
                      <div className="col-md-3 order-md-1 order-2">
                        <ul className="process-model more-icon-preocess" id="myTab" role="tablist">
                          <li className="nav-item active" role="presentation">
                            {/* href="#home-tab" */}
                            {/* <a href="javascript:void(0)" onClick={() => { handleButtonClick(0, 200) }} className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"><i className="fas fa-check"></i><p>Savings Account</p></a> */}
                            <a href="javascript:void(0)" className="nav-link active" onClick={() => { handleButtonClick(0, 356) }}><i className="fas fa-check"></i><p>Savings Account</p></a>
                          </li>
                          <li className="nav-item" role="presentation">
                            {/* href="#contact-tab"  */}
                            {/* <a href="javascript:void(0)" onClick={() => { handleButtonClick(0.3, 722) }} className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"><i className="fas fa-check"></i><p>Split Pay</p></a> */}
                            <a href="javascript:void(0)" onClick={() => { handleButtonClick(0.356, 1251) }} className="nav-link" id="contact-tab"><i className="fas fa-check"></i><p>Split Pay</p></a>

                          </li>
                          <li className="nav-item" role="presentation">
                            {/* href="#profile-tab" */}
                            {/* <a href="javascript:void(0)" onClick={() => { handleButtonClick(1.657, 929) }} className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"><i className="fas fa-check"></i><p>Postpaid Account</p></a> */}
                            <a href="javascript:void(0)" onClick={() => { handleButtonClick(1.672, 998) }} className="nav-link" id="profile-tab"><i className="fas fa-check"></i><p>Postpaid Account</p></a>
                          </li>
                          <li className="nav-item" role="presentation">

                            {/* <a href="#finan-cards-tab" className="nav-link" id="finan-cards-tab" data-bs-toggle="tab" data-bs-target="#finan-cards-tab-pane" type="button" role="tab" aria-controls="finan-cards-tab-pane" aria-selected="false"><i className="fas fa-check"></i><p>Cards</p></a> */}

                            <a href="javascript:void(0)"  className="nav-link"><i className="fas fa-check"></i><p>Cards</p></a>
                          </li>
                          <li className="nav-item" role="presentation">
                            {/* <a href="#finan-crypto-tab" className="nav-link" id="finan-crypto-tab" data-bs-toggle="tab" data-bs-target="#finan-crypto-tab-pane" type="button" role="tab" aria-controls="finan-crypto-tab-pane" aria-selected="false"><i className="fas fa-check"></i><p>Crypto</p></a> */}
                            <a href="javascript:void(0)" className="nav-link"><i className="fas fa-check"></i><p>Crypto</p></a>
                          </li>
                        </ul>
                      </div>


                      <div className="col-md-9 order-md-2 order-1">
                        <div className="tab-content" id="myTabContent">
                          <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">

                            {/* tab conten start */}
                            <div className="finan-health-tab-conten">
                              <div className="row">
                                <div className="col-lg-4 pt-md-5 pt-lg-0 d-flex flex-column justify-content-center">
                                  <h4 data-aos="fade-up">Managing yore money has never been easier!</h4>
                                  {/* <p data-aos="fade-up" data-aos-delay="400">Leave the traditional route of banking and join the digital, super-secure and ultra-quick YORE Neobank. Now no need to stand in line for hours, cause YORE Neobank is on your mobile screens. </p> */}
                                  <div data-aos="fade-up" data-aos-delay="800">
                                    <a href="/#" className="lrm-mor-btn">Learn more</a>
                                  </div>
                                </div>
                                <div className="col-lg-6 hero-img dl-height" data-aos="fade-left" data-aos-delay="200">
                                  <video ref={videoRef} muted loop autoPlay >
                                    <source src={splitVid} type="video/mp4" />
                                  </video>
                                </div>
                              </div>
                            </div>
                            {/* tab conten End */}

                          </div>

                          <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                            {/* tab conten start */}
                            <div className="finan-health-tab-conten" data-aos="fade-fade-left" data-aos-delay="200">
                              <div className="row">
                                <div className="col-lg-4 pt-md-5 pt-lg-0 d-flex flex-column justify-content-center">
                                  <h4 data-aos="fade-up">Managing yore money has never been easier!</h4>
                                  <div data-aos="fade-up" data-aos-delay="800">
                                    <a href="/#" className="lrm-mor-btn">Learn more</a>
                                  </div>
                                </div>
                                <div className="col-lg-6 hero-img">
                                  {/* <video src={security} loop autoPlay muted /> */}
                                  {/* <img src={animi} className="img-fluid animated" alt=""/> */}
                                </div>
                              </div>
                            </div>
                            {/* tab conten End */}
                          </div>
                          <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                            {/* tab conten start */}
                            <div className="finan-health-tab-conten" data-aos="fade-fade-left" data-aos-delay="200">
                              <div className="row">
                                <div className="col-lg-4 pt-md-5 pt-lg-0 d-flex flex-column justify-content-center">
                                  <h4 data-aos="fade-up">Managing yore money has never been easier!</h4>
                                  <div data-aos="fade-up" data-aos-delay="800">
                                    <a href="/#" className="lrm-mor-btn">Learn more</a>
                                  </div>
                                </div>
                                <div className="col-lg-6 hero-img">
                                  {/* <video src={stability} loop autoPlay muted /> */}
                                  {/* <img src={animi} className="img-fluid animated" alt=""/> */}
                                </div>
                              </div>
                            </div>
                            {/* tab conten End */}
                          </div>

                          <div className="tab-pane fade" id="finan-cards-tab-pane" role="tabpanel" aria-labelledby="finan-cards-tab" tabIndex="0">
                            {/* tab conten start */}
                            <div className="finan-health-tab-conten" data-aos="fade-fade-left" data-aos-delay="200">
                              <div className="row">
                                <div className="col-lg-4 pt-md-5 pt-lg-0 d-flex flex-column justify-content-center">
                                  <h4 data-aos="fade-up">Managing yore money has never been easier!</h4>
                                  <div data-aos="fade-up" data-aos-delay="800">
                                    <a href="/#" className="lrm-mor-btn">Learn more</a>
                                  </div>
                                </div>
                                <div className="col-lg-6 hero-img">
                                  <video src={security} loop autoPlay muted />
                                  {/* <img src={animi} className="img-fluid animated" alt=""/> */}
                                </div>
                              </div>
                            </div>
                            {/* tab conten End */}
                          </div>
                          <div className="tab-pane fade" id="finan-crypto-tab-pane" role="tabpanel" aria-labelledby="finan-crypto-tab" tabIndex="0">
                            {/* tab conten start */}
                            <div className="finan-health-tab-conten" data-aos="fade-fade-left" data-aos-delay="200">
                              <div className="row">
                                <div className="col-lg-4 pt-md-5 pt-lg-0 d-flex flex-column justify-content-center">
                                  <h4 data-aos="fade-up">Managing yore money has never been easier!</h4>
                                  <div data-aos="fade-up" data-aos-delay="800">
                                    <a href="/#" className="lrm-mor-btn">Learn more</a>
                                  </div>
                                </div>
                                <div className="col-lg-6 hero-img">
                                  <video src={wellBeing} loop autoPlay muted />
                                  {/* <img src={animi} className="img-fluid animated" alt=""/> */}
                                </div>
                              </div>
                            </div>
                            {/* tab conten End */}
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>

              <div className="tab-pane fade" id="finances" role="tabpanel" aria-labelledby="finances-tab" tabIndex="0">
                {/* finances tab conten  start*/}
                <div className="conten-box">

                  <div className="finan-health">
                    <div className="row align-items-md-center">
                      <div className="col-md-3 order-md-1 order-2">

                        <ul className="process-model more-icon-preocess" id="myTab" role="tablist">
                          <li className="nav-item active" role="presentation">
                            <a href="#hm-cash-flow-manager-tab" className="nav-link active" id="hm-cash-flow-manager-tab" data-bs-toggle="tab" data-bs-target="#hm-cash-flow-manager-tab-pane" type="button" role="tab" aria-controls="hm-cash-flow-manager-tab-pane" aria-selected="true"><i className="fas fa-check"></i><p>Cash Flow Manager</p></a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a href="#hm-net-worth-analysis-tab" className="nav-link" id="hm-net-worth-analysis-tab" data-bs-toggle="tab" data-bs-target="#hm-net-worth-analysis-tab-pane" type="button" role="tab" aria-controls="hm-net-worth-analysis-tab-pane" aria-selected="false"><i className="fas fa-check"></i><p>Net Worth Analysis</p></a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a href="#hm-credit-health-manager-tab" className="nav-link" id="hm-credit-health-manager-tab" data-bs-toggle="tab" data-bs-target="#hm-credit-health-manager-tab-pane" type="button" role="tab" aria-controls="hm-credit-health-manager-tab-pane" aria-selected="false"><i className="fas fa-check"></i><p>Credit Health Manager</p></a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a href="#hm-loaning-tab" className="nav-link" id="hm-loaning-tab" data-bs-toggle="tab" data-bs-target="#hm-loaning-tab-pane" type="button" role="tab" aria-controls="hm-loaning-tab-pane" aria-selected="false"><i className="fas fa-check"></i><p>Loaning</p></a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a href="#hm-budget-tracker-tab" className="nav-link" id="hm-budget-tracker-tab" data-bs-toggle="tab" data-bs-target="#hm-budget-tracker-tab-pane" type="button" role="tab" aria-controls="hm-budget-tracker-tab-pane" aria-selected="false"><i className="fas fa-check"></i><p>Budget Tracker</p></a>
                          </li>
                        </ul>
                      </div>


                      <div className="col-md-9 order-md-2 order-1">
                        <div className="tab-content" id="myTabContent">
                          <div className="tab-pane fade show active" id="hm-cash-flow-manager-tab-pane" role="tabpanel" aria-labelledby="hm-cash-flow-manager-tab" tabIndex="0">

                            {/* tab conten start */}
                            <div className="finan-health-tab-conten">
                              <div className="row">
                                <div className="col-lg-4 pt-md-5 pt-lg-0 d-flex flex-column justify-content-center">
                                  <h4 data-aos="fade-up">Managing yore money has never been easier!</h4>
                                  <div data-aos="fade-up" data-aos-delay="800">
                                    <a href="/#" className="lrm-mor-btn">Learn more</a>
                                  </div>
                                </div>
                                <div className="col-lg-6 hero-img">
                                  <video src={wellBeing} loop autoPlay muted />
                                  {/* <img src={animi} className="img-fluid animated" alt=""/> */}
                                </div>
                              </div>
                            </div>
                            {/* tab conten End */}

                          </div>

                          <div className="tab-pane fade" id="hm-credit-health-manager-tab-pane" role="tabpanel" aria-labelledby="hm-credit-health-manager-tab" tabIndex="0">
                            {/* tab conten start */}
                            <div className="finan-health-tab-conten">
                              <div className="row">
                                <div className="col-lg-4 pt-md-5 pt-lg-0 d-flex flex-column justify-content-center">
                                  <h4 data-aos="fade-up">Managing yore money has never been easier!</h4>
                                  <div data-aos="fade-up" data-aos-delay="800">
                                    <a href="/#" className="lrm-mor-btn">Learn more</a>
                                  </div>
                                </div>
                                <div className="col-lg-6 hero-img">
                                  <video src={security} loop autoPlay muted />
                                  {/* <img src={animi} className="img-fluid animated" alt=""/> */}
                                </div>
                              </div>
                            </div>
                            {/* tab conten End */}
                          </div>
                          <div className="tab-pane fade" id="hm-net-worth-analysis-tab-pane" role="tabpanel" aria-labelledby="hm-net-worth-analysis-tab" tabIndex="0">
                            {/* tab conten start */}
                            <div className="finan-health-tab-conten" >
                              <div className="row">
                                <div className="col-lg-4 pt-md-5 pt-lg-0 d-flex flex-column justify-content-center">
                                  <h4 data-aos="fade-up">Managing yore money has never been easier!</h4>
                                  <div data-aos="fade-up" data-aos-delay="800">
                                    <a href="/#" className="lrm-mor-btn">Learn more</a>
                                  </div>
                                </div>
                                <div className="col-lg-6 hero-img">
                                  <video src={stability} loop autoPlay muted />
                                  {/* <img src={animi} className="img-fluid animated" alt=""/> */}
                                </div>
                              </div>
                            </div>
                            {/* tab conten End */}
                          </div>

                          <div className="tab-pane fade" id="hm-loaning-tab-pane" role="tabpanel" aria-labelledby="hm-loaning-tab" tabIndex="0">
                            {/* tab conten start */}
                            <div className="finan-health-tab-conten" >
                              <div className="row">
                                <div className="col-lg-4 pt-md-5 pt-lg-0 d-flex flex-column justify-content-center">
                                  <h4 data-aos="fade-up">Managing yore money has never been easier!</h4>
                                  <div data-aos="fade-up" data-aos-delay="800">
                                    <a href="/#" className="lrm-mor-btn">Learn more</a>
                                  </div>
                                </div>
                                <div className="col-lg-6 hero-img">
                                  <video src={security} loop autoPlay muted />
                                  {/* <img src={animi} className="img-fluid animated" alt=""/> */}
                                </div>
                              </div>
                            </div>
                            {/* tab conten End */}
                          </div>
                          <div className="tab-pane fade" id="hm-budget-tracker-tab-pane" role="tabpanel" aria-labelledby="hm-budget-tracker-tab" tabIndex="0">
                            {/* tab conten start */}
                            <div className="finan-health-tab-conten">
                              <div className="row">
                                <div className="col-lg-4 pt-md-5 pt-lg-0 d-flex flex-column justify-content-center">
                                  <h4 data-aos="fade-up">Managing yore money has never been easier!</h4>
                                  <div data-aos="fade-up" data-aos-delay="800">
                                    <a href="/#" className="lrm-mor-btn">Learn more</a>
                                  </div>
                                </div>
                                <div className="col-lg-6 hero-img" >
                                  <video src={wellBeing} loop autoPlay muted />
                                  {/* <img src={animi} className="img-fluid animated" alt=""/> */}
                                </div>
                              </div>
                            </div>
                            {/* tab conten End */}
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>

                </div>
                {/* finances tab conten  end*/}
              </div>

              <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                {/* Credit tab conten  start*/}
                <div className="conten-box">

                  <div className="finan-health">
                    <div className="row align-items-md-center">
                      <div className="col-md-3 order-md-1 order-2">

                        <ul className="process-model more-icon-preocess" id="myTab" role="tablist">
                          <li className="nav-item active" role="presentation">
                            <a href="#hm-micro-credit-tab" className="nav-link active" id="hm-micro-credit-tab" data-bs-toggle="tab" data-bs-target="#hm-micro-credit-tab-pane" type="button" role="tab" aria-controls="hm-micro-credit-tab-pane" aria-selected="true"><i className="fas fa-check"></i><p>Micro Credit</p></a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a href="#hm-P2P-Credit-tab" className="nav-link" id="hm-P2P-Credit-tab" data-bs-toggle="tab" data-bs-target="#hm-P2P-Credit-tab-pane" type="button" role="tab" aria-controls="hm-P2P-Credit-tab-pane" aria-selected="false"><i className="fas fa-check"></i><p>P2P Credit</p></a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a href="#hm-personal-credit-tab" className="nav-link" id="hm-personal-credit-tab" data-bs-toggle="tab" data-bs-target="#hm-personal-credit-tab-pane" type="button" role="tab" aria-controls="hm-personal-credit-tab-pane" aria-selected="false"><i className="fas fa-check"></i><p>Personal Credit</p></a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a href="#hm-gold-credit-tab" className="nav-link" id="hm-gold-credit-tab" data-bs-toggle="tab" data-bs-target="#hm-gold-credit-tab-pane" type="button" role="tab" aria-controls="hm-gold-credit-tab-pane" aria-selected="false"><i className="fas fa-check"></i><p>Gold Credit</p></a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a href="#hm-vehicle-credit-tab" className="nav-link" id="hm-vehicle-credit-tab" data-bs-toggle="tab" data-bs-target="#hm-vehicle-credit-tab-pane" type="button" role="tab" aria-controls="hm-vehicle-credit-tab-pane" aria-selected="false"><i className="fas fa-check"></i><p>Vehicle Credit</p></a>
                          </li>
                        </ul>
                      </div>


                      <div className="col-md-9 order-md-2 order-1">
                        <div className="tab-content" id="myTabContent">
                          <div className="tab-pane fade show active" id="hm-micro-credit-tab-pane" role="tabpanel" aria-labelledby="hm-micro-credit-tab" tabIndex="0">

                            {/* tab conten start */}
                            <div className="finan-health-tab-conten">
                              <div className="row">
                                <div className="col-lg-4 pt-md-5 pt-lg-0 d-flex flex-column justify-content-center">
                                  <h4 data-aos="fade-up">Managing yore money has never been easier!</h4>
                                  <div data-aos="fade-up" data-aos-delay="800">
                                    <a href="/#" className="lrm-mor-btn">Learn more</a>
                                  </div>
                                </div>
                                <div className="col-lg-6 hero-img">
                                  <video src={wellBeing} loop autoPlay muted />
                                  {/* <img src={animi} className="img-fluid animated" alt=""/> */}
                                </div>
                              </div>
                            </div>
                            {/* tab conten End */}

                          </div>

                          <div className="tab-pane fade" id="hm-personal-credit-tab-pane" role="tabpanel" aria-labelledby="hm-personal-credit-tab" tabIndex="0">
                            {/* tab conten start */}
                            <div className="finan-health-tab-conten">
                              <div className="row">
                                <div className="col-lg-4 pt-md-5 pt-lg-0 d-flex flex-column justify-content-center">
                                  <h4 data-aos="fade-up">Managing yore money has never been easier!</h4>
                                  <div data-aos="fade-up" data-aos-delay="800">
                                    <a href="/#" className="lrm-mor-btn">Learn more</a>
                                  </div>
                                </div>
                                <div className="col-lg-6 hero-img">
                                  <video src={security} loop autoPlay muted />
                                  {/* <img src={animi} className="img-fluid animated" alt=""/> */}
                                </div>
                              </div>
                            </div>
                            {/* tab conten End */}
                          </div>
                          <div className="tab-pane fade" id="hm-P2P-Credit-tab-pane" role="tabpanel" aria-labelledby="hm-P2P-Credit-tab" tabIndex="0">
                            {/* tab conten start */}
                            <div className="finan-health-tab-conten" >
                              <div className="row">
                                <div className="col-lg-4 pt-md-5 pt-lg-0 d-flex flex-column justify-content-center">
                                  <h4 data-aos="fade-up">Managing yore money has never been easier!</h4>
                                  <div data-aos="fade-up" data-aos-delay="800">
                                    <a href="/#" className="lrm-mor-btn">Learn more</a>
                                  </div>
                                </div>
                                <div className="col-lg-6 hero-img">
                                  <video src={stability} loop autoPlay muted />
                                  {/* <img src={animi} className="img-fluid animated" alt=""/> */}
                                </div>
                              </div>
                            </div>
                            {/* tab conten End */}
                          </div>

                          <div className="tab-pane fade" id="hm-gold-credit-tab-pane" role="tabpanel" aria-labelledby="hm-gold-credit-tab" tabIndex="0">
                            {/* tab conten start */}
                            <div className="finan-health-tab-conten" >
                              <div className="row">
                                <div className="col-lg-4 pt-md-5 pt-lg-0 d-flex flex-column justify-content-center">
                                  <h4 data-aos="fade-up">Managing yore money has never been easier!</h4>
                                  <div data-aos="fade-up" data-aos-delay="800">
                                    <a href="/#" className="lrm-mor-btn">Learn more</a>
                                  </div>
                                </div>
                                <div className="col-lg-6 hero-img">
                                  <video src={security} loop autoPlay muted />
                                  {/* <img src={animi} className="img-fluid animated" alt=""/> */}
                                </div>
                              </div>
                            </div>
                            {/* tab conten End */}
                          </div>
                          <div className="tab-pane fade" id="hm-vehicle-credit-tab-pane" role="tabpanel" aria-labelledby="hm-vehicle-credit-tab" tabIndex="0">
                            {/* tab conten start */}
                            <div className="finan-health-tab-conten">
                              <div className="row">
                                <div className="col-lg-4 pt-md-5 pt-lg-0 d-flex flex-column justify-content-center">
                                  <h4 data-aos="fade-up">Managing yore money has never been easier!</h4>
                                  <div data-aos="fade-up" data-aos-delay="800">
                                    <a href="/#" className="lrm-mor-btn">Learn more</a>
                                  </div>
                                </div>
                                <div className="col-lg-6 hero-img" >
                                  <video src={wellBeing} loop autoPlay muted />
                                  {/* <img src={animi} className="img-fluid animated" alt=""/> */}
                                </div>
                              </div>
                            </div>
                            {/* tab conten End */}
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>

                </div>
                {/* Credit tab conten  end*/}
              </div>

            </div>

          </div>
        </div>
        <div className="bottom-curv"><span></span></div>

      </div>
      {/* End Section - 02 */}




      {/* Start Section - 03 */}
      <div className="section-03">
        <div className="container">

          {/* <div className="title">
              <h3>Gamified & incentives financial education system</h3>
            </div> */}

          {/* <div className="chart-animi-wrap">
              <div className="chrt-left-box">
                <img src={pie2} className="img-fluid animated" alt=""/>
              </div>
              <div className="chrt-right-box">
                <img src={pie1} className="img-fluid animated" alt=""/>
                <img src={pie3} className="img-fluid animated" alt=""/>
              </div>
            </div> */}

          <div className="conten-box">
            <div className="row">
              <div className="col-lg-9 col-md-10 m-auto text-center">
                <h3 className="titl-h3" data-aos="fade-up" data-aos-delay="400">Gamified & Incentivized financial education system</h3>
                <div className="gemi-animi">
                  <video src={gemiFi} loop autoPlay muted />
                </div>
                <p className="txt-35 fw-500 lh-sm yor-tx-grey mb-4">Turn your financial education journey<br /> into a game worth playing</p>
                <div data-aos="fade-up" data-aos-delay="800">
                  <NavLink to="/gamified-education-platform" className="btn-default">Learn more</NavLink>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* End Section - 03 */}



      {/* Start Section - 03 */}
      <div className="section-03">
        <div className="container">

          {/* <div className="title">
              <h3>Gamified & incentives financial education system</h3>
            </div> */}

          {/* <div className="chart-animi-wrap">
              <div className="score-box">
                <img src={score1} className="img-fluid animated" alt=""/>
              </div>
            </div> */}

          <div className="conten-box">
            <div className="row">

              <div className="col-lg-9 col-md-10 m-auto text-center">
                <h3 className="titl-h3" data-aos="fade-up" data-aos-delay="400">Financial health<br /> analysis & scoring system</h3>
                <div className="helth-animi">
                  <video src={helTh} loop autoPlay muted />
                </div>
                <p className="txt-35 fw-500 lh-sm yor-tx-grey mb-4">Find it out with <span className="blue-tx">yore</span> financial<br />health health analysis and scoring system</p>
                <div data-aos="fade-up" data-aos-delay="800">
                  <NavLink to="/financial-health" className="btn-default">Learn more</NavLink>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      {/* End Section - 03 */}



      {/* Start Section - 04 */}
      <div className="section-04">
        <div className="container">
          <div className="chat-area">

            <div className="row">
              <div className="col-lg-8 m-auto text-center">
                <div className="title" data-aos="fade-left" data-aos-delay="200">
                  <h3>Say hello to YORO, your new ally in finance</h3>
                  <h5><span className="dark-blue-tx">Yore</span> A.I powered personal finance manager, but with a sense of humor</h5>
                </div>
              </div>
            </div>

            <div className="conten-box">
              <div className="row">
                <div className="col-lg-12 m-md-4 text-center yoyo-animi" data-aos="fade-left" data-aos-delay="200">
                  <img src={yoro} className="img-fluid animated" alt="" />
                </div>

                <div className="col-lg-6 offset-lg-3">
                  <div className="lang-tab">
                    <ul>
                      <li><a className="activ" href="/#">English</a></li>
                      <li><a href="/#">हिन्दी</a></li>
                      <li><a href="/#">বাংলা</a></li>
                      <li><a href="/#">தமிழ்</a></li>
                      {/* <li><a href="/#">+8</a></li> */}
                    </ul>
                  </div>
                </div>

                <div className="col-lg-8 m-auto">
                  {/* <div className="w-50"> */}
                  <div id="search-bar">
                    <input id="search-input" placeholder="Ask questions" />
                    <i id="mic-icon" className="fas fa-microphone"></i>
                    <i id="snd-icon" className="far fa-paper-plane"></i>
                  </div>
                  {/* </div> */}
                </div>

              </div>
            </div>


          </div>
        </div>
      </div>
      {/* End Section - 04 */}



      {/* Start Section - 05 */}
      {/* <div className="section-05"> */}


      {/* <YoreRewardsCard /> */}
      <YoreRewardsCard />





      {/* <div className="conten-box">
            <div className="row g-0">

              <div className="col-lg-10 offset-lg-2" data-aos="fade-left" data-aos-delay="200">
                <div className="rwd-box">
                  <div className="rd-titl">
                      <h6>Yore Rewards</h6>
                    </div>
                  <div className="d-lg-flex align-items-center">                   

                    <div className="rd-img">
                      <img src={Gold} className="img-fluid animated bobo" alt=""/>
                    </div>
                    <div className="rd-cont">
                      <h4>Think of <span className="blue-tx">yore</span> rewards as your own personal treasure chest</h4>
                      <p>Full of prizes and surprises</p>
                      <div data-aos="fade-up" data-aos-delay="800">
                        <NavLink  to="/rewards" className="yor-btn yor-bg-blue yor-tx-white mt-3 px-5 py-3 d-inline-block">Learn More</NavLink>
                      </div>
                    </div>                    
                  </div>
                  
                </div> 
              </div>

            </div>
          </div> */}
      {/* </div> */}
      {/* End Section - 05 */}




      {/* Start Section - 06 */}
      {/* <div className="section-06 light-bg">
          <div className="container">

            <div className="conten-box">
              <div className="row">
                <div className="col-lg-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h4 data-aos="fade-up">Now learn Finance through YORE’s Finreels, Fincourse and Finquiz in the most rewarding way!</h4>
                  <p data-aos="fade-up" data-aos-delay="400">Yore makes learning finance interesting through fun & informative financial games and rewards for your performance and efforts generously. </p>
                  <div data-aos="fade-up" data-aos-delay="800">
                    <a href="/#" className="btn-default scrollto">Learn more</a>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
                  <img src={sec6} className="img-fluid animated" alt=""/>                      
                </div>
              </div>
            </div>            

          </div>
        </div> */}
      {/* End Section - 06 */}


      {/* Start Section - 07 */}
      {/* <div className="section-07 light-bg">
          <div className="container">
            <div className="conten-box">
              <div className="row">
                <div className="col-lg-7 d-flex flex-column justify-content-center">
                  <div className="cht-box">
                    We have Zero threshold for leaks & breaches coz security is the Priority.
                  </div>
                </div>
                <div className="col-lg-5" data-aos="fade-left" data-aos-delay="200">
                  <img src={sec7} className="img-fluid animated" alt=""/>                      
                </div>
              </div>
            </div>            

          </div>
        </div> */}
      {/* End Section - 07 */}


      {/* Start Section - 08 */}
      {/* <div className="section-08 dark-bg">
          <div className="container">

            <div className="title"><h3>A dynamic AI & ML powered <span>Financial Health Analysis & Scoring System. </span></h3></div>

            <div className="conten-box">
              <div className="row">
                <div className="col-lg-7 d-flex flex-column justify-content-center">
                  <div className="cht-box">
                    We have Zero threshold for leaks & breaches coz security is the Priority.
                  </div>
                </div>
                <div className="col-lg-5" data-aos="fade-left" data-aos-delay="200">
                  <img src={sec7} className="img-fluid animated" alt=""/>                      
                </div>
              </div>
            </div>            

          </div>
        </div> */}
      {/* End Section - 08 */}



      {/* Start Section - 09 */}
      {/* <div className="section-09 light-bg">
          <div className="container">

            <div className="title text-center"><h3>Electricity bills</h3></div>

            <div className="conten-box">
              <div className="row g-0">

                <div className="col-lg-12" data-aos="fade-left" data-aos-delay="200">
                  <div className="pay-box">
                    <p>YORE Reward Token (YRT) is a cryptographic token deployed on YORE Distributed Meta-Database & Ledger Technology (DMLT) platform.</p>
                    <img src={sec9} className="img-fluid animated pay-img" alt=""/>
                  </div>                  
                </div>

              </div>
            </div>

          </div>
        </div> */}
      {/* End Section - 09 */}



      <Footer />
    </div >
  );
}

export function Model(props) {
  // console.log(`props==>`, props);
  const group = useRef()
  const scroll = useScroll()

  var model;

  const { nodes, materials, animations } = useGLTF(fingltf)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // actions.Pig_bodyAction.play();
    // <mesh onClick={(e) => actions.Pig_bodyAction.play()} />
    actions.coin_rupee.play();
    actions.owl_at.play();
    actions.owl_ation.play();
    actions.Pig_bodyAction.play()
    // actions.Pig_bodyAction.reset().play().paused = true
    // actions.Pig_bodyAction.time = actions.Pig_bodyAction.getClip().duration * scroll
  }, []);

  // useEffect(() => void (actions.Pig_bodyAction.reset().play().paused = true), [])
  // useEffect(() => void (actions.coin_rupee.reset().play().paused = true), [])
  // useEffect(() => void (actions.owl_at.reset().play().paused = true), [])
  // useEffect(() => void (actions.owl_ation.reset().play().paused = true), [])

  // useFrame(() => (actions.Pig_bodyAction.time = actions.Pig_bodyAction.getClip().duration * scroll.offset))
  // useFrame(() => (actions.coin_rupee.time = actions.coin_rupee.getClip().duration * scroll.offset))
  // useFrame(() => (actions.owl_at.time = actions.owl_at.getClip().duration * scroll.offset))
  // useFrame(() => (actions.owl_ation.time = actions.owl_ation.getClip().duration * scroll.offset))

  // const scroll = useScroll()
  // useEffect(() => void (actions.coin_rupee.play().paused = true), [])
  // useEffect(() => void (actions.flperr.play().paused = true), [])
  // useFrame(() => {
  //   (actions.Pig_bodyAction.time = actions.Pig_bodyAction.getClip.duration * scroll.offset)
  // });

  return (
    <group ref={group} {...props} dispose={null} onClick={(e) => {
      e.stopPropagation()
    }}>
      {/* <group name="Scene"> */}
      <mesh name="Pig_body" geometry={nodes.Pig_body.geometry} material={materials['Financial Freedom ( Section 1 ) V2']} position={[0.117, 0.473, 0.168]} rotation={[-0.076, -1.568, 0]} scale={0.75}>
        <mesh name="coin-rupee_Financial_Freedom_(_Section_1_)_V2" geometry={nodes['coin-rupee_Financial_Freedom_(_Section_1_)_V2'].geometry} material={materials['Financial Freedom ( Section 1 ) V2']} position={[-0.21, 3.159, 0.001]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.618} />
        <mesh name="Wings_L" geometry={nodes.Wings_L.geometry} material={materials['Financial Freedom ( Section 1 ) V2']} position={[-0.221, 1.762, -1.053]} rotation={[-1.884, 0.38, 2.156]} scale={-0.84} />
        <mesh name="Wings_R" geometry={nodes.Wings_R.geometry} material={materials['Financial Freedom ( Section 1 ) V2']} position={[-0.227, 1.762, 1.052]} rotation={[1.886, -0.378, -0.98]} scale={0.84} />
      </mesh>
      <mesh name="Base_2" geometry={nodes.Base_2.geometry} material={materials['Financial Freedom ( Section 1 ) V2']} position={[0.114, -0.349, 0.166]} scale={0.679} />
      <mesh name="Base_1" geometry={nodes.Base_1.geometry} material={materials['Financial Freedom ( Section 1 ) V2']} position={[0.114, -0.59, 0.166]} scale={0.679} />
      {/* </group> */}
    </group>
  )
}

export default Home;


