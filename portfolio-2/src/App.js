import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home/Home";
import NavBar from "./components/navBar/NavBar";
import ParralaxImageOne from "./components/ParallaxImageOne";
import ParallaxImageTwo from "./components/ParallaxImageTwo";
import ParallaxImageThree from "./components/ParallaxImageThree";
import TextBoxOne from "./components/TextBoxOne";
import TextBoxTwo from "./components/TextBoxTwo";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>

      <ParralaxImageOne />
      <TextBoxOne />
      <ParallaxImageTwo />
      <TextBoxTwo />
      <ParallaxImageThree />
      <Footer /> 
    </Router>
  );
}

export default App;
