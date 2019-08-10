import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";


function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <div>{props.value}</div>;
}



const MediaPage = () => (
  <Fragment>
    <div className="about-box">
      
    </div>
    <NavLink className="jump-next next-blog" to="/drawings">
      part of me
    </NavLink>
  </Fragment>
);

export default MediaPage;
