import React, { Component } from 'react';
import secondary_posts from './secondary_posts.js';
// get posts from online api
// it's return a json file
class GetSecondaryPosts extends Component {
    constructor(props){
        super(props);
        this.state = {            
            secondary_posts : secondary_posts            
        };
    }
    render() {
        const {secondary_posts} = this.state;
        return(
            <div>
                <ul className="item">
                {
                    secondary_posts.map(secondary_post => (
                        <li key={secondary_post.id} align="start">
                            <div>
                                <p className="title-secondary">{secondary_post.title}</p>
                                
                            </div>
                        </li>
                    ))
                }
                </ul>
            </div>
        );
    }
  }
  
  export default GetSecondaryPosts;