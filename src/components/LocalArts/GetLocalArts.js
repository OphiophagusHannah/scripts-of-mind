import React, { Component } from 'react';
import posts from './arts.js';
// get posts from online api
// it's return a json file

class GetLocalArts extends Component {
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
    let boxClass = ["art-box"];
    if(this.state.addClass) {
      boxClass.push('open');
    }

    let homeClass = ["art-list"];
    if(this.state.addClass) {
      homeClass.push('closed');
    }

    const postsobjects = this.state.posts.map((post) => 
      <div key={post.id} align="start" className="item"
      onMouseEnter={() => this.fetchData(post)} onClick={this.toggle.bind(this)}>
        <div  className="title" ><img className="galimage" alt="preview-art" src={post.image}/><br/><h3>{post.title}</h3></div>
      </div>
    );

    return (
      <div className="parent">
        <div className={boxClass.join(' ')} >
          <div className="post-content">
            <img className="galimage" alt="alt" src={this.state.currentBody} />
            <h2 className="title">{this.state.currentTitle}</h2>
            <p>{this.state.currentContent}</p>
            <div className="prev-next">
              <div className="button-prev">prev</div>
              <div className="button-next">next</div>
            </div>

          </div>
          <div className="close-button" onClick={this.toggle.bind(this)}>close</div>
        </div> 
        <div className={homeClass.join(' ')} >{postsobjects}</div>

      </div>
    );
  }
}
  
export default GetLocalArts;