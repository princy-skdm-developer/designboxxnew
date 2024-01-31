// import React from "react";
import "../Css/Navbar.css";
import logo from "../Images/Designboxx_logo_CDR_File_V15-removebg-preview-removebg-preview (1).png";
import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
// import ServDesc from "./ServDesc";
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

  // const bookingForm = () => {
  //   var custName;
  //   var custEmail;
  //   var custPhone;
  //   var custMessage;

  //   if ($("#custName").val() !== "") {
  //     custName = $("#custName").val();
  //   } else {
  //   }
  //   if ($("#custPhone").val() !== "") {
  //     custPhone = $("#custPhone").val();
  //   } else {
  //   }

  //   if ($("#custEmail").val() !== "") {
  //     custEmail = $("#custEmail").val();
  //   } else {
  //   }

  //   if ($("#custMessage").val() !== "") {
  //     custMessage = $("#custMessage").val();
  //   } else {
  //   }

  //   var body =
  //     '<!DOCTYPE html><html><head><title>Oramax Dental care</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"></head><body style="margin:0!important;padding:0!important;background-color:#eee" bgcolor="#eeeeee"><div style="display:none;font-size:1px;color:#fefefe;line-height:1px;font-family:Open Sans,Helvetica,Arial,sans-serif;max-height:0;max-width:0;opacity:0;overflow:hidden"></div><table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#fff"><tr><td align="center" style="background-color:#eee" bgcolor="#eeeeee"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td align="center" valign="top" style="font-size:0;padding:10px" bgcolor="#164388"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:6px;font-weight:800;line-height:10px" className="mobile-center"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;line-height:24px;padding:10px"><a href="tel:+91" style="text-decoration:none;color:#fff;font-family:serif;font-size:16px">Leade Generate for Oramax</a></td></tr></table></td></tr></table></div></td></tr><tr><td align="center" valign="top" style="font-size:0;padding:15px" bgcolor="#fff"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:36px;font-weight:800;line-height:48px" className="mobile-center"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-weight:800"><img style="width:120px;height:120px" src="" alt=""></td></tr></table></td></tr></table></div></td></tr><tr><td align="center" valign="top" style="font-size:0;padding:0" bgcolor="#164388"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td width="100%" align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;padding:10px 0" className="mobile-center"><h1 style="text-transform:capitalize;font-size:14px;font-weight:500;margin:0;text-align:center;color:#fff">Client Enquiry Details</h1></td></tr></table></div></td></tr><tr><td align="center" height="100%" valign="top" width="100%" style="padding:0 35px 35px 35px;background-color:#fff" bgcolor="#eee"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px"><tr><td width="100%" align="center" valign="top" style="font-size:0"><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;text-align:center;width:100%"><table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width:300px"><tr><td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Name:</p><p style="font-size:14px;font-weight:500;color:#111">' +
  //     custName +
  //     '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Number:</p><p style="font-size:14px;font-weight:500;color:#111">' +
  //     custPhone +
  //     '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Email:</p><p style="font-size:14px;font-weight:500;color:#111">' +
  //     custEmail +
  //     '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Message:</p><p style="font-size:14px;font-weight:500;color:#111">' +
  //     custMessage +
  //     '</p></td></tr></table></div></td></tr></table></td></tr><tr><td width="100%" align="center" bgcolor="#164388" style="padding:10px 0"><p style="color:#fff;font-weight:500;font-size:1rem;padding:0;margin:0">© Copyright 2023 Oramax</p></td></tr></table></td></tr></table></body></html>';

  //   $.post(
  //     "https://skdm.in/server/v1/send_lead_mail.php",
  //     {
  //       toEmail: "oramaxdental@gmail.com",
  //     fromEmail: "skdmlead@gmail.com",
  //     bccMail: "skdmlead@gmail.com",
  //     // toEmail: "princygrwl4@gmail.com",
  //     // fromEmail: "princygrwl4@gmail.com",
  //     // bccMail: "princygrwl4@gmail.com",
  //     mailSubject: "New Lead genration",
  //     mailBody: body,
  //     accountName: "oramax",
  //     accountLeadSource: "https://oramax.in/",
  //       accountLeadName: custName,
  //       accountLeadPhone: custPhone,
  //       accountLeadEmail: custEmail,
  //       accountLeadMsgs: custMessage,
  //     },

  //     function (dataa, status) {
  //       console.log("data :" + dataa);
  //       console.log("name:" + custName);
  //     }
  //   );

  //   alert("Your Form has Submitted Our team will contact with You  soon.");

  //   window.location.reload();

  //   return false;
  // };

  // const [scroll, setScroll] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScroll(window.scrollY > 50);
  //   });
  // }, []);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);

  // const handleShow = () => setShow(true);
  // const newLinkStyles = ({ isActive }) => {
  //   return {
  //     fontweight: isActive ? "red" : "white",
  //   };
  // };

  // const [color, setColor] = useState(false)

  // const changeColor = () => {
  //   if (window.scrollY >= 78) {
  //     setColor(true)
  //   } else {
  //     setColor(false)
  //   }
  // }

  // window.addEventListener('scroll', changeColor)


  return (
    <div>

<header className="topnav1 fixed-top1">
  <div className="top-navbar">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 d-lg-block d-none">
          <div className="left">
            <a href="tel:919297769776">
              <i className="fa fa-whatsapp" />
              &nbsp; +91 9297769776{" "}
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
              <a
                className="insta"
                target="_blank"
                href="https://www.artstation.com/"
                title="Follow us on Art Station"
              >
                <img src="/img/art-station-w.png" />
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
                <Link to="/Studentswork" onClick={handleNavbarCollapse} className="nav-link">
                  Life At Designboxx
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
            
            
          
         
                <Link to="/Contact" onClick={handleNavbarCollapse} className="nav-link">
                  Contact Us
                </Link>
                
              </Nav>
             
            </Navbar.Collapse>
            <div className="d-lg-block d-none">
            <a href="#enquire" className="btn btn-light scrollto2">
              Apply Now
            </a>
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
