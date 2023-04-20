import { useRef, useLayoutEffect, createContext } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);
const Scroll = () => {
  const main = useRef(null);
  useLayoutEffect(() => {
    const cxt = gsap.context((self) => {
      const boxes = self.selector(".box");
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 500,
          duration: 5,
          ease: Power3.easeInOut,
          scrollTrigger: {
            trigger: ".box-c",
            pin: true,
            start: "center center",
            end: "+=300",
            scrub: 1,
            marker: true,
          },
        });
      });
    }, main);
    return () => cxt.revert(); //ctx지워
  }, []);
  return (
    <div>
      <section class="section flex-center column">
        <h1>abcd</h1>
        <h2>abcd</h2>
      </section>
      <section class="section flex-center column" ref={main}>
        <div className="box box-a">a</div>
        <div className="box box-b">b</div>
        <div className="box box-c">c</div>
      </section>
      <section class="section flex-center column">
        <h1>abcd</h1>
        <h2>abcd</h2>
      </section>
    </div>
  );
};
export default Scroll;