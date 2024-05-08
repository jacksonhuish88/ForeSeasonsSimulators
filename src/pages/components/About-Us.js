import React from "react";
import "../../App.css";
import "../Home.css";
import "./css/about-us.css";

function AboutUs() {
  return (
    <section className="container-fluid container-mission text-center bg-dark text-white about-us" id="about-us">
      <div className="row align-items-center justify-content-center" style={{ height: '50vh' }}>
        <div className="col-12">
          <h1 className="display-6">About Us</h1>
          <p className="about-us-paragraph">
            Welcome to Fore Season Simulators, where our passion for golf and innovation thrives in challenging times. 
            When COVID-19 limited our access to golf courses, brothers Garrett and Coby refused to let obstacles hinder their love for the game. 
            Determined to provide a solution, we ventured into building affordable golf simulators.
          </p>
          <p className="about-us-paragraph">
            Through dedication and expertise in technology, we crafted immersive experiences that bring the joy of golf to your doorstep. 
            More than just recreation, our simulators aim to democratize access to the sport, empowering players of all levels to improve their game from the comfort of home. 
            At Fore Season Simulators, we're driven by a vision of a more inclusive golfing community, where passion and skill know no bounds. 
            Join us on our journey to redefine the way we play and experience golf, one swing at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
