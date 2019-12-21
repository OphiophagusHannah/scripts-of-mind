import React, { Component } from "react";
import posts from "./posts.js";
import ReactHtmlParser from "react-html-parser";
import ProgressBar from "react-scroll-progress-bar";


class GetLocalPosts extends Component {
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
      currentContent: post.content,
      currentDate: post.date,
      currentExcerpt: post.excerpt,
      currentTitle: post.title
    });
  };

  render() {
    let aosDelay = 50;

    let { width, height } = this.props;

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
            <div className="p">{ReactHtmlParser(this.state[key])}</div>
          </div>
        );
      }
    }

    let greeting = (
      <div className="fetching-box open" id="fetching-box">
        <ProgressBar />
        <div className="close-button" onClick={this.toggleShow}></div>
        <div className="post-content" id="post-content" data-aos="fade-down">
          <div className="project-content">
            <div className="project-content-inner" >
              <h2 className="project-title">{this.state.currentTitle}</h2>
              <p class="p">{this.state.currentDate}</p>
              <p class="p">{this.state.currentContent}</p>
            </div>
          </div>
        </div>
      </div>
    );

    let postsobjects = this.state.posts.map((post, index) => (
      <div
        key={post.id}
        align="start"
        className="blog-item"
        data-aos="fade-left" data-aos-delay={aosDelay + post.id * 50}
        onMouseEnter={() => this.fetchData(post)}
        onClick={this.toggleShow}
        to={`/${post.title}`}
      >
        <h2 className="title-blog">{post.title}</h2>
        <span className="bold">{post.date}</span>
        <p>{post.excerpt}</p>
      </div>
    ));

    return (
      <div className="blog-parent" id="blog-parent">
        <Greeting greeting={greeting} isShow={!this.state.isShow} />
        <PostsObjects postsobjects={postsobjects} isShow={this.state.isShow} />
      </div>
    );
  }
}

let PostsObjects = ({ postsobjects, isShow }) =>
  isShow ? <div>{postsobjects}</div> : null;

const Greeting = ({ greeting, isShow }) => (isShow ? greeting : null);

export default GetLocalPosts;
