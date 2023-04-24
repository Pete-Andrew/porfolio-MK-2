import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Jumbotron from "../jumbotron/Jumbotron";
import HomeContainer from "../homeContainer/HomeContainer";
import "./home.css";
import About from "../about/About";

function Home() {
  return (
    <div id="homepage">
      {HomeContainer()};
      {/* {About()}; */}
      {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
    </div>
  );
}

export default Home;
