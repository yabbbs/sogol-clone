import React, { Component } from "react";
import router from "./router";
import "./sass/App.css";

class App extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return <div>{router}</div>;
  }
}

export default App;
