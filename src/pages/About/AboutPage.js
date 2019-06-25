import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";

const AboutPage = () => (
  <Fragment>
    <h1>Why am I?</h1>
<h2>Mission Statement</h2>
    <h2>Personal Focus</h2>
    <ul>
      <li>
      Space oriented interfaces. Projected interfaces
      </li>
      <li>
      Learning Process, Precision of knowledge
      </li>
      <li>
      Transmision, Transition and Comprehension of Information
      </li>
      <li>
      Holography, Vision, Optics.
      </li>
      <li>
      Art and Feelings. Technologies of Materials.
      </li>
      <li>Visualisation and Atmosphere.</li>
      <li>Languages; structure and encoding.</li>
      <li>Sensors. Sensorics</li>
    </ul>

<hr/>
I am not focusing on the human.
I am focusing on the world around everything
<hr/>

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
    <NavLink activeClassName="active" to="/blog">
    words on mind
            </NavLink>
  </Fragment>
);

export default AboutPage;
