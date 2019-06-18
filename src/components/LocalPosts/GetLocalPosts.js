import React, { Component } from 'react';
import posts from './posts.js';
// get posts from online api
// it's return a json file

class GetLocalPosts extends Component {
 constructor(props){
    super(props);
    this.state = {
        posts : posts
    };
}
fetchData = (post) => {
  console.log(this.state.currentBody)
  this.setState({currentBody: post.content})
  console.log("clicked")
};

  render() {
    const postsobjects = this.state.posts.map((post) => 
      <li key={post.id} align="start" className="item" onClick={() => this.fetchData(post)}>
        <a  className="title" >{post.id}.{post.title}</a>
        <span>{post.body}</span>
      </li>
    );
    return (
      <div className="parent">
        {postsobjects}
        <div className="fetching-box">{this.state.currentBody}</div> 
      </div>
    );
  }
}
  
export default GetLocalPosts;