// import React, { Component } from "react";
// import { BrowserRouter as Router, withRouter, Route } from "react-router-dom";

import "./scss/app.css";
import "../node_modules/aos/dist/aos.css";
import AOS from "aos";

// // NAVIGATION
// import Nav from "./components/Nav";


// class App extends Component {
//   constructor(props) {
//     super(props);
//     AOS.init();
//   }

//   componentWillReceiveProps() {
//     AOS.refresh();
//   }

//   render() {
//     return (
//       <div>
//         <Nav />
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';


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
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
