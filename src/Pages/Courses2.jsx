import "../Css/Tabs.css";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import React, { useState, useEffect } from "react";
import "../Css/Courses.css";
import $ from 'jquery';
import cform from "../Images/logos/enquiry-removebg-preview (1).png";
import Table from "react-bootstrap/Table";
import MyBackgroundImage from "../Images/Carousel and backgrounds -20240115T070201Z-001/interiorbanner.jpg";
import Footer from "../Component/Footer";
import Accordion from "react-bootstrap/Accordion";
import { Link, useLocation } from "react-router-dom";
import illus from "../Images/icons/Adobe_Illustrator_CC_icon.svg.png";
import photoshop from "../Images/icons/Adobe_Photoshop_CC_icon.svg.png";
import cad from "../Images/icons/autocad-logo-69326D7728-seeklogo.com.png";
import CourseDescInterior from "../Component/CourseDescInterior";
import MetaTags from 'react-meta-tags';
const Courses2 = () => {
  const search = useLocation();
  const Path = search.pathname;
  const CourseDesc = CourseDescInterior.find((e) => e.Slugs == Path);
  const Course1 = CourseDesc.Course[0];
  const Course2 = CourseDesc.Course[1];
  const Course3 = CourseDesc.Course[2];
  console.log(CourseDesc);

  const [errors, setErrors] = useState({
    custName: "",
    custEmail: "",
    custContact: "",
    custMessage: "",
  });

  const handleValidation = () => {
    let isValid = true;
    const newErrors = {
      custName: "",
      custEmail: "",
      custContact: "",
      custMessage: "",
    };
    if (!custName.trim()) {
      isValid = false;
      newErrors.custName = "Name is required";
    }

    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!custEmail.match(emailRegex)) {
      isValid = false;
      newErrors.custEmail = "Email is not valid";
    }

    if (!custContact.trim()) {
      isValid = false;
      newErrors.custContact = "Phone is required";
    } else if (!/^\d{10}$/.test(custContact)) {
      isValid = false;
      newErrors.custContact = "Phone must have 10 digits";
    }

    if (!custMessage.trim()) {
      isValid = false;
      newErrors.custMessage = "Write a Message";
    }

    setErrors(newErrors);
    return isValid;
  };
  const [custName, setCustName] = useState("");
  const [custEmail, setCustEmail] = useState("");
  const [custContact, setCustContact] = useState("");
  const [custMessage, setCustMessage] = useState("");
  const [custSubject, setCustSubject] = useState("");
  // ============== Mail Print ======
  const ServForm = (e) => {
   
    if (handleValidation()) {
      var body =
        '<!DOCTYPE html><html><head><title>Enquiry Lead</title></head><body><div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background-color:#f2f2f2;padding:20px"><h2 style="color:#6e3b70">Designboxx </h2><p>Hello Designboxx,</p><p>Thank you for your interest in our services.</p><p>Please check your enquiry which generated from website:</p><table cellpadding="5" style="margin:0"><tr><td style="text-align:left"><strong>Name:</strong></td><td style="text-align:left;color:#6e3b70">' +
        custName +
        '</td></tr><tr><td style="text-align:left"><strong>Email:</strong></td><td style="text-align:left;color:#6e3b70">' +
        custEmail +
        '</td></tr><tr><td style="text-align:left"><strong>Phone:</strong></td><td style="text-align:left;color:#6e3b70">' +
        custContact +
        '</td></tr><tr><td style="text-align:left"><strong>Message:</strong></td><td style="text-align:left;color:#6e3b70">' +
        custMessage +
        '</td></tr><tr><td style="text-align:left"><strong>Course:</strong></td><td style="text-align:left;color:#6e3b70">' +
      
        custSubject +
        '</td></tr></table><p style="font-weight:700">Enquiry from website portal</p></div></body></html>';
        <tr><td style="text-align:left"><strong>Subject:</strong></td><td style="text-align:left">${custSubject}</td></tr>
        $.post(
        "https://skdm.in/server/v1/send_lead_mail.php",
        {
          toEmail: "info@designboxx.in",
          fromEmail: "skdmlead@gmail.com",
          bccMail: "skdmlead@gmail.com",
          mailSubject: "New Customer Lead",
          mailBody: body,
          accountName: "designboxx",
          accountLeadSource: "",
          accountLeadName: custName,
          // accountLeadEmail: custEmail,
        },
        function (dataa, status) {
          console.log("data :" + dataa);
          console.log("name:" + custName);
          console.log("name:" + custEmail);
        }
      );

      alert("Your Form has Submitted Our team will contact with You  soon.");
      e.preventDefault();
      return false;
    }
  };
  return (
    <div>
     <section
        className="breadcrumb-area shadow dark text-center  text-light"
        style={{ backgroundImage: `url(${MyBackgroundImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <h1>Designboxx Interior & Fashion Designing Institutes</h1>
              <h2>{CourseDesc.ServiceName}</h2>
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
      <div>
        <section className="course-page-header">
          <div className="overlay">
            <div className="site-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="/">
                            <i className="fa fa-home" />
                          </a>
                        </li>
                        <li className="breadcrumb-item" active="">
                          <a>Courses</a>
                        </li>
                        {/* <li className="breadcrumb-item">
                          < to="/courses/">{CourseDesc.ServiceName}</>
                        </li> */}
                      </ol>
                    </nav>
                    <h2>{CourseDesc.ServiceName}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="page-content m-lg-5">
          <div className="course-detail">
            <div className="pages">
              <div className="intro">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="btgrid">
                        <div className="row row-1">
                          <div className="col col-md-8 col-12">
                            <div className="content">
                              <div className="line-heading">
                                <h2>About This Course</h2>
                              </div>
                              <p>{CourseDesc.ServicePara1}</p>
                            </div>
                          </div>
                          <div className="col col-md-4 col-12">
                            <div className="content course-specs">
                              <div className="table-responsive">
                                <table
                                  className="table"
                                  style={{ width: "100%" }}
                                >
                                  <tbody>
                                    <tr>
                                      <td>Level</td>
                                      <td>B. Sc</td>
                                    </tr>
                                    <tr>
                                      <td>Duration</td>
                                      <td>36 months</td>
                                    </tr>
                                    <tr>
                                      <td>Eligibility</td>
                                      <td>12th Grade</td>
                                    </tr>
                                    {/* <tr>
                                      <td>Softwares</td>
                                      <td>25 Softwares</td>
                                    </tr> */}
                                    {/* <tr>
                                      <td>Skills</td>
                                      <td>47 Skills</td>
                                    </tr> */}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>&nbsp;</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <Accordion id="accordionExample266" className="accordion">
                        {/* -------------------Accordion1------------------          */}
                        <div>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              1st Year &nbsp;
                              {/* <span>(First Semester & Second Semester)</span> */}
                            </Accordion.Header>

                            <AccordionBody>
                              <div
                                id="collapse117"
                                className="collapse  show "
                                aria-labelledby="heading117"
                                data-parent="#accordionExample266"
                              >
                                {" "}
                                <div className="line-heading">
                                  <h2>First Semester</h2>
                                </div>
                                <div className="row">
                                  <div className="col-md-4 col-12">
                                    <Table striped bordered hover>
                                      <thead>
                                        <tr>
                                          <th>S.No.</th>
                                          <th>Course</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {Course1.Graphics.map(
                                          (donationValue) => (
                                            <tr>
                                              <td class="meals">
                                                <p>{donationValue.Sno}</p>
                                              </td>

                                              <td class="Donate-amount">
                                                <p>{donationValue.CName1}</p>
                                              </td>
                                            </tr>
                                          )
                                        )}
                                      </tbody>
                                    </Table>
                                  </div>
                                  <div className="col-md-4 col-12">
                                    <Table striped bordered hover>
                                      <thead>
                                        <tr>
                                          <th>S.No.</th>
                                          <th>Course</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {Course1.Furniture.map(
                                          (donationValue) => (
                                            <tr>
                                              <td class="meals">
                                                <p>{donationValue.Sno}</p>
                                              </td>

                                              <td class="Donate-amount">
                                                <p>{donationValue.CName1}</p>
                                              </td>
                                            </tr>
                                          )
                                        )}
                                      </tbody>
                                    </Table>
                                  </div>
                                  <div className="col-md-4 col-12">
                                    <Table striped bordered hover>
                                      <thead>
                                        <tr>
                                          <th>S.No.</th>
                                          <th>Course</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {Course1.Construct.map(
                                          (donationValue) => (
                                            <tr>
                                              <td class="meals">
                                                <p>{donationValue.Sno}</p>
                                              </td>

                                              <td class="Donate-amount">
                                                <p>{donationValue.CName1}</p>
                                              </td>
                                            </tr>
                                          )
                                        )}
                                      </tbody>
                                    </Table>
                                  </div>
                                </div>
                                {/* -------------sem2---------- */}
                                <div className="line-heading">
                                  <h2>Second Semester</h2>
                                </div>
                                <div className="row">
                                  <div className="col-md-6 col-12">
                                    <Table striped bordered hover>
                                      <thead>
                                        <tr>
                                          <th>S.No.</th>
                                          <th>Course</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {Course1.Design.map((donationValue) => (
                                          <tr>
                                            <td class="meals">
                                              <p>{donationValue.Sno}</p>
                                            </td>

                                            <td class="Donate-amount">
                                              <p>{donationValue.CName1}</p>
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </Table>
                                  </div>
                                  <div className="col-md-6 col-12">
                                    <Table striped bordered hover>
                                      <thead>
                                        <tr>
                                          <th>S.No.</th>
                                          <th>Course</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {Course1.History.map(
                                          (donationValue) => (
                                            <tr>
                                              <td class="meals">
                                                <p>{donationValue.Sno}</p>
                                              </td>

                                              <td class="Donate-amount">
                                                <p>{donationValue.CName1}</p>
                                              </td>
                                            </tr>
                                          )
                                        )}
                                      </tbody>
                                    </Table>
                                  </div>
                                </div>
                              </div>
                              {/* <div className="row row-1">
  <div className="col"> */}
                              {/* <div className="content"> */}
                            </AccordionBody>
                          </Accordion.Item>
                        </div>
                        {/* -------------------Accordion2------------------*/}
                        <div className="">
                          <Accordion.Item eventKey="1">
                            <Accordion.Header> 2nd Year</Accordion.Header>

                            <AccordionBody>
                              <div
                                id="collapse117"
                                className="collapse  show "
                                aria-labelledby="heading117"
                                data-parent="#accordionExample266"
                              >
                                <div className="line-heading">
                                  <h2>First Semester</h2>
                                </div>
                                <div className="row">
                                  <div className=" col-md-4 col-12">
                                    <Table striped bordered hover>
                                      <thead>
                                        <tr>
                                          <th>S.No.</th>
                                          <th>Course</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {Course2.Graphics.map(
                                          (donationValue) => (
                                            <tr>
                                              <td class="meals">
                                                <p>{donationValue.Sno}</p>
                                              </td>

                                              <td class="Donate-amount">
                                                <p>{donationValue.CName1}</p>
                                              </td>
                                            </tr>
                                          )
                                        )}
                                      </tbody>
                                    </Table>
                                  </div>

                                  <div className=" col-md-8 col-12">
                                    <Table striped bordered hover>
                                      <thead>
                                        <tr>
                                          <th>S.No.</th>
                                          <th>Course</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {Course2.Construct.map(
                                          (donationValue) => (
                                            <tr>
                                              <td class="meals">
                                                <p>{donationValue.Sno}</p>
                                              </td>

                                              <td class="Donate-amount">
                                                <p>{donationValue.CName1}</p>
                                              </td>
                                            </tr>
                                          )
                                        )}
                                      </tbody>
                                    </Table>
                                  </div>
                                </div>

                                {/* -------------sem2---------- */}
                                <div className="line-heading">
                                  <h2>Second Semester</h2>
                                </div>

                                <div className="row">
                                  <div className="col-lg-4 col-md-6 col-12">
                                    <Table striped bordered hover>
                                      <thead>
                                        <tr>
                                          <th>S.No.</th>
                                          <th>Course</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {Course2.Design.map((donationValue) => (
                                          <tr>
                                            <td class="meals">
                                              <p>{donationValue.Sno}</p>
                                            </td>

                                            <td class="Donate-amount">
                                              <p>{donationValue.CName1}</p>
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </Table>
                                  </div>

                                  <div className="col-lg-4 col-md-6 col-12">
                                    <Table striped bordered hover>
                                      <thead>
                                        <tr>
                                          <th>S.No.</th>
                                          <th>Course</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {Course2.Furniture.map(
                                          (donationValue) => (
                                            <tr>
                                              <td class="meals">
                                                <p>{donationValue.Sno}</p>
                                              </td>

                                              <td class="Donate-amount">
                                                <p>{donationValue.CName1}</p>
                                              </td>
                                            </tr>
                                          )
                                        )}
                                      </tbody>
                                    </Table>
                                  </div>

                                  <div className="col-lg-4 col-md-6 col-12">
                                    <Table striped bordered hover>
                                      <thead>
                                        <tr>
                                          <th>S.No.</th>
                                          <th>Course</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {Course2.History.map(
                                          (donationValue) => (
                                            <tr>
                                              <td class="meals">
                                                <p>{donationValue.Sno}</p>
                                              </td>

                                              <td class="Donate-amount">
                                                <p>{donationValue.CName1}</p>
                                              </td>
                                            </tr>
                                          )
                                        )}
                                      </tbody>
                                    </Table>
                                  </div>
                                </div>
                              </div>
                            </AccordionBody>
                          </Accordion.Item>
                        </div>
                        {/* -------------------Accordion3------------------*/}
                        <div className="">
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>
                              {" "}
                              3rd Year{" "}
                              {/* <span>3 Softwares | 9 Artistic Skills</span> */}
                            </Accordion.Header>

                            <AccordionBody>
                              <div
                                id="collapse117"
                                className="collapse  show "
                                aria-labelledby="heading117"
                                data-parent="#accordionExample266"
                              >
                                <div className="line-heading">
                                  <h2>First Semester</h2>
                                </div>
                                <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                  <Table striped bordered hover>
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>Course</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {Course3.Graphics.map((donationValue) => (
                                        <tr>
                                          <td class="meals">
                                            <p>{donationValue.Sno}</p>
                                          </td>

                                          <td class="Donate-amount">
                                            <p>{donationValue.CName1}</p>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </Table>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                  <Table striped bordered hover>
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>Course</th>

                                        {/* */}
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {Course3.Construct.map(
                                        (donationValue) => (
                                          <tr>
                                            <td class="meals">
                                              <p>{donationValue.Sno}</p>
                                            </td>

                                            <td class="Donate-amount">
                                              <p>{donationValue.CName1}</p>
                                            </td>
                                          </tr>
                                        )
                                      )}
                                    </tbody>
                                  </Table>
                                </div>
                               

                                {/* -------------sem2---------- */}
                                <div className="line-heading">
                                  <h2>Second Semester</h2>
                                </div>
                               
                                <div className="col-lg-4 col-md-6 col-12">
                                  <Table striped bordered hover>
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>Course</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {Course3.Design.map((donationValue) => (
                                        <tr>
                                          <td class="meals">
                                            <p>{donationValue.Sno}</p>
                                          </td>

                                          <td class="Donate-amount">
                                            <p>{donationValue.CName1}</p>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </Table>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                  <Table striped bordered hover>
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>Course</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {Course3.Furniture.map(
                                        (donationValue) => (
                                          <tr>
                                            <td class="meals">
                                              <p>{donationValue.Sno}</p>
                                            </td>

                                            <td class="Donate-amount">
                                              <p>{donationValue.CName1}</p>
                                            </td>
                                          </tr>
                                        )
                                      )}
                                    </tbody>
                                  </Table>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12">
                                  <Table striped bordered hover>
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>Course</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {Course3.History.map((donationValue) => (
                                        <tr>
                                          <td class="meals">
                                            <p>{donationValue.Sno}</p>
                                          </td>

                                          <td class="Donate-amount">
                                            <p>{donationValue.CName1}</p>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </Table>
                                </div>
                              </div>
                              </div>
                            </AccordionBody>
                          </Accordion.Item>
                        </div>
                        {/* -------------------Accordion4------------------          */}
                      </Accordion>
                    </div>
                    <section className="mt-lg-5 mt-2">
                      <div className="line-heading">
                        <h2>Software Skills</h2>
                      </div>

                      <div className="table-responsive mt-lg-5 mt-2 row">
                        <div className="table-list-software col-md-4">
                          <div className="">
                            <img alt="" height={30} src={illus} width={30} />
                          </div>
                          <div>
                            <strong>Adobe Illustrator</strong>
                            <br />
                            Digital Photo Editing &amp; Compositing
                          </div>
                        </div>
                        <div className="table-list-software col-md-4">
                          <img alt="" height={30} src={photoshop} width={30} />
                          <div>
                            <strong>Photoshop</strong>
                            <br />
                            Vector Graphics &amp; Designing
                          </div>
                        </div>
                        <div className="table-list-software col-md-4">
                          <img alt="" height={30} src={cad} width={30} />
                          <div>
                            <strong>CAD(Computer Aided Designing)</strong>
                            <br />
                            Vector Graphics &amp; Designing
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
      <div className="reg-area default-padding-top">
        <div className="container">
          <div className="row">
            {/* <div className="reg-items"> */}
            <div className="col-md-6 reg-form pb-3">
                <div className="site-heading text-left">
                  <h2>Enquire Now</h2>
                  <p>
                    Fill the form so we can get to know you and your needs better.
                  </p>
                </div>
                <form action="#">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Full Name"
                          type="text"
                          value={custName}
                          onChange={(e) => setCustName(e.target.value)}
                        />
                           {errors.custName && (
                        <span className="error-text">{errors.custName}</span>
                      )}
                      </div>
                    </div>
                   
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Phone"
                          type="text"
                          value={custContact}
                          onChange={(e) => setCustContact(e.target.value)}
                        />
                         {errors.custContact && (
                        <span className="error-text">{errors.custContact}</span>
                      )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Email*"
                          type="email"
                          value={custEmail}
                          onChange={(e) => setCustEmail(e.target.value)}
                        />
                           {errors.custEmail && (
                        <span className="error-text">{errors.custEmail}</span>
                      )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select style={{}} className='form-control' onChange={(e) => setCustSubject(e.target.value)}>
                          <option >Select Course</option>
                          <option value="B.sc in Fashion Designing (3 Years)">B.sc in Fashion Designing (3 Years)</option>
                          <option value="Tailoring (6 Months)">Tailoring (6 Months)</option>
                          <option value="Fashion Illustration(6 Months)">Fashion Illustration(6 Months)</option> 
                          <option value="Embroidery(6 Months)">Embroidery(6 Months)</option>
                          <option value="Fashion Styling(6 Months)">Fashion Styling(6 Months)</option> 
                          <option value="B.sc in Interior Designing (3 Years)">B.sc in Interior Designing (3 Years)</option>
                          <option value="Furniture Design & Layout (6 Months)">Furniture Design & Layout (6 Months)</option>
                          <option value="Computer Aided Design (6 Months)">Computer Aided Design (6 Months)</option>
                          <option value="Sustaineable Interior Design (6 Months)">Sustaineable Interior Design (6 Months)</option>
                          <option value="Lighting Design (6 Months)">Lighting Design (6 Months)</option>
                          <option value="Interior Design Specialization (6 Months)">Interior Design Specialization (6 Months)</option>
                          <option value="Vastu">Vastu (6 Months)</option>
                         
                        </select>
                      
                      </div>
                      
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select style={{}} className='form-control'>
                          <option value={1}>Select Nearest Location</option>
                          <option value={2}>Ghatkopar</option>
                        
                        </select>
                       
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Message"
                          type="text"
                          value={custMessage}
                        rows={6}
                        onChange={(e) => setCustMessage(e.target.value)}
                        />
                            {errors.custMessage && (
                        <span className="error-text">{errors.custMessage}</span>
                      )}
                      </div>
                    </div>
                 
                    
                    <div className="col-md-12">
                      <button type="submit" onClick={ServForm}>Submit Now</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6 thumb">
                <img src={cform} alt="Thumb" />
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
      </section>
      <Footer />
    </div>
  );
};

export default Courses2;
