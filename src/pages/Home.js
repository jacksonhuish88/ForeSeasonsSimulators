import React from "react";
import "../App.css";
import "./Home.css";
import NavBar from "./components/NavBar";
import Mission from "./components/Mission";
import Installation from "./components/Installation";
import Footer from "./components/Footer";
import ContactUs from "./components/Contact-Us";


function Home() {
  return (
    <>
      <body>
        <NavBar></NavBar>
        <Mission></Mission>
        <Installation></Installation>
        <ContactUs></ContactUs>
        <Footer></Footer>
      </body>
    </>
  );
}

export default Home;
