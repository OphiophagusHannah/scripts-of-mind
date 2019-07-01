import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const MediaPage = () => (
  <Fragment>
    <h1>Cans</h1>
    
    <div>CV</div>
    <ul className="skill-list">
      <h3>Design Skills:</h3>
      <li>Concept and Ideation</li>
      <li>Interactive Design, UX/UI + the ways how to implement ideas into current state</li>
      <li>Prototyping: Low/Medium/High Fidelity, Rapid Prototyping.</li>
      <li>Visualization and Graphics: Digital/Traditional</li>
      <li>Information Visualization</li>
      <li>Information Architecture and structures</li>
      <li>Conversational interfaces.</li>
      <li>High understanding of Web and Digital Interfaces.</li>
    </ul>

    <ul className="skill-list">
      <h3>Technical Skills:</h3>
      <li>JS, Advanced CSS, SASS, PHP, JSON, C#, Processing, SVG, WebGL, Three.js, D3, JQuery, Various Frameworks.</li>
      <li>Prototyping and Graphics: Proto.io, InVision, Justinmind, Balsamiq, Sketch, Axure, Adobes, Gimp, Inkscape, Krita.</li>
      <li>Arduino, basic understanding of circuit.</li>
    </ul>

    <div>Codepen</div>
    <div>Linkedin</div>
    <div>Github</div>

    <NavLink className="jump-next next-blog" to="/drawings">
      part of me
    </NavLink>
  </Fragment>
);

export default MediaPage;
