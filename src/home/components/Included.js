import React from "react";
import "../../App.css";
import "../Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import car1 from "../components/img/car_1.jpg";
import car2 from "../components/img/car_2.jpg";
import car3 from "../components/img/car_3.jpg";
import car4 from "../components/img/car_4.png";

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
        <div className="col-12 col-md-6 installation-left">
          <div className="text-center">
            <Slider {...settings} className="carousel-slider">
              <div><img src={car1} alt="Car 1" className="carousel-image"/></div>
              <div><img src={car2} alt="Car 2" className="carousel-image"/></div>
              <div><img src={car3} alt="Car 3" className="carousel-image"/></div>
              <div><img src={car4} alt="Car 4" className="carousel-image"/></div>
            </Slider>
          </div>
        </div>
        <div className="col-12 col-md-6 installation-right">
          <div className="text-center">
            <h1 style={{ fontSize: '36px' }}>What's Included</h1>
            <p style={{ fontSize: '18px' }}>
              We have partnered with manufacturers and local distributors to keep
              our prices low so that we can pass that savings on to you. The full
              setup includes a blackout enclosure, high impact screen, locally
              sourced turf and hitting mat, short throw 1080p projector, high
              speed gaming computer, launch monitor, and optional putting holes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Installation;
