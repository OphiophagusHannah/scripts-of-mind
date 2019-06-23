import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";

const MediaPage = () => (
  <Fragment>
    <h1>Outside Part</h1>
    <NavLink activeClassName="active" to="/contact">
    speak to me
            </NavLink>
  </Fragment>
);

export default MediaPage;
