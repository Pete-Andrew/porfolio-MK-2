import { Parallax } from "react-parallax";
import kitten from "./images/cuteKitten.jpg";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

const imageOne = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={kitten}
    bgImageAlt="the cat"
    strength={800}
  >
    <div className="content">
        {Home()}
        {/* {About()} */}
    </div>
  </Parallax>
);

export default imageOne;
