import { Parallax } from "react-parallax";
import kitten from "./images/cuteKitten.jpg";

const imageOne = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={kitten}
    bgImageAlt="the cat"
    strength={800}
  >
    <div className="content"></div>

    {/* <div
      id="contentContainer"
      className="container-fluid justify-content-center"
    >
      <h1>About Me</h1>
      <img className="picOne" img={kitten} alt="picOne"></img>
    </div> */}

  </Parallax>
);

export default imageOne;
