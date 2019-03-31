import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav class="navbar navbar-dark bg-dark fixed-top">
      <div className="container">
      <Link className="navbar-brand" to="/">
        Booking your ticket
      </Link>
      </div>
    </nav>
  );
}

export default NavBar;
