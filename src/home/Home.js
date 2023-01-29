import React from "react";
import "../App.css";
import "./Home.css";
import NavBar from "./NavBar";
import Mission from "./Mission";
import GenInfo from "./GenInfo";
import Simulators from "./Simulators";
import Quote from "./Quote";

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Mission></Mission>
      <GenInfo></GenInfo>
      <Simulators></Simulators>
      <Quote></Quote>
    </>
  );
}

export default Home;
