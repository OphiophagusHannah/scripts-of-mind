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
  this.setState({currentBody: post.body})
  console.log("clicked")
};

  render() {
    const postsobjects = this.state.posts.map((post) => 
      <li key={post.id} align="start">
        <a onClick={() => this.fetchData(post)} className="title" >{post.id}.{post.title}</a>
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