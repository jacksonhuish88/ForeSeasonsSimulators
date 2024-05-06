import React from "react";
import "../../App.css";
import "../Home.css";
import simulator from "./img/sim_1.png";

function Installation() {
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-5 installation-left">
          <div className="text-center">
              <img src={simulator} alt="Simulator Installation" style={{ maxWidth: 'auto', height: '38vh' }}/>
            </div>
        </div>
        <div className="col-12 col-md-7 installation-right">
          <div className="text-center">
          <h1 style={{ fontSize: '36px' }}>At Home Installation</h1>
            <p style={{ fontSize: '18px' }}>
              We wouldn't dream of shipping you a DIY box with some instructions and wishing you the best. Our experienced simulator technicians will install your simulator from start to finish so that all you have to worry about is how you're going to fix that slice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Installation;

