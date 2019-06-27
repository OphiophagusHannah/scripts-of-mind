import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import GetLocalArts from '../../components/LocalArts/GetLocalArts';

const DrawingsPage = () => (
  <Fragment>
    <h1>Open this Pandora</h1>
    <GetLocalArts/>
    <NavLink className="jump-next" to="/contact">
      speak to me
    </NavLink>
  </Fragment>
);

export default DrawingsPage;
