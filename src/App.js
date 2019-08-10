import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './scss/app.css';
import '../node_modules/aos/dist/aos.css'; 
import AOS from 'aos';

// NAVIGATION
import Nav from "./components/Nav";
// PAGES
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Contact from "./pages/Contact/ContactPage";
import Media from "./pages/Media/MediaPage";
import DrawingsPage from "./pages/Drawings/DrawingsPage";
import Blog from "./pages/Blog/BlogPage";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
}

class App extends Component {
  constructor(props){
    super(props);
    AOS.init();
  }

  componentWillReceiveProps (){ 
    AOS.refresh(); 
  } 

  render() {
    return (
      <div>
        <Nav />
          <Route onUpdate={ScrollToTop} exaxt={true} path="/about" component={About} />
          <Route onUpdate={ScrollToTop} exact path="/" component={Home} />
          <Route onUpdate={ScrollToTop} exact path="/contact" component={Contact} />
          <Route onUpdate={ScrollToTop} exact path="/media" component={Media} />
          <Route onUpdate={ScrollToTop} exaxt path="/blog" component={Blog} />
          <Route onUpdate={ScrollToTop} exact path="/drawings" component={DrawingsPage} />
      </div>
    );
  }
}

export default App;