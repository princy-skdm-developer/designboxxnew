import React from 'react'
import  '../Css/Footer.css';
import logo from "../Images/Designboxx_logo_CDR_File_V15-removebg-preview-removebg-preview (1).png";
const Footer = () => {
  return (
    <div>
        <footer className=" default-padding-top text-light">
  <div className="container">
    <div className="row">
      {/* <div className="f-items"> */}
        <div className="col-md-4 item">
          <div className="f-item">
            <img src={logo} alt="Logo" />
            <p>
            DesignBoxx, is a cutting-edge educational institution that paves the way for a dynamic future in Fashion Designing and Interior Designing. 
            </p>
            {/* <p className="text-italic">
              Please write your email and get our amazing updates, news and
              support
            </p> */}
            {/* <div className="subscribe">
              <form action="#">
                <div className="input-group stylish-input-group">
                  <input
                    type="email"
                    placeholder="Enter your e-mail here"
                    className="form-control"
                    name="email"
                  />
                  <button type="submit">
                    <i className="fa fa-paper-plane" />
                  </button>
                </div>
              </form>
            </div> */}
          </div>
        </div>
        <div className="col-md-2 col-6">
          <div className="f-item link">
            <h4>Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="/About">About us</a>
              </li>
              <li>
                <a href="/Courses">Courses</a>
              </li>
             
              {/* <li>
                <a href="#">Teachers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-6 ">
          <div className="f-item link">
            <h4>Support</h4>
            <ul>
              <li>

             

                <a href="#">Whydesignboxx</a>
              </li>
              <li>
                <a href="/Studentswork">Students Work</a>
              </li>
              <li>
                <a href="/Contact">Contact Us</a>
              </li>
              {/* <li>
                <a href="#">LearnPress</a>
              </li>
              <li>
                <a href="#">Feedback</a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="col-md-4">
        <h4 style={{color:"crimson", fontWeight:"600"}}>Address</h4>
          <div className="f-item address">
            
            <ul>
              <li>
                <i className="fa fa-envelope" />
                <p>
                  {/* Email{" "} */}
                  <span>
                    <a href="mailto:support@validtheme.com">
                    Info@designboxx.in
                    </a>
                  </span>
                </p>
              </li>
              <li>
                <i className="fa fa-map" />
                <p>
                 


                1st floor,Suchita & Orange Business Suite,Hirachand Desai Municipal Market, Ghatkopar West Mumbai -400086<br/>

                </p>
              </li>
            </ul>
         
          </div>
        </div>
      {/* </div> */}
    </div>
  </div>
  {/* Start Footer Bottom */}
  <div className="footer-bottom">
    <div className="container">
      <div className="row">
        {/* <div className="col-md-12"> */}
          <div className="col-md-6">
            <p>
              © Copyright 2019. All Rights Reserved by{" "}
              <a href="#">Designboxx</a>
            </p>
          </div>
          <div className="col-md-6 text-end link">
          <p>
              Developed By &nbsp;
              <a href="#">Shree Krishna Digital Marketing</a>
            </p>
          </div>
        {/* </div> */}
      </div>
    </div>
  </div>
  {/* End Footer Bottom */}
  
</footer>

    </div>
  )
}

export default Footer