import { useRef, useEffect } from "react";
import gsap from "gsap";
import logo from "./logo.svg";
import "./App.css";

function App1() {
  const logoItem = useRef(null);
  useEffect(() => {
    gsap.to(logoItem.current, 5, {
      y: 100,
      x: 100,
      rotate: 360,
      scale: 0.1,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} ref={logoItem} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App1;
