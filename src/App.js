import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "./App.css";
import Particles from "react-particles-js";
import particlesOptions from "./components/particlesOptions/particlesOptions";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
const Clarifai = require("clarifai");
const app = new Clarifai.App({
  apiKey: "e56cf736e5d04edfb492f78268ed33e3"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      box: {}
    };
  }

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  calculateFaceLocation = data => {
    console.log(data);
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, width);
  };

  onButtonSubmit = () => {
    this.setState({ imageURL: this.state.input });
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input
      )
      .then(
        function(response) {
          console.log(response);
          this.calculateFaceLocation(response.outputs[0].data.regions[0].region_info.bounding_box);
          // do something with response
        },
        function(err) {
          // there was an error
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageURL={this.state.imageURL} />
      </div>
    );
  }
}

export default App;
