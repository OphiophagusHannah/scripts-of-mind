import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";

const AboutPage = () => (
  <Fragment>
    <h1>Why am I?</h1>
    <NavLink activeClassName="active" to="/blog">
    words on mind
            </NavLink>
  </Fragment>
);

export default AboutPage;
