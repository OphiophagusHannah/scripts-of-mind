import React, { Fragment } from "react";
import GetLocalPosts from '../../components/LocalPosts/GetLocalPosts';
import { NavLink, Link } from "react-router-dom";

const HomePage = () => (
  <Fragment>
    <GetLocalPosts/>
    <NavLink activeClassName="active" to="/about">
              thought of mine
            </NavLink>
  </Fragment>
);

export default HomePage;
