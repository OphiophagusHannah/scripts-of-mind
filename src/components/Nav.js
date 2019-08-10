import React, { Component } from "react";
import { NavLink} from "react-router-dom";
//import { BurgerIcon } from '../react-burger-menu';
import styled from "styled-components";

const Navigation = styled.header`
  .fa-bars {
    display: none;
    color: #222;
    font-size: 2rem;
  }
  nav {
    ul {
      display: flex;
    }

    a:hover {
      color: salmon;
    }

    a.active {
      color: #222;
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
      a {
        padding: 20px 0px;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
    }
    
    .under {
      height: 0vh;
      transition: .3s linear;
    }

    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      height: 3rem;
      width: 3rem;
      background-color: yellow;
    }

    .under.is-expanded {
      height: 100vh;
      transition: .3s linear;
    }
    ul.collapsed {
      width: 100%;
      display: block;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;
 
      transition: .3s linear;


      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      

      a {
        height: 3rem;
        display: flex;
        align-items: center;
        padding-left: 1rem;
      }

      &.is-expanded {
    
        transition: .3s linear;
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }



      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  render() {
    const { isExpanded } = this.state;

    return (
      <Navigation>
        <div className={`under collapsed ${isExpanded ? "is-expanded" : ""}`} ></div>
        <nav className="nav top">
          <i className="fa fa-bars" aria-hidden="true" onClick={e => this.handleToggle(e)}/>
          <ul onClick={e => this.handleToggle(e)} className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <NavLink activeClassName="active" to="/">
              ophiophagus_hannah :: scripts of mind
            </NavLink>
            <NavLink activeClassName="active" to="/about">
              thought of mine
            </NavLink>
            <NavLink activeClassName="active" to="/blog">
              words on mind
            </NavLink>
            <NavLink activeClassName="active" to="/drawings">
              more of mine
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              speak to me
            </NavLink>
          </ul>
        </nav>
      </Navigation>
    );
  }
}

export default Nav;
