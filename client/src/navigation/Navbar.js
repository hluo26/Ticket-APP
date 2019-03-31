import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav class="navbar navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="/">
        Booking your ticket
      </Link>
    </nav>
  );
}

export default NavBar;
