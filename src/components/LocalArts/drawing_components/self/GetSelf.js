import React, { Component } from 'react';
import posts from './self.js';
import './scss/self.css';
// get posts from online api
// it's return a json file

class GetSelf extends Component {
  constructor(props){
      super(props);
      this.state = {            
          posts : posts            
      };
     
  }

  render() {
      const {posts} = this.state;
      return(
          <div className="nv-wrapper">
              
              {
                  posts.map(post => (
                      <div key={post.id} className={post.class} align="start">
                        <img alt="some" className="inverse" src={post.image}/>
                        <img alt="some" className="shade" src={post.image}/>
                        <img alt="some" className="img" src={post.image}/>

                      </div>

                  ))
      }
      <Display></Display>

             

          </div>
      );
  }
}


class Display extends Component {
render() {
      return(
          <div className="fetching-box"></div>

      );
  }
}

export default GetSelf;