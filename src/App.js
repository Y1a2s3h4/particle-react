import React from "react";
import logo from "./logo.svg";
import Particles from "react-particles-js";
import "./App.css";

const particlesOpt = {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 1850
      }
    },
    move: {
      speed: 12
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true
      }
    }
  }
};
function App() {
  return (
    <div className="particle_bg">
      <Particles params={particlesOpt} />
      <div className="App-container">
        <img src={logo} className="App-logo" />
        <h1 className="App-Title">Learning ReactJS</h1>
      </div>
    </div>
  );
}

export default App;
