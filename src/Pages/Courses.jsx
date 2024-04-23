import React, {useState} from "react";
import "../Css/Courses.css";
import $ from 'jquery';
import Footer from "../Component/Footer";
import Accordion from "react-bootstrap/Accordion";
import { useLocation } from "react-router-dom";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import CourseData from "../Component/CourseData";
import cform from "../Images/logos/enquiry-removebg-preview (1).png";
const Courses = () => {
  const search = useLocation();
  const Path = search.pathname;
  const data = CourseData.find((value) => value.slug == Path);


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
      custSubject:"",
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
  // ============ Mail function ==========
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
        '</td></tr></table><p style="font-weight:700">Enquiry from website portal <span style="text-align:left;color:#6e3b70;padding-left:5px"></span>.</p></div></body></html>';
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
      window.location.reload();
      e.preventDefault();
      return false;
    }
  };
  return (

    
    <div>
      
      <section
        className="breadcrumb-area shadow dark text-center  text-light"
        style={{ backgroundImage: `url(${data.img})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="d-none">{data && data.h1}</h1>
              <h2>{data && data.title}</h2>
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

export default Courses;
