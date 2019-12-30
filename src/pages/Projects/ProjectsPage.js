import React, { Fragment } from "react";
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from "../../components/ScrollToTop";
import PostList from "../../components/LocalProjects/GetLocalProjects";
import PostDetail from "../../components/LocalProjects/PostDetails";


const ProjectsPage = () => (
  <BrowserRouter>
    <Fragment>
      <ScrollToTop>
        <Switch>
          <Route exact path='/projects' component={PostList} />
          <Route path='/projects/:id' component={PostList} />
        </Switch>
      </ScrollToTop>

      {/* <PostList /> */}
      <div className="bottom-padding">
        <div className="footer">
          The purpose of this list of explorational pieces based on honesty and open representation of my thoughts, not based on the goal to sell my skillsets that do or do not exsist. In other words: I have no clue how to market myself properly.
        </div>
        {/* <NavLink className="jump-next next-blog"  to="/about">
      thought of mine
    </NavLink> */}
      </div>
    </Fragment>
  </BrowserRouter >
);

export default ProjectsPage;
