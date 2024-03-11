import React, { useState, useEffect } from "react";
import "../Css/Courses.css";
import MyBackgroundImage from "../Images/Carousel and backgrounds -20240115T070201Z-001/fashionbanner.jpg";
import Footer from "../Component/Footer";
import Accordion from "react-bootstrap/Accordion";
import { Link, useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";
import illus from "../Images/icons/Adobe_Illustrator_CC_icon.svg.png";
import photoshop from "../Images/icons/Adobe_Photoshop_CC_icon.svg.png";
import corel from "../Images/icons/design-in-corel-draw.jpg";
// import c1 from "../Images/course/fashion-designing-steps.webp";
// import c2 from "../Images/course/fd2.avif";
// import c3 from "../Images/course/fd3.jpg";
// import c4 from "../Images/course/fd4.jpg";
// import courseImg from "../Images/16.jpg";
// import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import AccordionBody from "react-bootstrap/esm/AccordionBody";
import CourseDescFashion from "../Component/CourseDescFashion";
const Courses = () => {
  // const [found] = useState(CourseDescFashion);
  // const [displayData, setDisplayData] = useState(null);
 
  //   const fdata = found.find((e) => e.id == displayData);
  const search = useLocation();
  const Path = search.pathname;
  const CourseDesc = CourseDescFashion.find((e) => e.Slugs == Path);
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
            
            </div>
          </div>
        </div>
      </section>
      <div>
        {/* <section className="course-page-header">
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
                    
                      </ol>
                    </nav>
                    <h2>
                    {CourseDesc.ServiceName}
                    </h2>
                    <h3>Duration - 30 Months</h3>
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
        </section> */}
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
                              <p>
                               {CourseDesc.ServicePara1}
                              </p>
                           
                            
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
                        <div >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header >
                              
                              1st Year{" "}&nbsp;
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
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <th>S.No.</th>
                                      <th>Course</th>

                                      <th>Mode Of Training</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {CourseDesc.First.map(
                                      (donationValue) => (
                                        <tr>
                                          <td class="meals">
                                            <p>{donationValue.Sno}</p>
                                          </td>

                                          <td class="Donate-amount">
                                            <p>{donationValue.CName1}</p>
                                          </td>
                                          <td class="Donate-amount">
                                            <p>{donationValue.Mode}</p>
                                          </td>
                                        </tr>
                                      )
                                    )}
                                  </tbody>
                                </Table>
                                <div className="line-heading">
                                            <h2>Second Semester</h2>
                                          </div>
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <th>S.No.</th>
                                      <th>Course</th>

                                      <th>Semester Focus</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {CourseDesc.Second.map(
                                      (donationValue) => (
                                        <tr>
                                          <td class="meals">
                                            <p>{donationValue.Sno}</p>
                                          </td>

                                          <td class="Donate-amount">
                                            <p>{donationValue.CName1}</p>
                                          </td>
                                          {/* <td rowspan="10" class="Donate-amount">
                                            <p>{donationValue.Mode}</p>
                                          </td> */}
                                        </tr>
                                      )
                                    )}
                                  </tbody>
                                </Table>
                              </div>
                            </AccordionBody>
                          </Accordion.Item>
                        </div>
{/* -------------------Accordion2------------------*/}
                        <div className="">
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>
                              {" "}
                              2nd Year{" "}
                              {/* <span>Two Semesters |4 Softwares </span> */}
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
                                            <h2>Third Semester</h2>
                                          </div>
                                          <div className="table-responsive">
                                          
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <th>S.No.</th>
                                      <th>Course</th>

                                      <th>Mode Of Training</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {CourseDesc.Third.map(
                                      (donationValue) => (
                                        <tr>
                                          <td class="meals">
                                            <p>{donationValue.Sno}</p>
                                          </td>

                                          <td class="Donate-amount">
                                            <p>{donationValue.CName1}</p>
                                          </td>
                                          <td class="Donate-amount">
                                            <p>{donationValue.Mode}</p>
                                          </td>
                                        </tr>
                                      )
                                    )}
                                  </tbody>

                                </Table>

                               <div className="line-heading">
                                            <h2>Fourth Semester</h2>
                                          </div>
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <th>S.No.</th>
                                      <th>Course</th>

                                      <th>Mode Of Training</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {CourseDesc.Fourth.map(
                                      (donationValue) => (
                                        <tr>
                                          <td class="meals">
                                            <p>{donationValue.Sno}</p>
                                          </td>

                                          <td class="Donate-amount">
                                            <p>{donationValue.CName1}</p>
                                          </td>
                                          <td class="Donate-amount">
                                            <p>{donationValue.Mode}</p>
                                          </td>
                                        </tr>
                                      )
                                    )}
                                  </tbody>
                                </Table>
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
                              {/* <span>4 Softwares | 9 Artistic Skills</span> */}
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
                                            <h2>Fifth Semester</h2>
                                          </div>
                                          <div className="table-responsive">
                                          
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <th>S.No.</th>
                                      <th>Course</th>

                                      <th>Mode Of Training</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {CourseDesc.Fifth.map(
                                      (donationValue) => (
                                        <tr>
                                          <td class="meals">
                                            <p>{donationValue.Sno}</p>
                                          </td>

                                          <td class="Donate-amount">
                                            <p>{donationValue.CName1}</p>
                                          </td>
                                          <td class="Donate-amount">
                                            <p>{donationValue.Mode}</p>
                                          </td>
                                        </tr>
                                      )
                                    )}
                                  </tbody>

                                </Table>

                               <div className="line-heading">
                                            <h2>Sixth Semester</h2>
                                          </div>
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <th>S.No.</th>
                                      <th>Course</th>

                                      <th>Mode Of Training</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {CourseDesc.Sixth.map(
                                      (donationValue) => (
                                        <tr>
                                          <td class="meals">
                                            <p>{donationValue.Sno}</p>
                                          </td>

                                          <td class="Donate-amount">
                                            <p>{donationValue.CName1}</p>
                                          </td>
                                          <td class="Donate-amount">
                                            <p>{donationValue.Mode}</p>
                                          </td>
                                        </tr>
                                      )
                                    )}
                                  </tbody>
                                </Table>
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
                            src={corel}
                            width={30}
                          />
                          <div>
                            <strong>Corel Draw</strong>
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

export default Courses;
