import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordian from "./Components/accordian";
import RandomColor from "./Components/random-color";
import StarRating from "./Components/star-rating";
import ImageSlider from "./Components/image-slider";
import LoadMore from "./Components/load-more-data";
import TreeView from "./Components/tree-view";
import menus from "./Components/tree-view/data";
import QRCodeGenerator from "./Components/qr-code-generator";
import LightDarkmode from "./Components/light-dark-mode";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* accordian component */}
      {/* <Accordian /> */}
      {/* Random color generatr */}
      {/* <RandomColor /> */}
      {/* Star-rating */}
      {/* <StarRating noOfStars={10}/> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={"1"}/> */}
      {/* <LoadMore /> */}
      {/* <TreeView menus={menus}/> */}
      {/* <QRCodeGenerator /> */}

      <LightDarkmode />
    </div>
  );
}

export default App;
