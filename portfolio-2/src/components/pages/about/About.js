import React from "react";
import "./about.css";

function About() {
  return (
    <div
        id="contentContainer"
        className="container-fluid justify-content-center"
      >
        <h1>About Me</h1>

         <img className="picOne" src={require("../../images/cuteKitten.jpg")} alt="picOne"></img>
        </div>
     
    
  );
}

export default About;
