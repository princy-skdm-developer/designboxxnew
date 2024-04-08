import React, { useState } from "react";
import "../Css/Contact.css";
import MyBackgroundImage from "../Images/contactBanner.jpg";
import Footer from "../Component/Footer";
import $ from "jquery";
import { MetaTags } from "react-meta-tags";
const Contact = () => {
  const [errors, setErrors] = useState({
    custName: "",
    custEmail: "",
    custContact: "",
    custMessage: "",
    custSubject:"",
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
        '</td></tr></table><p style="font-weight:700">Best regards,<br>Your Team at<span style="text-align:left;color:#6e3b70;padding-left:5px">Shree Krishna Digital Marketing</span>.</p></div></body></html>';
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
             <MetaTags>
        <title> Top Designing Institutes near Ghatkopar | Designboxx</title>
        <meta name="title" content="Top Designing Institutes near Ghatkopar | Designboxx" />
        <meta property="og:title" content="Top Designing Institutes near Ghatkopar | Designboxx" />
       
        <meta
          name="description"
          content="Explore the Top Designing Institutes near Ghatkopar offering comprehensive courses. Unlock your creativity & pursue your passion with expert guidance. "
        />

        <meta
          property="og:description"
          content="Explore the Top Designing Institutes near Ghatkopar offering comprehensive courses. Unlock your creativity & pursue your passion with expert guidance. "
        />
        <meta
          name="keywords"
          content="Best Interior & Fashion Designing Institutes,
          Designing Institutes in Ghatkopar,
          Fashion Designing Courses in Ghatkopar,
          Interior Designing Courses in Ghatkkopar,
          Designboxx Interior & Fashion Designing Institutes,
           Top Designing Institutes near Ghatkopar"
        />
        <link rel="canonical" href="https://designboxx.in/top-designing-institutes-near-ghatkopar" />
        <meta name="google-site-verification" content="ocFq8-RaV2esUMjJ0D2Puv0LSgd78Nqr57WJJgY8AJU" />
      </MetaTags>
{/* --------------------------------------------Meta tags---------------- */}
  
      <section
        className="breadcrumb-area shadow dark text-center  text-light"
        style={{ backgroundImage: `url(${MyBackgroundImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1> Top Designing Institute near Ghatkopar</h1>
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

      <section className="contact-info-area default-padding">
        <div className="container">
          <div className="row">
            {/* Start Contact Info */}
            {/* <div className="contact-info"> */}
            <div className="col-md-4 col-12 col-sm-4">
              <div className="item">
                <div className="icon">
                  <i className="fa fa-phone" />
                </div>
                <div className="info">
                  <h4>Call Us</h4>
                  <span>+91 9321362277 </span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 col-sm-4">
              <div className="item">
                <div className="icon">
                  <i className="fa fa-map-marker" />
                </div>
                <div className="info">
                  <h4>Address</h4>
                  <span>
                    1st Floor,Suchita & Orange Business Suite, 22, Hirachand
                    Desai Rd, भट्टवाडी, CGS Colony, Pant Nagar, Ghatkopar West,
                    Mumbai, Maharashtra 400086
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 col-sm-4">
              <div className="item">
                <div className="icon">
                  <i className="fa fa-envelope" />
                </div>
                <div className="info">
                  <h4>Email Us</h4>
                  <span>info@designboxx.in</span>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* End Contact Info */}
          <div className="seperator col-md-12">
            <span className="border" />
          </div>
          {/* Start Maps & Contact Form */}
          {/* <div className="maps-form"> */}
          <div className="row" id="connect">
            <div className="col-md-6 maps">
              <h3>Our Location</h3>
              <div className="google-maps">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.4480296950455!2d72.9058995751884!3d19.087991251596083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c62d32b68d07%3A0x5eefe12761e23a51!2zMjIsIEhpcmFjaGFuZCBEZXNhaSBSZCwg4KSt4KSf4KWN4KSf4KS14KS-4KSh4KWALCBDR1MgQ29sb255LCBQYW50IE5hZ2FyLCBHaGF0a29wYXIgV2VzdCwgTXVtYmFpLCBNYWhhcmFzaHRyYSA0MDAwODY!5e0!3m2!1sen!2sin!4v1710759886059!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7540.942912005292!2d72.9093963!3d19.0869625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c62d45927ad1%3A0x9ee4301782e456bd!2sRamniranjan%20Jhunjhunwala%20College%20of%20Arts.%20Science%20%26%20Commerce%20(Empowered%20Autonomous%20Status)!5e0!3m2!1sen!2sin!4v1706682708127!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14767.262289338461!2d70.79414485000001!3d22.284975!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1424308883981" /> */}
              </div>
            </div>
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
          </div>

          {/* </div> */}
          {/* End Maps & Contact Form */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
