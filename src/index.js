import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import createBrowserHistory from "history/createBrowserHistory";

import Home from "./pages/Home/HomePage";
import Projects from "./pages/Projects/ProjectsPage";
import About from "./pages/About/AboutPage";
import Contact from "./pages/Contact/ContactPage";
import Media from "./pages/Media/MediaPage";
import DrawingsPage from "./pages/Drawings/DrawingsPage";
import Blog from "./pages/Blog/BlogPage";
const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <ScrollToTop>
      <div>
        <Switch>
          <Route exaxt path="/about" component={About} />
          <Route exact={true} path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/media" component={Media} />
          <Route exaxt path="/blog" component={Blog} />
          <Route exact path="/drawings" component={DrawingsPage} />
        </Switch>
      </div>
    </ScrollToTop>

    <App />

  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
