import React, { useState } from "react";
import "../Css/Contact.css";
import MyBackgroundImage from "../Images/contactBanner.jpg";
import Footer from "../Component/Footer";
import $ from "jquery";
import {Link} from "react-router-dom";

const Errorpage = () => {



  // ============ Mail function ==========
 
  // ============== Mail Print ======
 
  return (
    <div>
           
{/* --------------------------------------------Meta tags---------------- */}
  
      <section
        className="breadcrumb-area shadow dark text-center  text-light"
        style={{ backgroundImage: `url(${MyBackgroundImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1> Page Not Found</h1>
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
      </section>

      <section className="contact-info-area default-padding">
        <div className="container">
          <div className="row">
            {/* Start Contact Info */}
            {/* <div className="contact-info"> */}
           
            
          </div>
          {/* </div> */}
          {/* End Contact Info */}
          <div className="seperator col-md-12">
            <span className="border" />
          </div>
          {/* Start Maps & Contact Form */}
          {/* <div className="maps-form"> */}
          <h1>Page Not Found</h1>
      <h2>Back to <Link to="/"> Home</Link></h2>

          {/* </div> */}
          {/* End Maps & Contact Form */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Errorpage
