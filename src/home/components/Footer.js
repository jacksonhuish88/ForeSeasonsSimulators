import React from 'react';
import "../../App.css";
import "../Home.css";
import "./css/footer.css";
import Logo from "../Logo.png";

const Footer = () => {
    return (
        <footer className="text-white pt-4 pb-4">
            <div className="container">
                <div className="row text-center text-md-left">
                    {/* Logo and Review Button */}
                    <div className="col-12 col-md-3 mb-3">
                        <div>
                            <img src={Logo} alt="Logo" className="img-fluid mb-2" style={{ maxHeight: "75px" }} />
                        </div>
                        <div>
                            <a href="#Home" className="btn btn-primary mt-2 mt-md-0" style={{ backgroundColor: '#2a572c', border: 'none' }}>Leave a Review!</a>
                        </div>
                    </div>

                    {/* About Company */}
                    <div className="col-md-3 mb-3">
                        <p>Let us handle the at-home simulator setup, freeing you up for what truly matters—perfecting that swing and, of course, outdriving your father-in-law. We’ve got your back, on and off the virtual green!</p>
                    </div>

                    {/* Our Simulators */}
                    <div className="col-md-2 mb-3">
                        <h5>Our Simulators</h5>
                        <ul className="list-unstyled">
                            <li><a href="#Home">About</a></li>
                            <li><a href="#installation">Installation</a></li>
                            <li><a href="#materials">Materials</a></li>
                            <li><a href="#Home">About</a></li>
                            <li><a href="#Home">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-4 mb-3">
                        <h5>Contact</h5>
                        <ul className="list-unstyled">
                            <li><a href="mailto:foreseasonssimulators@gmail.com"><i className="fa fa-envelope me-2"></i>foreseasonssimulators@gmail.com</a></li>
                            <li><a href="tel:123-123-1234"><i className="fa fa-phone me-2"></i>123-123-1234</a></li>
                            <li><a href="https://www.instagram.com/fore.seasons.golf" target="_blank"><i className="fab fa-instagram me-2"></i>Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
