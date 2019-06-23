import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";

const BlogPage = () => (
  <Fragment>
    <h1>Process and progress</h1>
    <NavLink activeClassName="active" to="/drawings">
    more of mine
            </NavLink>
  </Fragment>
);

export default BlogPage;
