import React from 'react'
import '../Css/Contact.css';
import MyBackgroundImage from "../Images/contactBanner.jpg";
import Footer from "../Component/Footer";
const Contact = () => {
  return (
    <div>

<div
  className="breadcrumb-area shadow dark text-center bg-fixed text-light"
  style={{ backgroundImage: `url(${MyBackgroundImage})` }}
>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1>Contact Us</h1>
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
              <span>+91 9297769776 </span>
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
              <span>Jhunjhunuwala College, Station Road, Ghatkopar West,
MUMBAI - 400086 (Opposite Ghatkopar Railway Station)</span>
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
      {/* </div> */}
      {/* End Contact Info */}
      <div className="seperator col-md-12">
        <span className="border" />
      </div>
      {/* Start Maps & Contact Form */}
      {/* <div className="maps-form"> */}
        <div className="col-md-6 maps">
          <h3>Our Location</h3>
          <div className="google-maps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7540.942912005292!2d72.9093963!3d19.0869625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c62d45927ad1%3A0x9ee4301782e456bd!2sRamniranjan%20Jhunjhunwala%20College%20of%20Arts.%20Science%20%26%20Commerce%20(Empowered%20Autonomous%20Status)!5e0!3m2!1sen!2sin!4v1706682708127!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14767.262289338461!2d70.79414485000001!3d22.284975!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1424308883981" /> */}
          </div>
        </div>
        <div className="col-md-6 form">
          <div className="heading">
            <h3>Contact Us</h3>
            <p>
              Occasional terminated insensible and inhabiting gay. So know do
              fond to half on. Now who promise was justice new winding
            </p>
          </div>
          <form
            action="assets/mail/contact.php"
            method="POST"
            className="contact-form"
          >
            <div className="col-md-12">
              <div className="row">
                <div className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                  />
                  <span className="alert-error" />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="form-group">
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email*"
                    type="email"
                  />
                  <span className="alert-error" />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="form-group">
                  <input
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    type="text"
                  />
                  <span className="alert-error" />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="form-group comments">
                  <textarea
                    className="form-control"
                    id="comments"
                    name="comments"
                    placeholder="Tell Me About Courses *"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <button type="submit" name="submit" id="submit">
                  Send Message <i className="fa fa-paper-plane" />
                </button>
              </div>
            </div>
            {/* Alert Message */}
            <div className="col-md-12 alert-notification">
              <div id="message" className="alert-msg" />
            </div>
          </form>
        </div>
      {/* </div> */}
      {/* End Maps & Contact Form */}
    </div>
  </div>
</section>
<Footer/>
    </div>
  )
}

export default Contact