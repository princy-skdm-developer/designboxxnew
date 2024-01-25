import "../Css/Tabs.css";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import React, { useState, useEffect } from "react";
import "../Css/Courses.css";
import Table from "react-bootstrap/Table";
import MyBackgroundImage from "../Images/interiorbanner.jpg";
import Footer from "../Component/Footer";
import Accordion from "react-bootstrap/Accordion";
import { Link, useLocation } from "react-router-dom";
import illus from "../Images/icons/Adobe_Illustrator_CC_icon.svg.png";
import photoshop from "../Images/icons/Adobe_Photoshop_CC_icon.svg.png";
import cad from "../Images/icons/autocad-logo-69326D7728-seeklogo.com.png";
import CourseDescInterior from "../Component/CourseDescInterior";
const Courses2 = () => {
  const search = useLocation();
  const Path = search.pathname;
  const CourseDesc = CourseDescInterior.find((e) => e.Slugs == Path);
  const Course1 = CourseDesc.Course[0];
  const Course2 = CourseDesc.Course[1];
  const Course3 = CourseDesc.Course[2];
  console.log(CourseDesc);
  return (
    <div>
      <div
        className="breadcrumb-area shadow dark text-center bg-fixed text-light"
        style={{ backgroundImage: `url(${MyBackgroundImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{CourseDesc.ServiceName}</h1>
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
      <div>
        <section className="course-page-header">
          <div className="overlay">
            <div className="site-wrap">
              <div className="container-fluid">
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
                    <h3>Duration - 36 Months</h3>
                    <div className="row" style={{ paddingTop: 30 }}>
                      <div className="col-auto">
                        <a href="#enquire" className="btn btn-main scrollto2">
                          Enquire Now
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="/upload/page/integrated-b-voc-in-media-graphics-and-animation-5-year_437943.pdf"
                          target="_blank"
                          className="btn btn-outline-dark"
                        >
                          Download Brochure
                        </a>
                      </div>
                    </div>
                    <div className="art-share">
                      Share &nbsp;&nbsp;&nbsp;{" "}
                      <a
                        target="_blank"
                        className="fb"
                        href="http://www.facebook.com/sharer.php?u=https://frameboxx.in/courses/b-voc/integrated-b-voc-in-media-graphics-and-animation-offered-by-silver-oak-university"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                      <a
                        target="_blank"
                        className="tw"
                        href="https://twitter.com/share?url=https://frameboxx.in/courses/b-voc/integrated-b-voc-in-media-graphics-and-animation-offered-by-silver-oak-university&text=Integrated B.Voc in Media Graphics and Animation (offered by Silver Oak University)&hashtags=B.Voc"
                      >
                        <i className="fa fa-twitter" />
                      </a>
                      <a
                        target="_blank"
                        className="tg"
                        href="https://t.me/share/url?url=https://frameboxx.in/courses/b-voc/integrated-b-voc-in-media-graphics-and-animation-offered-by-silver-oak-university&text=Integrated B.Voc in Media Graphics and Animation (offered by Silver Oak University)"
                      >
                        <i className="fa fa-telegram" />
                      </a>
                      <a
                        target="_blank"
                        className="wapp"
                        href="https://api.whatsapp.com/send?text=https://frameboxx.in/courses/b-voc/integrated-b-voc-in-media-graphics-and-animation-offered-by-silver-oak-university Integrated B.Voc in Media Graphics and Animation (offered by Silver Oak University)"
                      >
                        <i className="fa fa-whatsapp" />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <img
                      src="/upload/page/integrated-b-voc-in-media-graphics-and-animation-by-silver_212107x.jpg"
                      className="img-fluid"
                    />
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
                          <div className="col col-md-8">
                            <div className="content">
                              <div className="line-heading">
                                <h2>About This Course</h2>
                              </div>
                              <p>{CourseDesc.ServicePara1}</p>
                            </div>
                          </div>
                          <div className="col col-md-4">
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
                                      <td>10th Grade</td>
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
                              <span>(First Semester & Second Semester)</span>
                            </Accordion.Header>

                            <AccordionBody>
                              <div
                                id="collapse117"
                                className="collapse  show "
                                aria-labelledby="heading117"
                                data-parent="#accordionExample266"
                              >
                                <h5>First Semester</h5>{" "}
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
                                <h5>Second Semester</h5>{" "}
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
                                    {Course1.Design.map(
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
                            <Accordion.Header>
                              {" "}
                              Second Year 
                            </Accordion.Header>

                            <AccordionBody>
                              <div
                                id="collapse117"
                                className="collapse  show "
                                aria-labelledby="heading117"
                                data-parent="#accordionExample266"
                              >
                                <h5>First Semester</h5>{" "}
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
                                {/* -------------sem2---------- */}
                                <h5>Second Semester</h5>{" "}
                               
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
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <th>S.No.</th>
                                      <th>Course</th>

                                     
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {Course2.Design.map(
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
                            </AccordionBody>
                          </Accordion.Item>
                        </div>
                        {/* -------------------Accordion3------------------*/}
                        <div className="">
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>
                              {" "}
                              Third Year{" "}
                              {/* <span>3 Softwares | 9 Artistic Skills</span> */}
                            </Accordion.Header>

                            <AccordionBody>
                              <div
                                id="collapse117"
                                className="collapse  show "
                                aria-labelledby="heading117"
                                data-parent="#accordionExample266"
                              >
                              <h5>First Semester</h5>{" "}
                              <div className="row">
                                <div className="col-md-4">

                                </div>
                                <div className="col-md-4">
                                  
                                  </div>
                                  <div className="col-md-4">
                                  
                                  </div>
                              </div>
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <th>S.No.</th>
                                      <th>Course</th>

                                     
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {Course3.Graphics.map(
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
                                {/* -------------sem2---------- */}
                                <h5>Second Semester</h5>{" "}
                               
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
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <th>S.No.</th>
                                      <th>Course</th>

                                     
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {Course3.Design.map(
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
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <th>S.No.</th>
                                      <th>Course</th>

                                     
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {Course3.History.map(
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
                            <img
                              alt=""
                              height={30}
                              src={illus}
                              width={30}
                            />
                          </div>
                          <div>
                            <strong>Adobe Illustrator</strong>
                            <br />
                            Digital Photo Editing &amp; Compositing
                          </div>
                        </div>
                        <div className="table-list-software col-md-4">
                          <img
                            alt=""
                            height={30}
                            src={photoshop}
                            width={30}
                          />
                          <div>
                            <strong>Photoshop</strong>
                            <br />
                            Vector Graphics &amp; Designing
                          </div>
                        </div>
                        <div className="table-list-software col-md-4">
                          <img
                            alt=""
                            height={30}
                            src={cad}
                            width={30}
                          />
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

      <Footer />
    </div>
  );
};

export default Courses2;
