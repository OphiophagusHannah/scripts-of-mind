import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import GetLocalPosts from '../../components/LocalPosts/GetLocalPosts';


const BlogPage = () => (
  <Fragment>
        <h1>Process and progress</h1>
    <GetLocalPosts/>

  </Fragment>
);

export default BlogPage;
