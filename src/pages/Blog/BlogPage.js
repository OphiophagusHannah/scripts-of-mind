import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import GetLocalPosts from '../../components/LocalPosts/GetLocalPosts';


const BlogPage = () => (
  <Fragment>
    <h1>Process and progress</h1>
    <GetLocalPosts/>
    <NavLink className="jump-next next-blog" to="/drawings">
      more of mine
    </NavLink>
  </Fragment>
);

export default BlogPage;
