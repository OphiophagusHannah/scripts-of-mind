import React, { Component } from 'react';
import posts from './projects.js';
import { NavLink, Link } from "react-router-dom";
// get posts from online api
// it's return a json file

class GetLocalProjects extends Component {
 constructor(props){
    super(props);
    this.state = {
        posts : posts,
        addClass : false,
        hover: false
    };
}

fetchData = (post) => {
  this.setState({
    currentBody: post.image, 
    currentContent: post.content,
    currentTitle : post.title
  })
};

toggle() {
    this.setState({addClass: !this.state.addClass});
  }

  render() {
    let boxClass = ["fetching-box"];
    if(this.state.addClass) {
      boxClass.push('open');
    }

    let homeClass = ["home-list"];
    if(this.state.addClass) {
      homeClass.push('closed');
    }

    const postsobjects = this.state.posts.map((post) => 
      <li key={post.id} align="start" className="project-item"
      onMouseEnter={() => this.fetchData(post)} onClick={this.toggle.bind(this)}>
        <div className="project-title">{post.id}⋅⋅{post.title}</div>
        <span>{post.span}</span>
      </li>
    );

    return (
      <div className="home-parent">
        <div className={boxClass.join(' ')} >
          {/* <img className="main-image" src={this.state.currentBody}/> */}
          <div className="post-content">
            <h2 className="project-title">{this.state.currentTitle}</h2>
            <p>{this.state.currentContent}</p>
            <div className="prev-next">
              <div className="button-prev" >prev</div>
              <div className="button-next" >next</div>
            </div>
          </div>
          <div className="close-button" onClick={this.toggle.bind(this)}>close</div>
        </div> 
        <div className={homeClass.join(' ')} >{postsobjects}</div>
      </div>
    );
  }
}
  
export default GetLocalProjects;