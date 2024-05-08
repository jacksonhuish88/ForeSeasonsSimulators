import React from "react";
import "../App.css";
import "./Home.css";
import NavBar from "./components/NavBar";
import Mission from "./components/Mission";
import Installation from "./components/Installation";
import Quote from "./components/Quote";
import Footer from "./components/Footer";


function Home() {
  return (
    <>
      <body>
        <NavBar></NavBar>
        <Mission></Mission>
        <Installation></Installation>
        <Footer></Footer>
      </body>
    </>
  );
}

export default Home;
