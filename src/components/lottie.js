import React from "react";
import lottie from "lottie-web";
import lottieAni from "./movebox.json";
import logo from "./logo.svg";

const Lottiet = () => {
  const box = React.useRef();
  React.useEffect(() => {
    lottie.loadAnimation({
      container: box.current,
      animationData: lottieAni,
      loop: true,
      autoplay: true,
    });
  }, []);
  return (
    <div ref={box} style={{ width: 200, height: 200, position: "relative" }} id="ani">
      <img src={logo} alt="logo" style={{width:20,height:20,position:"absolute"}}/>
    </div>
  );
};

export default Lottiet;
