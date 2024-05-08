import React from "react";
import "../../App.css";
import "../Home.css";
import "./css/mission.css";

function Mission() {
  return (
    <section className="container-fluid container-mission text-center bg-dark text-white" id="mission">
      <div className="row align-items-center justify-content-center" style={{ height: '50vh' }}>
        <div className="col-12">
          <h1 className="display-6 fade-in">Our Mission</h1>
          <p className="lead fade-in">
            Here at Fore Seasons Golf we take pride in making our simulator setups fit your space and your budget —
            <strong> NOT</strong> the other way around.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;

