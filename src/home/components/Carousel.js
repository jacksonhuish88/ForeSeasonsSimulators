import React from "react";
import "../../App.css";
import "../Home.css";
import "../../bootstrap-grid.css";

const Carousel = (props) => {
  const { children } = props;

  return (
    <>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <button className="left-arrow">&lt;</button>
          <div className="carousel-content-wrapper">
            <div className="carousel-content">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
