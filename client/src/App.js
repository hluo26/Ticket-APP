import React, { Component } from 'react';
import NavBar from './navigation/Navbar';
import Data from './data/data';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
        <Data />
      </div>
    );
  }
}

export default App;
