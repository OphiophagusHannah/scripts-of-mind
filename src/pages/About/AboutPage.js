// import React, { Fragment, Component } from "react";
// import projects from '../../components/LocalProjects/projects.js';
// import PostDetail from '../../components/LocalProjects/PostDetails';
// import PostList from '../../components/LocalProjects/GetLocalProjects';
// import ScrollToTop from "../../components/ScrollToTop";
// import { Switch, Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { Link } from "react-router-dom";


// function ListItem(props) {
//   // Correct! There is no need to specify the key here:
//   return <div>{props.value}</div>;
// }

// class NumberList extends Component {
//   constructor(props) {
//     super(props);

//     let selectedPostId = "parseInt(props.match.params.id, 10)";

//     console.log('created new PostList with post id:');
//     console.log(selectedPostId);

//     this.state = {
//       posts: [],
//       selectedPostId: selectedPostId,
//       //isShow: true
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

//   toggle() {
//     this.setState({ addClass: !this.state.addClass });
//   }

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

//   render() {
//     let boxClass = ["fetching-box"];
//     if (this.state.addClass) {
//       boxClass.push('closed');
//     }

//     let postDetail = '';

//     if (this.state.posts.length) {

//       let post = this.state.posts.find(post => post.id === this.state.selectedPostId);

//       if (post) {
//         postDetail = (<PostDetail post={post} />);
//       }
//     }

//     const numbers = [
//       { id: 1, content: "Space oriented interfaces. Projected interfaces" },
//       { id: 2, content: "Learning Process, Precision of knowledge" },
//       {
//         id: 3,
//         content: "Transmision, Transition and Comprehension of Information"
//       },
//       { id: 4, content: "Holography, Vision, Optics." },
//       { id: 5, content: "Art and Feelings. Technologies of Materials." },
//       { id: 6, content: "Visualisation and Atmosphere." },
//       { id: 7, content: "Languages; structure and encoding." },
//       { id: 8, content: "Sensors. Sensorics. Sense" },
//       { id: 8, content: "Artoficial Intellegence + Augmented Reality = Artoficial Reality. (Neural Networks and Deep Learning, AR, VR interactions)" }
//     ];

//     let aosDelay = 50;

//     const listItems = numbers.map(number => (
//       <div
//         key={number.content.toString()}
//         data-aos="fade-left"
//         data-aos-delay={aosDelay + number.id * 50}
//       >
//         {number.content}
//       </div>
//     ));

//     const numbersMiss = [
//       { id: 1, content: "I am not focusing just on human." },
//       { id: 2, content: "Sense" }
//     ];


//     const listItemsMiss = numbersMiss.map(number => (
//       // Correct! Key should be specified inside the array.
//       <div
//         key={number.content.toString()}
//         data-aos="fade-left"
//         data-aos-delay={aosDelay + number.id * 50}
//       >
//         {number.content}
//       </div>
//     ));


//     const numbersPersonal = [
//       { id: 1, content: "I am not focusing just on human." },
//       { id: 2, content: "Sense" }
//     ];

//     const listItemsPersonalSkills = numbersPersonal.map(number => (
//       // Correct! Key should be specified inside the array.
//       <div
//         key={number.content.toString()}
//         data-aos="fade-left"
//         data-aos-delay={aosDelay + number.id * 50}
//       >
//         {number.content}
//       </div>
//     ));
//     const numbersDesign = [
//       { id: 1, content: "Concept and Ideation" },
//       {
//         id: 2,
//         content:
//           "Interactive Design, UX/UI + the ways how to implement ideas into current state of the world"
//       },
//       {
//         id: 3,
//         content: "Prototyping: Low/Medium/High Fidelity, Rapid Prototyping."
//       },
//       { id: 4, content: "Visualization and Graphics: Digital/Traditional" },
//       { id: 5, content: "Information Visualization" },
//       {
//         id: 6, content: "<a href='/projects/1' > Information Architecture</a> and structures" },
//       { id: 7, content: "Conversational interfaces." },
//       { id: 8, content: "High understanding of Web and Digital Interfaces." }
//     ];

//     const listItemsDesignSkills = numbersDesign.map(number => (
//       // Correct! Key should be specified inside the array.
//       <div
//         key={number.content.toString()}
//         data-aos="fade-left"
//         data-aos-delay={aosDelay + number.id * 50}
//       >
//         {number.content}
//       </div>
//     ));


//     const numbersTech = [
//       {
//         id: 1,
//         content:
//           "JS, Advanced CSS, SASS, PHP, Python, JSON, C#, Processing, SVG, WebGL, Three.js, D3, JQuery, React, Angular, Various Frameworks, Python + TensowFlow and PyTorch."
//       },
//       {
//         id: 2,
//         content:
//           "Prototyping and Graphics: Proto.io, InVision, Justinmind, Balsamiq, Sketch, Axure, Adobes, Gimp, Inkscape, Krita."
//       },
//       { id: 3, content: "Arduino, basic understanding of circuit." }
//     ];

//     const listItemsTech = numbersTech.map(number => (
//       // Correct! Key should be specified inside the array.
//       <div
//         key={number.content.toString()}
//         data-aos="fade-left"
//         data-aos-delay={aosDelay + number.id * 50}
//       >
//         {number.content}
//       </div>
//     ));

//     return (

//       <BrowserRouter>
//         < Fragment >
//           <div className={boxClass.join(' ')}>
//             <div className="about-box">

//               <div className="project-content">
//                 <div className="project-content-inner">
//                   <div className="sources-list">
//                     <a
//                       href="../resume.pdf"
//                       target="_blank"
//                       className="bold"
//                       data-aos="fade-left"
//                       data-aos-delay="550"
//                     >
//                       CV
//               </a>
//                     <a
//                       href="https://codepen.io/ophiophagus_hannah"
//                       target="_blank"
//                       className="bold"
//                       data-aos="fade-left"
//                       data-aos-delay="600"
//                     >
//                       Codepen
//         </a>
//                     <a
//                       href="https://www.linkedin.com/in/hannabahdanava/"
//                       target="_blank"
//                       className="bold"
//                       data-aos="fade-left"
//                       data-aos-delay="650"
//                     >
//                       Linkedin
//         </a>
//                     <a
//                       href="https://github.com/OphiophagusHannah"
//                       target="_blank"
//                       className="bold"
//                       data-aos="fade-left"
//                       data-aos-delay="700"
//                     >
//                       Github
//         </a>
//                   </div>

//                   <div className="focus-list">
//                     <h2 className="h1 title-blog" data-aos="fade-left" data-aos-delay="200">
//                       Seeing and Seeking
//       </h2>
//                     {listItemsMiss}

//                   </div>
//                   <div className="focus-list">
//                     <h2 className="h1 title-blog" data-aos="fade-left" data-aos-delay="200" >


//                           Personal Focus



//                     </h2>

//                     <div

//                       data-aos="fade-left"

//                     >
//                       1. Concept and Ideation.
//     </div>
//                     <div

//                       data-aos="fade-left"

//                     >
//                       2. Interactive Design, UX/UI + the ways how to implement ideas into current state.
//                           </div>
//                     <div

//                       data-aos="fade-left"

//                     >
//                       3. Prototyping: Low/Medium/High Fidelity, Rapid Prototyping.
//                           </div>
//                     <div

//                       data-aos="fade-left"

//                     >
//                       4. Visualization and Graphics: Digital/Traditional.
//                           </div>
//                     <div

//                       data-aos="fade-left"

//                     >
//                       5. Information Visualization.
//                           </div>
//                     <div

//                       data-aos="fade-left"

//                     >
//                       6. {<Link to={`/projects/1`} onClick={this.toggle.bind(this)}>Information Architecture and structures.</Link>}
//                           </div>
//                     <div

//                       data-aos="fade-left"

//                     >
//                       7. Conversational interfaces.
//                           </div>
//                     <div

//                       data-aos="fade-left"

//                     >
//                       8. High understanding of Web and Digital Interfaces.
//                     </div>


//                   </div>



//                   <div className="focus-list">
//                     <h2 className="h1 title-blog" data-aos="fade-left" data-aos-delay="200">
//                       Design Skills
//       </h2>
//                     {listItemsDesignSkills}
//                   </div>

//                   <div className="focus-list">
//                     <h2 className="h1 title-blog" data-aos="fade-left" data-aos-delay="200">
//                       Technical Skills
//       </h2>
//                     {listItemsTech}
//                   </div>
//                   <div className="focus-list">
//                     <h2 className="h1 title-blog" data-aos="fade-left" data-aos-delay="200">
//                       Personal Skills
//       </h2>
//                     {listItemsPersonalSkills}
//                   </div>


//                   <div>
//                     <h2 className="h1" data-aos="fade-left" data-aos-delay="200" >
//                       Story
//         </h2>
//                     <p data-aos="fade-left" data-aos-delay="200">
//                       I was.
//         </p>
//                   </div>
//                   <div>
//                     <h2 className="h1" data-aos="fade-left" data-aos-delay="200">
//                       Present
//         </h2>
//                     <p data-aos="fade-left" data-aos-delay="200">
//                       Is. Now.
//         </p>
//                   </div>
//                   <div>
//                     <h2 className="h1" data-aos="fade-left" data-aos-delay="200">
//                       Future
//         </h2>
//                     <p data-aos="fade-left" data-aos-delay="200">
//                       And Persuing
//         </p>
//                   </div>

//                   {postDetail}
//                 </div>

//               </div >
//             </div>
//           </div>
//           <ScrollToTop>
//             <Switch>
//               <Route exact path='/projects' component={PostList} />
//               <Route path='/projects/:id' component={PostList} />
//             </Switch>
//           </ScrollToTop>
//         </Fragment >
//       </BrowserRouter >
//     )
//   }
// }



// export default NumberList;
