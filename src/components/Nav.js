// import React, { Component } from "react";
// import { NavLink} from "react-router-dom";
// //import { BurgerIcon } from '../react-burger-menu';
// import styled from "styled-components";

// const Navigation = styled.header`
//   .fa-bars {
//     display: none;
//     color: #222;
//     font-size: 2rem;
//   }


//   @media only screen and (max-width: 800px) {
//     padding: 0px;
//     .logo {
//       padding-left: 15px;
//       padding-top: 0px !important;
//     }
//   }
//   @media only screen and (max-width: 600px) {
//     height: auto;
//     min-height: 50px;
//     display: block;
//     position: relative;
//     .logo {
//       width: 100%;
//       display: block;
//       padding-top: 20px;
//       margin: 0px;
//       margin-left: -5px;
//       a {
//         padding: 20px 0px;
//       }
//     }

//     ul {
//       display: flex;
//       flex-direction: column;
//     }

//     .under {
//       height: 0vh;
//       transition: .3s linear;
//     }

//     .fa-bars {
//       display: inline-block;
//       position: absolute;
//       top: 10px;
//       right: 10px;
//       cursor: pointer;
//       height: 3rem;
//       width: 3rem;
//       background-color: yellow;
//     }

//     .under.is-expanded {
//       height: 100vh;
//       transition: .3s linear;
//     }
//     ul.collapsed {
//       width: 100%;
//       display: block;
//       flex-direction: column;
//       justify-content: space-between;
//       flex-wrap: wrap;

//       transition: .3s linear;


//       overflow: hidden;
//       max-height: 0;
//       -moz-transition-duration: 0.4s;
//       -webkit-transition-duration: 0.4s;
//       -o-transition-duration: 0.4s;
//       transition-duration: 0.4s;
//       -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
//       -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
//       -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
//       transition-timing-function: cubic-bezier(0, 1, 0.5, 1);


//       a {
//         height: 3rem;
//         display: flex;
//         align-items: center;
//         padding-left: 1rem;
//       }

//       &.is-expanded {

//         transition: .3s linear;
//         overflow: hidden;
//         max-height: 500px; /* approximate max height */
//         -moz-transition-duration: 0.4s;
//         -webkit-transition-duration: 0.4s;
//         -o-transition-duration: 0.4s;
//         transition-duration: 0.4s;
//         -moz-transition-timing-function: ease-in;
//         -webkit-transition-timing-function: ease-in;
//         -o-transition-timing-function: ease-in;
//         transition-timing-function: ease-in;
//       }



//       li {
//         padding: 15px 10px;
//         margin: 0px 0px;
//         width: 100%;
//       }
//     }
//   }
// `;

// class Nav extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isExpanded: false
//     };
//   }
//   handleToggle(e) {
//     e.preventDefault();
//     this.setState({
//       isExpanded: !this.state.isExpanded
//     });
//   }
//   render() {
//     const { isExpanded } = this.state;

//     return (
//       <Navigation>
//         <div className={`under collapsed ${isExpanded ? "is-expanded" : ""}`} ></div>
//         <nav className="nav top">
//           <i className="fa fa-bars" aria-hidden="true" onClick={e => this.handleToggle(e)}/>
//           <ul onClick={e => this.handleToggle(e)} className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
//             <NavLink activeClassName="active" to="/">
//               ophiophagus_hannah
//             </NavLink>
//             <NavLink activeClassName="active" to="/projects">
//               scripts of mind
//             </NavLink>
//             <NavLink activeClassName="active" to="/about">
//               thought of mine
//             </NavLink>
//             <NavLink activeClassName="active" to="/blog">
//               words on mind
//             </NavLink>
//             <NavLink activeClassName="active" to="/drawings">
//               more of mine
//             </NavLink>
//             {/* <NavLink activeClassName="active" to="/contact">
//               speak to me
//             </NavLink> */}
//           </ul>
//         </nav>
//       </Navigation>
//     );
//   }
// }

// export default Nav;


import React, { Component } from 'react';
import {
  Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }


  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  handleLogin(event) {
    this.toggleModal();
    alert("Username: " + this.username.value + " Password: " + this.password.value
      + " Remember: " + this.remember.checked);
    event.preventDefault();

  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username"
                  innerRef={(input) => this.username = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password"
                  innerRef={(input) => this.password = input} />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="remember"
                    innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">Login</Button>
            </Form>
          </ModalBody>
        </Modal>
        //TODO: Mobile Mennu Styling
        <Navbar dark expand="md" className="nav top">
          <div className="container ">
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to='/home'> ophiophagus_hannah</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/menu'>  scripts of mind</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/about'> thought of mine</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/contact'> speak to me</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>

      </div>
    );
  }
}

export default Header;