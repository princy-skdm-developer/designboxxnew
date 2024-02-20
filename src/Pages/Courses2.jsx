import "../Css/Tabs.css";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import React, { useState, useEffect } from "react";
import "../Css/Courses.css";
import Table from "react-bootstrap/Table";
import MyBackgroundImage from "../Images/Carousel and backgrounds -20240115T070201Z-001/interiorbanner.jpg";
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
      <section
        className="breadcrumb-area shadow dark text-center  text-light"
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

      <Footer />
    </div>
  );
};

export default Courses2;
