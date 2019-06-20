import React, { Component } from 'react';
import GetOnlinePosts from './components/OnlinePosts/GetOnlinePosts';
//import logo from './logo.svg';
import './App.css';
import GetLocalPosts from './components/LocalPosts/GetLocalPosts';
import GetSecondaryPosts from './components/SecondaryPosts/GetSecondaryPosts';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ophiophagus_hannah :: scripts of mind</h1>
        <GetLocalPosts/>

      </div>
    );
  }
}
export default App;