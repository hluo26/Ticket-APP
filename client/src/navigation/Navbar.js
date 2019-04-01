import React from 'react';
import {Link} from 'react-router-dom';
import LoginButton from '../auth/LoginButton'

function NavBar() {
  return (
    <nav class="navbar navbar-dark bg-dark fixed-top">
      <div className="container">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <LoginButton />
      </div>
    </nav>
  );
}

export default NavBar;
