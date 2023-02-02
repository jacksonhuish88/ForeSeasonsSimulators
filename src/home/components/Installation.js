import React from "react";
import { useInView } from "react-intersection-observer";
import "../../App.css";
import "../Home.css";

function Installation() {
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
      <section className="grid-container two">
        <div
          ref={from_left}
          className={`${(styles.fromLeft, styles.item)} ${
            from_leftIsVisible ? styles.fromLeftSlide : ""
          }`}
        >
          <h1>At Home Installation</h1>
          <p className="subheading">
            We wouldn't dream of shipping you a DIY box with some instructions
            and wishing you the best. Our experienced simulator technicians will
            install your simulator from start to finish so that all you have to
            worry about is how you're going to fix that slice.
          </p>
        </div>
        <div
          ref={from_right}
          className={`${(styles.fromRight, styles.item)} ${
            from_rightIsVisible ? styles.fromRightSlide : ""
          }`}
        >
          <h1 style={{ color: "black" }}>Reviews go Here</h1>
        </div>
      </section>
    </>
  );
}

export default Installation;
