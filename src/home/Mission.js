import React from "react";
import "../App.css";
import "./Home.css";
import "../bootstrap-grid.css";

function Mission() {
  return (
    <>
      <div className="missionStatement">
        <div className="row">
          <div
            className="col-3 col-sm-12"
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "28px",
            }}
          >
            Our Mission
          </div>
          <div className="col-8 col-sm-12">
            Here at Fore Seasons Golf we take pride in making our simulator set
            ups fit your space and your budget –
            <span style={{ fontWeight: "bold" }}> NOT</span> the other way
            around.
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;
