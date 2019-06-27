import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";

const AboutPage = () => (
  <Fragment>
    <h1>Why am I?</h1>
<h2>Mission Statement</h2>

    <ul className="focus-list">
    <h2>Personal Focus</h2>
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
    <br/>
    I am focusing on the world around everything
    <hr/>


    <NavLink className="jump-next next-blog" to="/blog">
      words on mind
    </NavLink>
  </Fragment>
);

export default AboutPage;
