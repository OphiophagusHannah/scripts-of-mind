import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";


function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <div>{props.value}</div>;
}

function NumberList(props) {
  const numbers = props.numbers;
  let aosDelay = 50;
  const listItems = numbers.map((number) =>
    <div key={number.content.toString()} data-aos="fade-left" data-aos-delay={aosDelay + number.id* 50}>
      {number.content}
    </div>
  );
  return (
    <div className="focus-list">
      <h2 className="h1" data-aos="fade-left" data-aos-delay="200">Personal Focus</h2>
      {listItems}
    </div>
  );
}

const numbers = [
  { id: 1, content: 'Space oriented interfaces. Projected interfaces' },
  { id: 2, content: 'Learning Process, Precision of knowledge' },
  { id: 3, content: 'Transmision, Transition and Comprehension of Information' },
  { id: 4, content: 'Holography, Vision, Optics.' },
  { id: 5, content: 'Art and Feelings. Technologies of Materials.' },
  { id: 6, content: 'Visualisation and Atmosphere.' },
  { id: 7, content: 'Languages; structure and encoding.'},
  { id: 8, content: 'Sensors. Sensorics. Sense' }
];

function NumberMissList(props) {
  const numbersMiss = props.numbersMiss;
  let aosDelay = 50;
  const listItems = numbersMiss.map((number) =>
    // Correct! Key should be specified inside the array.
    <div key={number.content.toString()} data-aos="fade-left" data-aos-delay={aosDelay + number.id* 50}>
    {number.content}
  </div>
  );
  return (
    <div className="focus-list">
      <h2 className="h1" data-aos="fade-left" data-aos-delay="200">Mission Statement</h2>
      {listItems}
    </div>
  );
}

const numbersMiss = [
  { id: 1, content: 'I am not focusing just on human.' }, 
  { id: 2, content:'Sense' }
];

const numbersDesign = [
  { id: 1, content: 'Concept and Ideation' },
  { id: 2, content: 'Interactive Design, UX/UI + the ways how to implement ideas into current state' },
  { id: 3, content: 'Prototyping: Low/Medium/High Fidelity, Rapid Prototyping.' },
  { id: 4, content: 'Visualization and Graphics: Digital/Traditional' },
  { id: 5, content: 'Information Visualization' },
  { id: 6, content: 'Information Architecture and structures' },
  { id: 7, content: 'Conversational interfaces.'},
  { id: 8, content: 'High understanding of Web and Digital Interfaces.' }
];


function NumberDesign(props) {
  const numbersDesign = props.numbersDesign;
  let aosDelay = 50;
  const listItems = numbersDesign.map((number) =>
    // Correct! Key should be specified inside the array.
    <div key={number.content.toString()} data-aos="fade-left" data-aos-delay={aosDelay + number.id* 50}>
    {number.content}
  </div>   
  );
  return (
    <div className="focus-list">
      <h2 className="h1" data-aos="fade-left" data-aos-delay="200">Design Skills</h2>
      {listItems}
    </div>
  );
}



const numbersTech = [
  { id: 1, content: 'JS, Advanced CSS, SASS, PHP, JSON, C#, Processing, SVG, WebGL, Three.js, D3, JQuery, Various Frameworks.' },
  { id: 2, content: 'Prototyping and Graphics: Proto.io, InVision, Justinmind, Balsamiq, Sketch, Axure, Adobes, Gimp, Inkscape, Krita.' },
  { id: 3, content: 'Arduino, basic understanding of circuit.' }
];


function NumberTech(props) {
  const numbersTech = props.numbersTech;
  let aosDelay = 50;
  const listItems = numbersTech.map((number) =>
    // Correct! Key should be specified inside the array.
    <div key={number.content.toString()} data-aos="fade-left" data-aos-delay={aosDelay + number.id* 50}>
    {number.content}
  </div>
  );
  return (
    <div className="focus-list">
      <h2 className="h1" data-aos="fade-left" data-aos-delay="200">Technical Skills</h2>
      {listItems}
    </div>
  );
}



const AboutPage = () => (
  <Fragment>
    <div className="about-box">
    <div className="sources-list">
        <a className="bold" data-aos="fade-left" data-aos-delay="550">CV</a>
        <a className="bold" data-aos="fade-left" data-aos-delay="600">Codepen</a>
        <a className="bold" data-aos="fade-left" data-aos-delay="650">Linkedin</a>
        <a className="bold" data-aos="fade-left" data-aos-delay="700">Github</a>
      </div>
      <NumberMissList numbersMiss={numbersMiss} />
      <NumberList numbers={numbers} />
      <NumberDesign numbersDesign={numbersDesign} />
      <NumberTech numbersTech={numbersTech} />


    </div>
    <NavLink className="jump-next next-blog" to="/blog">
      words on mind
    </NavLink>
  </Fragment>
);

export default AboutPage;
