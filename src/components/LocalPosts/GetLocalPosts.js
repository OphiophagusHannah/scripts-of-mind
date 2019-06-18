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
 
    render() {
        const {posts} = this.state;
        return(
            <div className="main">
                <ul className="item">
                {
                    posts.map(post => (
                        <li key={post.id} align="start">
                            <a className="title" >{post.id}.{post.title}</a>
                            <span>{post.body}</span>
                        </li>

                    ))
				}
				<Display></Display>

                </ul>

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
  
export default GetLocalPosts;