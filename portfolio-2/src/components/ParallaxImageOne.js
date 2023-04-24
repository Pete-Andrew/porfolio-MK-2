import { Parallax } from "react-parallax";
import Woman from "./images/medusa-necklace-woman.jpg";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

const imageOne = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={Woman}
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
