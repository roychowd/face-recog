import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "./App.css";
import Particles from "react-particles-js";
import particlesOptions from './components/particlesOptions/particlesOptions'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*<Logo />
        <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
