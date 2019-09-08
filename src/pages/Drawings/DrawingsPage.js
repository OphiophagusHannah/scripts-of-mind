import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import GetLocalArts from "../../components/LocalArts/GetLocalArts";

const DrawingsPage = () => (
  <Fragment>
    <GetLocalArts />
    {/* <NavLink className="jump-next next-blog" to="/contact">
      speak to me
    </NavLink> */}
  </Fragment>
);

export default DrawingsPage;
