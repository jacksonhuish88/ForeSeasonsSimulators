import React from "react";
import "../App.css";
import "./Home.css";
import NavBar from "./components/NavBar";
import Mission from "./components/Mission";
import GenInfo from "./components/GenInfo";
import Simulators from "./components/Simulators";
import Quote from "./components/Quote";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <body>
        <NavBar></NavBar>
        <div class="wrapper">
          <Mission></Mission>
          <GenInfo></GenInfo>
          <Quote></Quote>
        </div>
      </body>
    </>
  );
}

export default Home;
