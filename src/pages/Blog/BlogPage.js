import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import GetLocalPosts from '../../components/LocalPosts/GetLocalPosts';


const BlogPage = () => (
  <Fragment>
    <div className="about-box">
      {/* <h1 data-aos="fade-left" className="h1" data-aos-delay="150">Process and progress</h1> */}
  
      <GetLocalPosts/>
    </div>
    <NavLink className="jump-next next-blog" to="/drawings">
      more of mine
    </NavLink>
  </Fragment>
);

export default BlogPage;
