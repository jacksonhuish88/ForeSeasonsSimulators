import React from "react";
import { useInView } from "react-intersection-observer";
import "../../App.css";
import "../Home.css";

function Included() {
  const { ref: from_left, inView: from_leftIsVisible } = useInView();
  const { ref: from_right, inView: from_rightIsVisible } = useInView();
  const styles = {
    fromLeft: "from-left",
    fromLeftSlide: "from-left-slide",
    fromRight: "from-right",
    fromRightSlide: "from-right-slide",
    item: "item",
  };
  return (
    <>
      <section className="grid-container three">
        <div
          ref={from_left}
          className={`${(styles.fromLeft, styles.item)} ${
            from_leftIsVisible ? styles.fromLeftSlide : ""
          }`}
        >
          <h1>Carousel of Images Goes Here</h1>
        </div>
        <div
          ref={from_right}
          className={`${(styles.fromRight, styles.item)} ${
            from_rightIsVisible ? styles.fromRightSlide : ""
          }`}
        >
          <h1>What's Included</h1>
          <p className="subheading">
            We have partnered with manufactueres and local distributors to keep
            our prices low so that we can pass that savings on to you. The full
            set up includes a black out enclosure, high impact screen, locally
            sources turf and hitting mat, short throw 1080p projector, high
            speed gaming computer, launch monitor and optional putting holes.
          </p>
        </div>
      </section>
    </>
  );
}

export default Included;
