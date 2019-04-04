import React, { Component } from 'react';
import NavBar from './navigation/Navbar';
import Welcome from './WelcomePage';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
        <Welcome />
      </div>
    );
  }
}

export default App;
