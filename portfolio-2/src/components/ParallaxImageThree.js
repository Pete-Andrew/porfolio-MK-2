import { Parallax } from "react-parallax";
import StillLife from "./images/still-life-render.jpg";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

const imageOne = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={StillLife}
    bgImageAlt="the cat"
    strength={800}
  >

  </Parallax>
);

export default imageOne;
