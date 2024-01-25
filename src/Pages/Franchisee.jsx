import React from "react";
import MyBackgroundImage from "../Images/aboutBanner.jpg";
import appli from "../Images/pencil-case.png";
import know from "../Images/book.png";
import skil from "../Images/self-development.png";
import Footer from "../Component/Footer";
// import aboutImg from "../Images/16.jpg";
// import Franch1 from "../Images/motion.gif";
// import adv from "../Images/frameadv.jpg";
// import anim from "../Images/frameanim.jpg";
import "../Css/Franchisee.css";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import { Autoplay, Navigation } from "swiper";
import skill from "../Images/brands/Skill-India.jpg";
// import mesc from "../Images/brands/1-MESC.jpg";
// import nsdc from "../Images/brands/2-NSDC.jpg";
// import mecat from "../Images/brands/MECAT.jpg";
// import ycmou from "../Images/brands/3-YCMOU.jpg";
// import feature from "../Images/f3.gif";
// import prof from "../Images/original.jpg";
const Franchisee = () => {
  return (
    <div>
 <div
        className="breadcrumb-area shadow dark text-center bg-fixed text-light"
        style={{ backgroundImage: `url(${MyBackgroundImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Academics</h1>
              {/* <ul className="breadcrumb">
          <li>
            <a href="#">
              <i className="fa fa-home" /> Home
            </a>
          </li>
          <li>
            <a href="#">Page</a>
          </li>
          <li className="active">About</li>
        </ul> */}
            </div>
          </div>
        </div>
      </div>


      <section className="page-content">
          <div className="container">
            <div className="row">
              <div className="col">
                  <div className="content">
                  <h2>Pedagogy</h2>
                          <p>
                            Frameboxx 2.0 endeavours to become the unique and
                            most prestigious training provider in the AVGC
                            (Animation, VFX, Gaming, Comics) sector with world
                            class education delivery mechanism in the Media
                            &amp; Entertainment Industry. In order to give the
                            hands on experience on live projects, Frameboxx 2.0
                            adds the brand value with studio partnership with
                            Contiloe Pictures, Lakshya and CrazyLabs Studio.
                          </p>
                          <p>
                            We focus on teaching techniques and creativity, not
                            just the software tools. How would an artist
                            approach a software is more important rather
                            somebody teaching how to use the software. We blend
                            this very artistic approach in our teaching
                            methodology to give the best knowledge to the
                            student to make him / her industry ready artist. We
                            follow this method of ‘Techno Artist Training’ where
                            we train novice students with technical knowledge of
                            software and aesthetic knowledge of artistic sense.
                          </p>
                         
                        </div>
                {/* <img src={aboutImg} /> */}
              </div>
              <div className="col ">
                
                <div className="card">
                  <div className="card-body">
                    <span id="ctl00_pageContent_ltrMsg" />
                    <div id="ctl00_pageContent_frm">
                      <div
                        className="form-group row"
                        data-sr-id={2}
                        style={{
                          visibility: "visible",
                          WebkitTransform: "translateY(0) scale(1)",
                          opacity: 1,
                          transform: "translateY(0) scale(1)",
                          WebkitTransition:
                            "-webkit-transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s",
                          transition:
                            "transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s",
                        }}
                      >
                        <label className="col-sm-3 col-form-label">Name</label>
                        <div className="col-sm-9">
                          <input
                            name="ctl00$pageContent$txtName"
                            type="text"
                            id="ctl00_pageContent_txtName"
                            className="form-control"
                            required=""
                          />
                        </div>
                      </div>
                      <div
                        className="form-group row"
                        data-sr-id={3}
                        style={{
                          visibility: "visible",
                          WebkitTransform: "translateY(0) scale(1)",
                          opacity: 1,
                          transform: "translateY(0) scale(1)",
                          WebkitTransition:
                            "-webkit-transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s",
                          transition:
                            "transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s",
                        }}
                      >
                        <label className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9">
                          <input
                            name="ctl00$pageContent$txtEmail"
                            type="text"
                            id="ctl00_pageContent_txtEmail"
                            className="form-control"
                            required=""
                          />
                        </div>
                      </div>
                      <div
                        className="form-group row"
                        data-sr-id={4}
                        style={{
                          visibility: "visible",
                          WebkitTransform: "translateY(0) scale(1)",
                          opacity: 1,
                          transform: "translateY(0) scale(1)",
                          WebkitTransition:
                            "-webkit-transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s",
                          transition:
                            "transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s",
                        }}
                      >
                        <label className="col-sm-3 col-form-label">
                          Mobile
                        </label>
                        <div className="col-sm-9">
                          <input
                            name="ctl00$pageContent$txtContact"
                            type="text"
                            id="ctl00_pageContent_txtContact"
                            className="form-control filter-number"
                            required=""
                          />
                        </div>
                      </div>
                      <div
                        className="form-group row"
                        data-sr-id={5}
                        style={{
                          visibility: "visible",
                          WebkitTransform: "translateY(0) scale(1)",
                          opacity: 1,
                          transform: "translateY(0) scale(1)",
                          WebkitTransition:
                            "-webkit-transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s",
                          transition:
                            "transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s",
                        }}
                      >
                        <label className="col-sm-3 col-form-label">
                          Location
                        </label>
                        <div className="col-sm-9">
                          <input
                            name="ctl00$pageContent$txtLocation"
                            type="text"
                            id="ctl00_pageContent_txtLocation"
                            className="form-control filter-number"
                            required=""
                          />
                        </div>
                      </div>
                      <div
                        className="form-group row"
                        data-sr-id={6}
                        style={{
                          visibility: "visible",
                          WebkitTransform: "translateY(0) scale(1)",
                          opacity: 1,
                          transform: "translateY(0) scale(1)",
                          WebkitTransition:
                            "-webkit-transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s",
                          transition:
                            "transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s",
                        }}
                      >
                        <label className="col-sm-3 col-form-label" />
                        <div className="col-sm-9">
                          <input
                            type="submit"
                            name="ctl00$pageContent$btnSubmit"
                            defaultValue="Submit"
                            id="ctl00_pageContent_btnSubmit"
                            className="btn btn-main"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

<div className="whychoose">
  <div className="row">
    <div className="col-lg-6" />
    <div className="col-lg-6">
      <div className="saver">
        <div>
          <div className="typeChoose">
            <div className="bc">
              <img
                src={appli}
                width="100%"
                height="100%"
              />
            </div>
            <div className="hc">
              <h3>Application</h3>
                   <ul>
                    <li>Case studies</li>
                    <li>Portfolio Development</li>
                    <li>Industry Project</li>
                    <li>In House Events</li>
                    <li>Community Service</li>
                   </ul>
            </div>
          </div>
        </div>
        <div>
         
        </div>
        <div>
          <div className="typeChoose">
            <div className="bc">
              <img
                src={know}
                width="100%"
                height="100%"
              />
            </div>
            <div className="hc">
            <h3>Knowledge</h3>
                   <ul>
                    <li>Classroom sessions</li>
                    <li>Master Class</li>
                    <li>Workshops</li>
                    <li>Assignments and Projects</li>
                   </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="typeChoose">
            <div className="bc">
              <img
                src={skil}
                width="100%"
                height="100%"
              />
            </div>
            <div className="hc">
              <h3>Skills</h3>
              <ul>
                <li>Digital learning</li>
                <li>Professional Competencies</li>
                <li>Enterprenuial Skills</li>
                <li>Language Profficiency</li>
             
              </ul>
              {/* <p>
                Our websites not only offer stunning looks and unmatched
                technology; they also outperform your competitors on all major
                search engines. From e-commerce to membership management,
                portfolio and interactive elements, we offer everything you may
                need in website design.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


     

      <>
        {/* Hello world */}

        {/* <div className="page-content"> */}
      
      
        {/* </div> */}
        <Footer/>
      </>
    </div>
  );
};

export default Franchisee;
