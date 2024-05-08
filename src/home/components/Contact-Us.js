import React from "react";
import "../../App.css";
import "../Home.css";
import "./css/contact-us.css";

function ContactUs() {
  return (
    <section className="container-fluid text-center bg-dark text-white contact-us" id="contact-us">
      <div className="row align-items-center justify-content-center" style={{ minHeight: '25vh' }}>
        <div className="col-lg-6 col-md-8 col-sm-10 col-xs-12 p-3">
          <h1>Contact Us Now</h1>
          <p className="lead">
            We will get back to you faster than you could play 2 rounds of golf!
          </p>
        </div>
        <div className="col-lg-6 col-md-8 col-sm-10 col-xs-12 p-3">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfbuASJwta9RLYGE5ybVgpGi6x01ll6JHlZOoKUmln8iEc-_Q/viewform?embedded=true" 
            style={{ width: '100%', height: '450px', border: '0' }}
            marginHeight="0"
            marginWidth="0">Loading…</iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

