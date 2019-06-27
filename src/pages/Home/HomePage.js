import React, { Fragment } from "react";
import GetLocalProjects from '../../components/LocalProjects/GetLocalProjects';
import { NavLink, Link } from "react-router-dom";

const HomePage = () => (
  <Fragment>
    <GetLocalProjects/>
    <NavLink className="jump-next"  to="/about">
      thought of mine
    </NavLink>
  </Fragment>
);

export default HomePage;
