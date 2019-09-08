import React, { Component } from 'react';
import posts from './balance.js';
import './scss/balance-image.css';
// get posts from online api
// it's return a json file

class GetBalance extends Component {
  constructor(props){
      super(props);
      this.state = {            
          posts : posts            
      };
  }

  render() {
      const {posts} = this.state;
      let aosDelay = 50;
      return(
          <div className="balance-wrapper">
              
              {
                  posts.map(post => (
                      <div key={post.id} data-aos="fade-down" data-aos-delay={aosDelay + post.id*50} className={post.class} align="start">
                    
                        <img alt="some" className="img" src={post.image}/>
                        <img alt="some" className="img-stable" src={post.image}/>
                        <img alt="some" className="inverse" src={post.image}/>
                        <img alt="some" className="shade" src={post.image}/>

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

export default GetBalance;




