import React, { Component } from "react";
import posts from "./projects.js";
import { Link } from "react-router-dom";

// get posts from online api
// it's return a json file

class GetLocalProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: posts,
      isShow: true
    };
  }

  toggleShow = e => {
    e.preventDefault();
    this.setState(state => ({ isShow: !state.isShow }));
    window.scrollTo(0, 0);
  };

  fetchData = post => {
    this.setState({
      currentBody: post.image,
      currentStatus: post.status,
      currentContent: post.content,
      currentTitle: post.title,
      currentDescription: post.description,
      currentProblem: post.problem,
      currentPurpose: post.purpose,
      currentNote: post.note,
      currentStructure: post.structure,
      currentInteraction: post.interaction,
      currentDiscussion: post.discussion,
      currentAdditional: post.additional,
      currentFurther: post.further,
      currentDate_start: post.date_start,
      currentDate_end: post.date_end,
      currentIn_process: post.in_process,
      currentComplete: post.complete,
      currentPersonal: post.personal,
      currentRole: post.role,
      currentSkills: post.skills,
      currentDeliverable: post.poc_type,
      currentLink: post.link
    });
  };

  render() {
    let aosDelay = 50;

    let out = {};
    for (let key in this.state) {
      if (!this.state.hasOwnProperty(key)) {
        continue;
      }

      let render_key = key.replace("current", "__");
      let lowkey = render_key.toLocaleLowerCase();

      if (this.state[key]) {
        out[key] = (
          <div className={lowkey}>
            <h3 className="bold">{lowkey}</h3>
            <p>{this.state[key]}</p>
          </div>
        );
      }
    }

    let greeting = (
      <div className="fetching-box open">
        <div className="close-button" onClick={this.toggleShow}></div>
        <div className="post-content" data-aos="fade-down">
          <h2 className="project-title">{this.state.currentTitle}</h2>
          <div className="project-content">
            <div className="project-content-inner">
              {out.currentDescription}
              {out.currentProblem}
              {out.currentPurpose}
              {out.currentNote}
              {out.currentStructure}
              {out.currentInteraction}
              {out.currentDiscussion}
              {out.currentAdditional}
              {out.currentFurther}
              {out.currentDate_start}
              {out.currentDate_end}
              {out.currentIn_process}
              {out.currentComplete}
              {out.currentPersonal}
              {out.currentRole}
              {out.currentSkills}
              {out.currentDeliverable}
              {out.currentLink}
            </div>
          </div>
        </div>
      </div>
    );

    let postsobjects = this.state.posts.map((post, index) => (
      <div
        key={post.id}
        align="start"
        className="project-item"
        onMouseEnter={() => this.fetchData(post)}
        onClick={this.toggleShow}
        to={`/${post.title}`}
      >
        <div
          data-aos="fade-left"
          data-aos-delay={aosDelay + post.id * 50}
          className="project-title-home"
        >
          {index + 1}⋅⋅{post.title.replace(" ", "_")}
        </div>
        <span data-aos="fade-left" data-aos-delay={aosDelay + post.id * 50}>
          {post.span}
        </span>
      </div>
    ));

    return (
      <div className="home-parent">
        <Greeting greeting={greeting} isShow={!this.state.isShow} />
        <PostsObjects postsobjects={postsobjects} isShow={this.state.isShow} />
      </div>
    );
  }
}

let PostsObjects = ({ postsobjects, isShow }) =>
  isShow ? <div>{postsobjects}</div> : null;

const Greeting = ({ greeting, isShow }) => (isShow ? greeting : null);

export default GetLocalProjects;
