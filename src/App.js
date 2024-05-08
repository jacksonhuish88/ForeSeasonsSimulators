import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/About-Page";  // Assuming you have an AboutPage component
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router basename="/ForeSeasonsSimulators">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
