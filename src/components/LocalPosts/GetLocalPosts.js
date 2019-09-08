import React, { Component } from "react";
import posts from "./posts.js";

class GetLocalPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: posts.reverse(),
      addClass: false,
      hover: false
    };
  }

  fetchData = post => {
    this.setState({
      currentBody: post.image,
      currentContent: post.content,
      currentDate: post.date,
      currentExcerpt: post.excerpt,
      currentTitle: post.title
    });
  };

  toggle() {
    this.setState({ addClass: !this.state.addClass });
  }

  render() {
    let aosDelay = 50;

    let boxClass = ["blog-box"];
    if (this.state.addClass) {
      boxClass.push("open");
    }

    let homeClass = ["blog-list"];
    if (this.state.addClass) {
      homeClass.push("closed");
    }

    const postsobjects = this.state.posts.map(post => (
      <div
        data-aos="fade-left"
        data-aos-delay={aosDelay + post.id * 50}
        key={post.id}
        align="start"
        className="blog-item"
        onMouseEnter={() => this.fetchData(post)}
        onClick={this.toggle.bind(this)}
      >
        <h2 className="title-blog">{post.title}</h2>
        <span className="bold">{post.date}</span>
        <p>{post.excerpt}</p>
      </div>
    ));

    return (
      <div className="blog-parent">
        <div className={boxClass.join(" ")}>
          <div className="post-content">
            <h2 className="title">{this.state.currentTitle}</h2>
            <p>{this.state.currentDate}</p>
            <p>{this.state.currentContent}</p>
            <div className="prev-next">
              <div className="button-prev">prev</div>
              <div className="button-next">next</div>
            </div>
          </div>
          <div className="close-button" onClick={this.toggle.bind(this)}>
            close
          </div>
        </div>
        <div className={homeClass.join(" ")}>{postsobjects}</div>
      </div>
    );
  }
}

export default GetLocalPosts;
