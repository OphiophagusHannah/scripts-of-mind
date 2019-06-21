import React, { Component } from 'react';
// import GetOnlinePosts from './components/OnlinePosts/GetOnlinePosts';
//import logo from './logo.svg';
import './scss/app.css';
import GetLocalPosts from './components/LocalPosts/GetLocalPosts';
// import GetSecondaryPosts from './components/SecondaryPosts/GetSecondaryPosts';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="top">ophiophagus_hannah  :: scripts of mind :: thought of mine :: words on mind :: more of mine :: part of me :: speak to me</h1>
        <GetLocalPosts/>
      </div>
    );
  }
}
export default App;