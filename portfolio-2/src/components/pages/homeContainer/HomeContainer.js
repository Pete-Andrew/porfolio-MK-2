import React from "react";
import "./homeContainer.css";
import About from "../about/About";

function HomeContainer() {
  return (
    <div>
      <div
        id="contentContainer"
        className="container-fluid justify-content-center"
      >
        <h1>Welcome to my Portfolio!</h1>

        <a className="emailetc" href="https://github.com/Pete-Andrew">
          GitHub Profile
        </a>
        <a
          className="emailetc"
          href="https://www.linkedin.com/in/peter-a-2143b33a/"
        >
          LinkedIn
        </a>
        <a className="emailetc" href="mailto: peter.a.andrew@gmail.com">
          Email
        </a>
      </div>
      
      {/* <div className="content">
         {About()} </div> */}
      
   </div>
    
  );
}

export default HomeContainer;
