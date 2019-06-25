import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import GetLocalArts from '../../components/LocalArts/GetLocalArts';

const DrawingsPage = () => (
  <Fragment>
    <h1>More for art</h1>
    <GetLocalArts/>
    <NavLink activeClassName="active" to="/media">
      part of me
    </NavLink>
  </Fragment>
);

export default DrawingsPage;
