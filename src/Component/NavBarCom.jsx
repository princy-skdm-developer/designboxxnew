// import React from "react";
import "../Css/Navbar.css";
import logo from "../Images/Designboxx_logo_CDR_File_V15-removebg-preview-removebg-preview (1).png";
import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
// import ServDesc from "./ServDesc";
import { HashLink } from 'react-router-hash-link';
import { Nav, Navbar, Container } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import $ from "jquery";
import { useState, useEffect, React } from "react";
import CourseDescFashion from "./CourseDescFashion";
import CourseDescInterior from "./CourseDescInterior";
const NavBarCom = () => {
  const [color, setColor] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const handleNavbarCollapse = () => {
    setExpanded(false);
  };



  return (
    <div>

<header className="topnav1 fixed-top1">
  <div className="top-navbar">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 d-lg-block d-none">
          <div className="left">
            <a href="tel:919321362277">
              <i className="fa fa-whatsapp" />
              &nbsp; +91 9321362277{" "}
            </a>
            &nbsp; &nbsp;
            <a href="mailto:info@frameboxx.in">
              <i className="fa fa-envelope" />
              &nbsp; info@designboxx.in
            </a>
          </div>
        </div>
        <div className="col-sm-6  d-none d-sm-block">
          <div className="right ">
           
            <span className="social">
              <a
                className="fb"
                target="_blank"
                href="https://www.facebook.com/"
                title="Follow us on Facebook"
              >
                <i className="fa fa-facebook" />
              </a>
              <a
                className="tw"
                target="_blank"
                href="https://twitter.com/frameboxx"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
              </a>
              <a
                className="ty"
                target="_blank"
                href="http://www.youtube.com/"
                title="Follow us on Youtube"
              >
                <i className="fa fa-youtube" />
              </a>
              <a
                className="li"
                target="_blank"
                href="https://www.linkedin.com/"
                title="Follow us on Linkedin"
              >
                <i className="fa fa-linkedin" />
              </a>
              <a
                className="insta"
                target="_blank"
                href="https://www.instagram.com/"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
              </a>
             
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="nav-bar-component">
      <div className="NavSection">
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          // className={color ? "NavBar NavBar-bg" : "NavBar"}
          expanded={expanded}
        >
          <Container>
            <Navbar.Brand href="#home">
              <Link to="/" onClick={handleNavbarCollapse}>
                <div className="NavLogo">
                  <img src={logo} alt="" />
                </div>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => setExpanded(!expanded)}
            />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-center"
            >
              <Nav>
                <Link to="/" onClick={handleNavbarCollapse} className="nav-link"> 
                  Home
                </Link>
                <Link to="/About" onClick={handleNavbarCollapse} className="nav-link">
                  About Us
                </Link>
               
                {/* <Link to="/Gallery" onClick={handleNavbarCollapse}>
                  Gallery
                </Link> */}
                <button className="dropdownShow nav-link" id=""> Courses                                      

                                      <div className="dorpdown">
                                      <div className="dropdown_list">
           
           
                                      {CourseDescFashion.map((ele) => {
                            const { ServiceName, Slugs } = ele;
                            return (
                              <>
                                <Nav.Link href={`${Slugs}`}>
                                  <Link  to={`${Slugs}`}  className="dropdown-item" onClick={handleNavbarCollapse}>{ServiceName}</Link>
                                </Nav.Link>
                              </>
                            );
                          })}
                           {CourseDescInterior.map((ele) => {
                            const { ServiceName, Slugs } = ele;
                            return (
                              <>
                                <Nav.Link href={`${Slugs}`}>
                                  <Link  to={`${Slugs}`}  className="dropdown-item" onClick={handleNavbarCollapse}>{ServiceName}</Link>
                                </Nav.Link>
                              </>
                            );
                          })}
              
               
                <ul className="dropdown-menu">
                
                  {/* <li>
                    <Link to="/Courses"
                     
                     
                    >
                      {" "}
                      B. Sc. in Fashion Designing- 36 months
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      className="dropdown-item"
                      to="/Courses2"
                    >
                      {" "}
                       
                      B. Sc. in Interior Designing- 36 Months
                    </Link>
                  </li> */}
                 
                  
                </ul>
                
              </div>
              </div>
              </button>
            
            
              <Link to="/Studentswork" onClick={handleNavbarCollapse} className="nav-link">
                  Life At Designboxx
                </Link>
         
                <Link to="/Contact" onClick={handleNavbarCollapse} className="nav-link">
                  Contact Us
                </Link>
                
              </Nav>
             
            </Navbar.Collapse>
            <div className="d-lg-block d-none">
            <HashLink to="/Contact#connect" className="btn btn-light scrollto2">
              Apply Now
            </HashLink>
            </div>
          </Container>
        </Navbar>
      </div>
    </div>

 
</header>









      {/* --------------------------get touch---------------------------- */}
      {/* <header className="mainmenu-bottom-area d-lg-block d-none">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="header-contact-info">
                <ul>
                  <li>
                    <div className="iocn-holder">
                      <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="text-holder">
                      <h3>Flat no-8, Sukh Shanti, Juhu- Mumbai</h3>
                    </div>
                  </li>
                  <li>
                    <div className="iocn-holder">
                      <i className="fa fa-envelope"></i>
                    </div>
                    <div className="text-holder">
                      <h3>abc@gmail.com</h3>
                    </div>
                  </li>
                  <li>
                    <div className="iocn-holder">
                      <i class="fa fa-clock-o"></i>
                    </div>
                    <div className="text-holder">
                      <h3>Mon-Sats: 09.30am to 8.00pm</h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header> */}



      {/* <div className="nav-bar-component d-lg-none d-block">
        <section className="NavSection">
          <div className="container">
            <Navbar collapseOnSelect expand="lg" variant="dark" >
              <Container>
               
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-start">
                  <Nav>
                    <Nav.Link href="#home"> <Link to="/">Home</Link> </Nav.Link>
                    <Nav.Link href="#Services">  <Link to="/About">About us</Link> </Nav.Link>
                 
                   
                    <Nav.Link href="#Courses"> <Link to="/Courses">Courses</Link> </Nav.Link>
                    <Nav.Link href="#Contact us"> <Link to="/Contact">Contact Us</Link> </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </section>
      </div> */}


      {/* <section className="mainmenu-area stricky d-lg-block d-md-none d-none">
        <div className="container">
          <div className="row d-flex  align-items-center">
            <div className="col-lg-4 col-md-6 col-6">
             
            </div>

            <div className="col-lg-8 col-md-6 col-6">
              <div className="">
              
                <nav className="main-menu navbar navbar-expand-lg">
                  <div className="navbar-header">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNav"
                      aria-controls="navbarNav"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  </div>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navigation clearfix">
                      <li className="current">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="/About">About us</Link>
                      </li>
                     

                     
                      <li className="dropdown">
                        <Link to="/Courses">Courses</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="/Gallery">Gallery</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="/Contact">Contact Us</Link>
                      </li>
                
                    </ul>
                  </div>
                </nav>
              
              </div>
        
            </div>
          </div>
        </div>
      </section> */}

{/* //       <div className="programButton">
//     <a className="programButtonClick"  onClick={handleShow}>Book Now</a>
// </div> */}
      {/* <Modal
        show={show}
        id="partner"
        backdrop="static"
        keyboard={false}
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        onHide={handleClose}

      >

      <Modal.Body>

          <div className="partnerProgramForm">
        
            <div className="formTitleSection">
              <div className="closeProgram closeProgram1" onClick={handleClose}>
                {" "}
                <i className="fa fa-times" />{" "}
              </div>
              <div className="formTitle">
                <h2>Booking form</h2>
              </div>
            </div>
            <form className="appoinment-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="field-input">
                        <input
                          type="text"
                          name="form_name"
                          defaultValue=""
                          placeholder="Name"
                          required=""
                          id="custName"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="field-input">

                        
                        <input
                          type="text"
                          name="form_email"
                          defaultValue=""
                          placeholder="Email"
                          required=""
                          id="custEmail"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="field-input">
                        <input
                          type="text"
                          name="form_phnnumber"
                          defaultValue=""
                          placeholder="Ph Num"
                          required=""
                          id="custPhone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                  <div className="single-input-field">
                      <textarea
                        placeholder="Write Your Message"
                        name="message"
                        spellCheck="false"
                        className="form-control"
                        defaultValue={""}
                        id="custMessage"
                        required
                      />
                    </div>
                  </div>
                 
                 
                  <div className="row">
                    <div className="col-md-12">
                      <button className="thm-btn bg-1" type="submit" onClick={bookingForm}>
                        Make an Appointment
                      </button>
                    </div>
                  </div>
                </form>
          </div>
        </Modal.Body>
        </Modal> */}
    </div>
   
  );
};

export default NavBarCom;
