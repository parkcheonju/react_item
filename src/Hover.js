import React, { useRef } from "react";
import "./hover.css";

const Hover = () => {
  const bg = useRef(null);
  const thumb = useRef(null);
  const img = useRef(null);

  function scroll() {
    const bgH = bg.current.clientHeight;
    const imgH = img.current.clientHeight;
    const scrollVal = bgH - imgH;
    thumb.current.style.top = scrollVal + "px";

    console.log(bgH, imgH, scrollVal);
  }

  return (
    <div className="wrap">
      <div
        ref={bg}
        className="bg"
        onMouseOver={() => {
          scroll();
        }}
        onMouseLeave={() => {
          thumb.current.style.top = 0;
        }}
      >
        <a ref={thumb} href="#none" className="thumb">
          <span ref={img}></span>
        </a>
      </div>
    </div>
  );
};

export default Hover;