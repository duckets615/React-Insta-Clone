import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import CommentSection from './components/CommentSection/CommentSection';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData
    }
  }
  render() {
    return (
      <div className="App">
       Hi Hi Buddy
       <SearchBar />
       <CommentSection />
      </div>
    );
  }
}

export default App;
