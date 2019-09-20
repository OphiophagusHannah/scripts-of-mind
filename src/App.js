import React, { Component } from "react";
import { BrowserRouter as Router, withRouter, Route } from "react-router-dom";

import "./scss/app.css";
import "../node_modules/aos/dist/aos.css";
import AOS from "aos";

// NAVIGATION
import Nav from "./components/Nav";


class App extends Component {
  constructor(props) {
    super(props);
    AOS.init();
  }

  componentWillReceiveProps() {
    AOS.refresh();
  }

  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

export default App;
