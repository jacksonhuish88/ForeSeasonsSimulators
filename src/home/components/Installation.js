import React from "react";
import "../../App.css";
import "../Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import sim1 from "../components/img/sim_1.png";
import sim2 from "../components/img/sim_2.png";
import sim3 from "../components/img/sim_3.png";

function Installation() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed for your design
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-6 installation-right">
          <div className="text-center">
            <h1 style={{ fontSize: '36px' }}>At Home Installation</h1>
            <p style={{ fontSize: '18px' }}>
            We wouldn't dream of shipping you a DIY box with some instructions and wishing you the best. Our experienced simulator technicians will install your simulator from start to finish so that all you have to worry about is how you're going to fix that slice.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 installation-left">
          <div className="text-center">
            <Slider {...settings} className="carousel-slider">
              <div><img src={sim1} alt="Car 1" className="carousel-image"/></div>
              <div><img src={sim2} alt="Car 2" className="carousel-image"/></div>
              <div><img src={sim3} alt="Car 3" className="carousel-image"/></div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Installation;