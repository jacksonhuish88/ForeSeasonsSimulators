import React from "react";
import "../../App.css";
import "../Home.css";

import "../../bootstrap-grid.css";
import Carousel from "./Carousel";

function genInfo() {
  return (
    <>
      <section className="two">
        <div className="row">
          <div className="col-6">
            <h1>On Site Installation</h1>
            <p className="subheading">
              We wouldn't dream of shipping you a DIY box with some instructions
              and wishing you the best. Our experienced simulator technicians
              will install your simulator from start to finish so that all you
              have to worry about is how you're going to fix that slice.
            </p>
          </div>
          <div className="col-6">
            <h1>What's Included</h1>
            <p className="subheading">
              We have partnered with manufactueres and local distributors to
              keep our prices low so that we can pass that savings on to you.
              The full set up includes a black out enclosure, high impact
              screen, locally sources turf and hitting mat, short throw 1080p
              projector, high speed gaming computer, launch monitor and optional
              putting holes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default genInfo;
