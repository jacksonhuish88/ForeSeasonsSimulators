import React from "react";
import Slider from "react-slick";
import "./css/installation.css";
import "./css/carousel.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import sim1 from "../components/img/sim_1.png";
import sim2 from "../components/img/sim_2.png";
import sim3 from "../components/img/sim_3.png";
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="container-fluid installation-section" id="installation">
      {/* AT HOME INSTALLATION SECTION */}
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0 text-white">
          <div className="text-center">
            <h1 className="mb-4">At Home Installation</h1>
            <p>
              We wouldn't dream of shipping you a DIY box with some instructions and wishing you the best. Our experienced simulator technicians will install your simulator from start to finish so that all you have to worry about is how you're going to fix that slice.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="text-center">
            <Slider {...settings} className="carousel-slider">
              <div><img src={sim1} alt="Simulator 1" className="img-fluid" /></div>
              <div><img src={sim2} alt="Simulator 2" className="img-fluid" /></div>
              <div><img src={sim3} alt="Simulator 3" className="img-fluid" /></div>
            </Slider>
          </div>
        </div>
      </div>

      {/* WHAT"S INCLUDED SECTION */}
      <div className="row justify-content-center align-items-center included-section" id="materials">
        <div className="col-lg-6 mb-4 mb-lg-0 text-white">
          <div className="text-center">
            <h1 className="mb-4">What's Included</h1>
         <p>
              We have partnered with manufacturers and local distributors to keep
              our prices low so that we can pass that savings on to you. The full
              setup includes:
            </p>
            <ul className="text-left">
              <li>A blackout enclosure and high impact screen</li>
              <li>Locally sourced turf and hitting mat</li>
              <li>Short throw 1080p projector</li>
              <li>High speed gaming computer</li>
              <li>Launch monitor</li>
              <li>Optional putting holes</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="text-center">
          <Slider {...settings} className="carousel-slider">
              <div>
                <img src={car1} alt="Hitting Pad" className="carousel-image"/>
                <p><span>Hitting Turf: </span>A simulator set up isn't complete without quality putting turf and a durable hitting pad.  Builds range from 120-400 sq. ft of turf and feature removable hitting strips or mats so that they can be easily swapped out when they are worn from use. Putting cups can be added at no additional cost.</p>
              </div>
              <div>
                <img src={car2} alt="Screen Material" className="carousel-image"/>
                <p><span>Impact Screen: </span>We have two of the highest quality impact screen materials on the market. You can choose between our single layer or tri-layer options. Both are ultra durable. The only difference is that the tri-layer is slightly quieter at impact and has a tighter weave for a crisper projected image.</p>
              </div>
              <div>
                <img src={car3} alt="Swing Sensor" className="carousel-image"/>
                <p><span>Swing Sensor Technology: </span>Each build varies in regards to space and budget. We will help you find a swing sensor, computer, and short throw projector combination that meet all of your needs. Fore Seasons is a certified reseller of a variety of sensors but the set ups are built as to allow any swing sensor you'd like. </p>
              </div>
              <div>
                <img src={car4} alt="Carpet Panels" className="carousel-image"/>
                <p><span>Protection Panels: </span>Our padded carpet panels adhere directly to your walls and ceiling to protect against sky balls and the dreaded hosel rocket. The black out panels not only protect your space but enhance the accoustics by absorbing extra sound.</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Installation;
