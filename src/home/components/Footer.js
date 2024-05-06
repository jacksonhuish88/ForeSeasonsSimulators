import React from 'react';
import "../../App.css";
import "../Home.css";
import Logo from "../Logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* Company Info */}
                    <div className="col-md-3">
                      <div className="text-center">
                          <img src={Logo} alt="Logo" style={{ width: "auto", height: "75px", marginTop: "5px" }} />
                      </div>
                      <div className="text-center">
                          <a href="#Home" className="btn btn-primary" style={{ backgroundColor: '#2a572c', border:'none',marginTop:'25px' }}>Leave a Review!</a>
                      </div>
                  </div>


                    {/* Company Info */}
                      <div className="col-md-3 footer-about">
                        <p>Let us handle the at-home simulator setup, freeing you up for what truly matters—perfecting that swing and, of course, outdriving your father-in-law. We’ve got your back, on and off the virtual green!</p>
                    </div>

                    {/* Services */}
                    <div className="col-md-3">
                        <h5 className="foot-overview-title">Our Simulators</h5>
                        <ul className="list-unstyled">
                            <li><a href="#Home">About</a></li>
                            <li><a href="#Home">Installation</a></li>
                            <li><a href="#Home">Included</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-3 text-center">
                      <h5 className="foot-overview-title">Contact</h5>
                      <div className="footer-brand d-flex align-items-center">
                          <i style={{ fontSize: '1.5rem' }} className="fa-solid fa-sm fa-envelope text-white me-2"></i>
                          <p style={{ margin: 0 }}><a href="mailto:foreseasonssimulators@gmail.com">foreseasonssimulators@gmail.com</a></p>
                      </div>
                      <div className="footer-brand d-flex align-items-center">
                          <i style={{ fontSize: '1.5rem' }} className="fa-solid fa-sm fa-phone text-white me-2"></i>
                          <p style={{ margin: 0 }}><a href="tel:">123-123-1234</a></p>
                      </div>
                      <div className="footer-brand d-flex align-items-center">
                          <a href="https://www.instagram.com/fore.seasons.golf" target="_blank">
                              <i className="fab fa-instagram text-white fa-xl me-2"></i>
                          </a>
                          <p style={{ margin: 0 }}>Instagram</p>
                      </div>
                  </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
