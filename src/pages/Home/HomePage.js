import React, { Fragment } from "react";
import GetLocalProjects from '../../components/LocalProjects/GetLocalProjects';
import { NavLink } from "react-router-dom";

const HomePage = () => (
  <Fragment>
    <GetLocalProjects/>
    <div className="bottom-padding">
    <NavLink className="jump-next"  to="/about">
      thought of mine
    </NavLink>
    </div>
  </Fragment>
);

export default HomePage;
