import React from "react";
import Logo from "../Logo.png";
import "../../App.css";
import "../Home.css";
import "../../bootstrap-grid.css";

function Navigation() {
  return (
    <>
      <div className="navbar">
        <img src={Logo} alt="Logo" />
        <div>Simulators</div>
        <div>Quotes</div>
        <div>About Us</div>
      </div>
    </>
  );
}

export default Navigation;
