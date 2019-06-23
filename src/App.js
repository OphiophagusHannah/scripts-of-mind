import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './scss/app.css';
import GetLocalPosts from './components/LocalPosts/GetLocalPosts';

// NAVIGATION
import Nav from "./components/Nav";
// PAGES
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Contact from "./pages/Contact/ContactPage";
import Media from "./pages/Media/MediaPage";
import DrawingsPage from "./pages/Drawings/DrawingsPage";
import Blog from "./pages/Blog/BlogPage";


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
          <Route exaxt={true} path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/media" component={Media} />
          <Route exaxt path="/blog" component={Blog} />
          <Route exact path="/drawings" component={DrawingsPage} />
     
      </div>
    );
  }
}

export default App;