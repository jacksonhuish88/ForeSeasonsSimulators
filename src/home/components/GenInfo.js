import React from "react";
import "../../App.css";
import "../Home.css";
import "../../bootstrap-grid.css";

function genInfo() {
  return (
    <>
      <section className="genInfo">
        <div className="row">
          <div className="col-6">
            <div
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "28px",
              }}
            >
              On Site Installation
            </div>
            <div>
              We wouldn't dream of shipping you a DIY box with some instructions
              and wishing you the best. Our experienced simulator technicians
              will install your simulator from start to finish so that all you
              have to worry about is how you're going to fix that slice.
            </div>
          </div>
          <div className="col-6">
            <div
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "28px",
              }}
            >
              What's Included
            </div>
            <div>
              We have partnered with manufactueres and local distributors to
              keep our prices low so that we can pass that savings on to you.
              The full set up includes a black out enclosure, high impact
              screen, locally sources turf and hitting mat, short throw 1080p
              projector, high speed gaming computer, launch monitor and optional
              putting holes.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default genInfo;
