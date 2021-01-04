import React, { Component } from "react";
import CatComponent from "./CatComponent.js";
import { GraceHopperQuoteComponent } from "./GraceHopperQuoteComponent.js";
//need brackets when we don't export default
import MouseComponent from "./MouseComponent.js";
//import the MouseComponent

class App extends Component {
  render() {
    // your code in the return statement below!
    return (
      <div className="App">
        <CatComponent />
        <GraceHopperQuoteComponent />
        <MouseComponent />
        {/* //add MouseComponent */}
      </div>
    );
  }
}

export default App;
