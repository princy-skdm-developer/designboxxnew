import React from "react";
import "../Css/Courses.css";
import Footer from "../Component/Footer";
import Accordion from "react-bootstrap/Accordion";
import { useLocation } from "react-router-dom";
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
        style={{ backgroundImage: `url(${data.img})` }}
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
                          <div className="d-flex flex-column align-items-start">
                            <h5 className="m-0">{value.title}</h5>
                            <p className="m-0">
                              ({value?.syllabus[0]?.title},{" "}
                              {value?.syllabus[1]?.title})
                            </p>
                          </div>
                        </Accordion.Header>

                        <AccordionBody>
                          <div className="row">
                            {value.syllabus.map((valueData, idexAgain) => (
                              <div
                                key={idexAgain}
                                className="semesterTable mt-3 mb-3 col-md-6"
                              >
                                <h3 style={{ fontWeight: "600" }}>
                                  {valueData.title}
                                </h3>
                                <div
                                  className="courseBody"
                                  style={{
                                    padding: "0 12px",
                                  }}
                                >
                                  <div className="row">
                                    <div className="col-12">
                                      <div
                                        className="row"
                                        style={{
                                          background: "#000",
                                        }}
                                      >
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
                                                  borderLeft:
                                                    "1px solid #afafaf",
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
                                                  "SEMESTER 5" ||
                                                  valueData.title ===
                                                    "SEMESTER 6") &&
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
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
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
                  {data.icons.map((value) => (
                    <div className="table-list-software col-md-2 col-sm-3 col-xs-4 col-6">
                      <img alt="" src={value} style={{width:"100%", maxWidth:"180px"}} />
                      {/* <div>
                        <strong>Photoshop</strong>
                        <br />
                        Vector Graphics &amp; Designing
                      </div> */}
                    </div>
                  ))}
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
