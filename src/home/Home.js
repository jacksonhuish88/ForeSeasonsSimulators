import React from "react";
import "../App.css";
import "./Home.css";
import NavBar from "./components/NavBar";
import Mission from "./components/Mission";
import GenInfo from "./components/GenInfo";
import Simulators from "./components/Simulators";
import Quote from "./components/Quote";

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <body>
        <Mission></Mission>
        <GenInfo></GenInfo>
        <Simulators></Simulators>
        <Quote></Quote>
      </body>
    </>
  );
}

export default Home;
