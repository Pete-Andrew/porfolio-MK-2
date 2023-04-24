import { Parallax } from "react-parallax";
import Desert from "./images/desert-render.jpg";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

const imageOne = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={Desert}
    bgImageAlt="the cat"
    strength={800}
  >
    
  </Parallax>
);

export default imageOne;
