import React, { Component } from 'react';
import NavBar from './navigation/Navbar';
import LoginPage from './auth/LoginPage';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
        <LoginPage />
      </div>
    );
  }
}

export default App;
