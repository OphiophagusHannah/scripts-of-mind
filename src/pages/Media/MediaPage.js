import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";

const MediaPage = () => (
  <Fragment>
    <h1>Outside Part</h1>
    <p>
Design Skills:
Concept and Ideation
Interactive Design, UX/UI + the ways how to implement ideas into current state
Prototyping: Low/Medium/High Fidelity, Rapid Prototyping.
Visualization and Graphics: Digital/Traditional
Information Visualization
Information Architecture and structures
Conversational interfaces.
High understanding of Web and Digital Interfaces.
</p>
<p>
Technical Skills:
JS, Advanced CSS, SASS, PHP, JSON, C#, Processing, SVG, WebGL, Three.js, D3, JQuery, Various Frameworks.
Prototyping and Graphics: Proto.io, InVision, Justinmind, Balsamiq, Sketch, Axure, Adobes, Gimp, Inkscape, Krita.
Arduino, basic understanding of circuit.
</p>
<div>Codepen</div>
<div>Linkedin</div>
<div>Github</div>
    <NavLink activeClassName="active" to="/contact">
      speak to me
    </NavLink>
  </Fragment>
);

export default MediaPage;
