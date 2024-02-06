import {React } from "react";

// import jquery from 'jquery';
// window.$ = window.jQuery=jquery;

import yoro from '../../assets/images/yoro.svg'

  

function YoreHelpDesk() {

    return (
      <div className="help-desk-section">
        {/* Start Section - 04 */}
        <div className="section-04">
          <div className="container">
            <div className="chat-area">

            <div className="row">                
              <div className="col-lg-8 m-auto text-center">
                <div className="title" data-aos="fade-left" data-aos-delay="200">
                  <h3>Say hello to YORO, your new ally in finance</h3>
                  <h5><span className="dark-blue-tx fw-bold">Yore</span> A.I powered personal finance manager, but with a sense of humor</h5>
                </div>
              </div>
            </div>

              <div className="conten-box">
                <div className="row">                
                  <div className="col-lg-12 m-md-4 text-center yoyo-animi" data-aos="fade-left" data-aos-delay="200">
                    <img src={yoro} className="img-fluid animated" alt=""/>                      
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
      </div>
    );
  }
  
  export default YoreHelpDesk;



