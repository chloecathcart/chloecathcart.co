import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
  		<nav>
        <div className="container">
          <div className="nav-content">
      	    <Link id="logo" to="/">
              <img src="images/logo.png"/>
            </Link>
      			<div className="nav-links">
              <ul>
                <li><Link to="/about">Projects</Link></li>
                <li><Link to="/about">Blog Posts</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
          </div>
        </div>
  	  </nav>
    </header>
  );
}

export default Header;
