import React, { Component } from "react";
import projects from "./projects.js";
import ProjectDetail from './PostDetails';
import { Link } from "react-router-dom";

import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import ProgressBar from "react-scroll-progress-bar";

function RenderMenuItem({ project, onClick }) {
  let aosDelay = 50;
  return (

    <Card>
      <Link to={`/menu/${project.id}`} >



        <div key={project.id} align="start"
          className="project-item" >
          <div

            data-aos="fade-left"
            data-aos-delay={aosDelay + project.id * 50}
            className="project-title-home"
          >{project.id}⋅⋅{project.title.replace(" ", "_")}              </div>
          <span
            data-aos="fade-left" data-aos-delay={aosDelay + project.id * 50}
          >
            {project.span}
          </span>
        </div>

      </Link>
    </Card>
  );
}

const Menu = (props) => {

  const menu = props.projects.map((project) => {
    return (
      <div key={project.id} className="col-3 col-md-6 m-1">
        <RenderMenuItem project={project} onClick={project.onClick} />

      </div>
    );
  });

  return (
    <div className="container">
      {/* <div className="row">
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div> */}
      <div className="row">
        <div className="home-parent" id="home-parent" >
          {menu}
        </div>
      </div>
    </div>
  );
}

export default Menu;

// class PostList extends Component {
//   constructor(props) {
//     super(props);

//     let selectedPostId = parseInt(props.match.params.id, 10);

//     console.log('created new PostList with post id:');
//     console.log(selectedPostId);

//     this.state = {
//       posts: [],
//       selectedPostId: selectedPostId,
//       addClass: false
//     };



//     this.fetchAllPosts().then((allPosts) => {
//       this.setState({
//         posts: allPosts,
//         selectedPostId: this.state.selectedPostId
//       });


//       console.log('state updated. this.state posts is:');
//       console.log(this.state.posts);


//     });
//   }



//   toggleShow = e => {
//     e.preventDefault();
//     this.setState(state => ({ isShow: !state.isShow }));
//     window.scrollTo(0, 0);
//   };

//   fetchAllPosts() {
//     return new Promise((resolve, reject) => {
//       let posts = projects;
//       resolve(posts);
//     });
//   }

//   componentWillReceiveProps(newProps) {

//     let selectedPostId = parseInt(newProps.match.params.id, 10);

//     this.setState((state) => {
//       return { selectedPostId: selectedPostId };
//     });
//   }

//   toggle() {
//     this.setState({ addClass: !this.state.addClass });
//   }

//   render() {

//     let boxClass = ["fetching-box"];
//     if (this.state.addClass) {
//       boxClass.push('closed');
//     }

//     let aosDelay = 50;

//     let loading = (<p>Fetching data from server...</p>);
//     let postDetail = '';

//     if (this.state.posts.length) {
//       loading = '';

//       let post = this.state.posts.find(post => post.id === this.state.selectedPostId);

//       if (post) {
//         postDetail = (<PostDetail post={post} />);
//       }

//     }

//     return (
//       <div className="home-parent" id="home-parent" >

//         <div className={boxClass.join(' ')}>

//           {
//             this.state.posts.map(p => (

//               <Link to={`/projects/${p.id}`} onClick={this.toggle.bind(this)}>
//                 <div key={p.id} align="start"
//                   className="project-item" >
//                   <div

//                     data-aos="fade-left"
//                     data-aos-delay={aosDelay + p.id * 50}
//                     className="project-title-home"
//                   >{p.id}⋅⋅{p.title.replace(" ", "_")}              </div>
//                   <span
//                     data-aos="fade-left" data-aos-delay={aosDelay + p.id * 50}
//                   >
//                     {p.span}
//                   </span>
//                 </div></Link>

//             ))
//           }


//         </div>
//         {postDetail}
//       </div >

//     );
//   }
// }



// export default PostList;

