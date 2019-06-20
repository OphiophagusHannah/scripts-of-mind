import React, { Component } from 'react';
import posts from './posts.js';
// get posts from online api
// it's return a json file

class GetLocalPosts extends Component {
 constructor(props){
    super(props);
    this.state = {
        posts : posts,
        addClass : false,
        hover: false
    };

}
fetchData = (post) => {
  this.setState({currentBody: post.content})
};

toggle() {
    this.setState({addClass: !this.state.addClass});
  }


  render() {

    let boxClass = ["fetching-box"];
    if(this.state.addClass) {
      boxClass.push('open');
    }
    const postsobjects = this.state.posts.map((post) => 
      <li key={post.id} align="start" className="item"
      onMouseEnter={() => this.fetchData(post)}>
        <a  className="title" >{post.id}.{post.title}</a>
        <span>{post.body}</span>
      </li>
    );
    return (
      <div className="parent">
        <div className={boxClass.join(' ')} onClick={this.toggle.bind(this)}>{this.state.currentBody}</div> 
        {postsobjects}
        
      </div>
    );
  }
}
  
export default GetLocalPosts;