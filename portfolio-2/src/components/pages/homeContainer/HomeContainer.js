import React from "react";
import "./homeContainer.css";

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

      <div
        id="contentContainer"
        className="container-fluid justify-content-center"
      >
        <h1>About Me</h1>

         <img className="picOne" src={require("../../images/cuteKitten.jpg")} alt="picOne"></img>
        </div>
      </div>
    
  );
}

export default HomeContainer;
