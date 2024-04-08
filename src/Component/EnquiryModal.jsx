import React, { useState } from "react";
// import Resizer from "react-image-file-resizer";
// import { useImageResizer } from "../Context/imageResizer";
// import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal,Select } from "antd";
import $ from "jquery";
import {Link} from"react-router-dom"
import CourseData from "./CourseData"; // Import course data JSON file

const { Option } = Select;
const EnquiryModal = ({donationValue}) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };



  const handleFormSubmit = () => {
    if (selectedCourse) {
      const brochureUrl = selectedCourse.documnetpath;
      if (brochureUrl) {
        // Create a link element
        const link = document.createElement("a");
        link.href = brochureUrl;
        link.setAttribute("download", `${custSubject.title}_Brochure.pdf`);

        // Append the link to the body
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Clean up
        document.body.removeChild(link);
      }
    }
  };
  // -----------------image resizer--------------------

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
      custSubject: "",
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
  const [custMessage, setCustMessage] = useState(null);
  // const [custSubject, setCustSubject] = useState("");
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
        '</td></tr></table><p style="font-weight:700">Best regards,<br>Your Team at<span style="text-align:left;color:#6e3b70;padding-left:5px">Shree Krishna Digital Marketing</span>.</p></div></body></html>';
        <tr><td style="text-align:left"><strong>Subject:</strong></td><td style="text-align:left">${custSubject}</td></tr>
        $.post(
        "https://skdm.in/server/v1/send_lead_mail.php",
        {
          toEmail: "princygrwl4@gmail.com",
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
  // email

      const custSubject = selectedCourse;
    
  return (
    <>
    <Button  className="btn btn-main" onClick={showModal}> 
        Download Brochure
      </Button>

      <Modal
        title="Enquiry Form"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        footer={[]}
      >
        <div className="container">
          <div className="row">
         
            <div className="col-12">
            <form onFinish={handleFormSubmit}>
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
                      <Select 
                      className="form-control"
              placeholder="Select a course"
              onChange={(value) =>
                setSelectedCourse(
                  CourseData.find((course) => course.title === value)
                )
              }
            >
              {CourseData.map((course) => (
                <Option key={course.title} value={course.title}>
                  {course.title}
                </Option>
              ))}
            </Select>
                        {/* <select style={{}} className='form-control' >
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
                         
                        </select> */}
                      
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
                      <button type="submit" onClick={ServForm}  htmlType="submit">Submit Now</button>
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EnquiryModal;
