import React from "react";
import Logo from "../Logo.png";
import "../../App.css";
import "../Home.css";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="#Home">
          <img src={Logo} alt="Logo" style={{ width: "auto", height: "75px" }} />
        </a>

        {/* Hamburger menu for mobile view */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavAltMarkup" 
          aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#Home">Simulators</a>
            <a className="nav-item nav-link" href="#Home">Quotes</a>
            <a className="nav-item nav-link" href="#Home">About Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
