import React from "react";
import "../Css/Courses.css";
import MyBackgroundImage from "../Images/Carousel and backgrounds -20240115T070201Z-001/fashionbanner.jpg";
import Footer from "../Component/Footer";
import Accordion from "react-bootstrap/Accordion";
import { useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";
import illus from "../Images/icons/Adobe_Illustrator_CC_icon.svg.png";
import photoshop from "../Images/icons/Adobe_Photoshop_CC_icon.svg.png";
import corel from "../Images/icons/design-in-corel-draw.jpg";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import CourseData from "../Component/CourseData";

const Courses = () => {
  const search = useLocation();
  const Path = search.pathname;
  const data = CourseData.find((value) => value.slug == Path);

  return (
    <div>
      <section
        className="breadcrumb-area shadow dark text-center  text-light"
        style={{ backgroundImage: `url(${MyBackgroundImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{data && data.title}</h1>
            </div>
          </div>
        </div>
      </section>
      <div>
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
                              <p>{data && data.description}</p>
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
                                      <td>{data && data.level}</td>
                                    </tr>
                                    <tr>
                                      <td>Duration</td>
                                      <td>{data && data.Duration}</td>
                                    </tr>
                                    <tr>
                                      <td>Eligibility</td>
                                      <td>{data && data.Eligibility}</td>
                                    </tr>
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

              {/* ================== Course Detail =============== */}
              <div className="container">
                <Accordion id="accordionExample266" className="accordion">
                  {data &&
                    data.cources.map((value, index) => (
                      <Accordion.Item eventKey={index}>
                        <Accordion.Header>
                          {value.title}
                          {/* <span>(First Semester & Second Semester)</span> */}
                        </Accordion.Header>

                        <AccordionBody>
                          {value.syllabus.map((valueData, idexAgain) => (
                            <div
                              key={idexAgain}
                              className="semesterTable mt-3 mb-3 "
                            >
                              <h3 style={{ fontWeight: "600" }}>
                                {valueData.title}
                              </h3>
                              <div
                                className="cousrseData"
                                style={{ border: "1px solid #808080" }}
                              >
                                <div
                                  className="courseHead"
                                  style={{ background: "#000", width: "100%" }}
                                >
                                  <div className="row">
                                    <div className="col-7">
                                      <div className="row">
                                        <div className="col-2">
                                          <h5
                                            style={{
                                              color: "#fff",
                                              fontWeight: "bold",
                                              margin: 0,
                                              padding: "8px",
                                              fontSize: "1rem",
                                            }}
                                          >
                                            Sr. No
                                          </h5>
                                        </div>
                                        <div className="col-10">
                                          <h5
                                            style={{
                                              color: "#fff",
                                              fontWeight: "bold",
                                              margin: 0,
                                              padding: "8px",
                                              fontSize: "1rem",
                                            }}
                                          >
                                            Subjects
                                          </h5>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-5">
                                      <h5
                                        style={{
                                          color: "#fff",
                                          fontWeight: "bold",
                                          margin: 0,
                                          padding: "8px",
                                          fontSize: "1rem",
                                        }}
                                      >
                                        Semester Focus
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="courseBody"
                                  style={{ padding: "0 12px" }}
                                >
                                  <div className="row">
                                    <div className="col-md-7">
                                      {valueData.topics.map(
                                        (valueList, index) => (
                                          <div
                                            key={index}
                                            className="row"
                                            style={{
                                              background: index % 2 && "#eee",
                                            }}
                                          >
                                            <div
                                              className="col-2 p-0"
                                              key={index}
                                            >
                                              <h5
                                                style={{
                                                  color: "#000",
                                                  fontWeight: "600",
                                                  margin: 0,
                                                  padding: "10px",
                                                  fontSize: ".95rem",
                                                  borderBottom:
                                                    "1px solid #afafaf",
                                                  height: "100%",
                                                }}
                                              >
                                                {index + 1}
                                              </h5>
                                            </div>

                                            <div className="col-10 p-0">
                                              <h5
                                                style={{
                                                  color: "#000",
                                                  fontWeight: "600",
                                                  margin: 0,
                                                  padding: "10px",
                                                  fontSize: ".95rem",
                                                  borderLeft:
                                                    "1px solid #afafaf",
                                                  borderRight:
                                                    "1px solid #afafaf",
                                                  borderBottom:
                                                    "1px solid #afafaf",
                                                }}
                                              >
                                                {(valueData.title ===
                                                  "SEMESTER 5" || valueData.title === "SEMESTER 6") &&
                                                index === 2 ? (
                                                  <div
                                                    dangerouslySetInnerHTML={{
                                                      __html: valueList,
                                                    }}
                                                  />
                                                ) : (
                                                  <>{valueList}</> // Wrapping valueList in a JSX fragment
                                                )}
                                              </h5>
                                            </div>
                                          </div>
                                        )
                                      )}
                                    </div>
                                    <div className="col-md-5 col-12">
                                      <div className="d-flex align-items-center justify-content-center h-100 mt-3 mb-3">
                                        <div className="row">
                                          {valueData.icons.map(
                                            (valueIcon, indexData) => (
                                              <div
                                                className="col-4 d-flex align-items-center justify-content-center mb-5"
                                                key={indexData}
                                              >
                                                <img
                                                  src={valueIcon}
                                                  width={55}
                                                />
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </AccordionBody>
                      </Accordion.Item>
                    ))}
                </Accordion>
              </div>

              {/* ================= Software Skills ========== */}
              <section className="mt-lg-5 mt-2">
                <div className="line-heading">
                  <h2>Software Skills</h2>
                </div>

                <div className="table-responsive mt-lg-5 mt-2 row">
                  <div className="table-list-software col-md-4">
                    <img alt="" height={30} src={illus} width={30} />
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
                    <img alt="" height={30} src={corel} width={30} />
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

      <Footer />
    </div>
  );
};

export default Courses;
