import React, { Component } from 'react';
import posts from './projects.js.js';
// get posts from online api
// it's return a json file

class GetLocalProjects extends Component {
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
      currentLink : post.link,
      currentBody: post.image, 
      currentContent: post.content,
      currentTitle : post.title,
      currentDescription: post.description,
      currentProblem : post.problem,
      currentPurpose : post.purpose,
      currentNote : post.note,
      currentStructure : post.structure,
      currentInteraction : post.interaction,
      currentDiscussion : post.discussion,
      currentAdditional : post.additional,
      currentFurther : post.further,
      currentDate_start : post.date_start,
      currentDate_end : post.date_end,
      currentIn_process : post.in_process,
      currentComplete : post.complete,
      currentPersonal : post.personal,
      currentRole : post.role,
      currentSkills: post.skills,
      currentDeliverable : post.poc_type,
      
    })
  };

  toggle() {
    this.setState({addClass: !this.state.addClass});
  }

  render() {
    let boxClass = ["fetching-box"];
    if(this.state.addClass) {
      boxClass.push('open');
    }

    let homeClass = ["home-list"];
    if(this.state.addClass) {
      homeClass.push('closed');
    }

    let aosDelay = 50;

    let out = {};
    for (let key in this.state) {
      if (!this.state.hasOwnProperty(key)) {
        continue;
      }

      let render_key = key.replace('current', '__');
      let lowkey = render_key.toLocaleLowerCase();

      if(this.state[key] ){
        out[key] = <div className={lowkey} ><h3>{lowkey}</h3>{this.state[key]}</div>;
      }
    }

    let postsobjects = this.state.posts.map((post) => 
      <li key={post.id} align="start" className="project-item" onMouseEnter={() => this.fetchData(post)} onClick={this.toggle.bind(this)}>
        <div data-aos="fade-left" data-aos-delay={aosDelay + post.id*50} className="project-title-home"  >{post.id}⋅⋅{post.title}</div>
        <span data-aos="fade-left" data-aos-delay={aosDelay + post.id*50}>{post.span}</span> 
      </li>
    );

    let itemList = this.state.posts.map((post) => 
    <li key={post.id} align="start" onClick={() => this.fetchData(post)}>
      <div data-aos="fade-left" data-aos-delay={aosDelay + post.id*50}  >{post.id}⋅⋅{post.title}</div>
    </li>
  );

    return (
      <div className="home-parent">
        <div className={boxClass.join(' ')} >
          {/* <img className="main-image" src={this.state.currentBody}/> */}
          <div className="post-content" data-aos="fade-down">
            <h2 className="project-title">{this.state.currentTitle}</h2>
            <div className="project-content" >
              {out.currentDescription}
              {out.currentProblem}
              {out.currentPurpose}
              {out.currentNote}
              {out.currentStructure}
              {out.currentInteraction}
              {out.currentDiscussion}
              {out.currentAdditional}
              {out.currentFurther}
              {out.currentDate_start}
              {out.currentDate_end}
              {out.currentIn_process}
              {out.currentComplete}
              {out.currentPersonal}
              {out.currentRole}
              {out.currentSkills}
              {out.currentDeliverable}
              {out.currentLink}

              
              {/* <div className="prev-next">
                <div className="button-prev" >prev</div>
                ⋅⋅
                <div  className="button-next" >next</div>
              </div> */}
              <div>
                {itemList}
              </div>
            </div>
              

          </div>
          <div className="close-button" onClick={this.toggle.bind(this)}>close</div>

        </div> 
        <div className={homeClass.join(' ')} >{postsobjects}           
        </div>
      </div>
    );
  }
}
  
export default GetLocalProjects;