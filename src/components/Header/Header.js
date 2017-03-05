import React from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <header>
  		<nav>
        <div class="container">
          <div class="nav-content">
      	    <Link id="logo" to="/">
              CHLOECATHCART.CO <span>| Product Designer</span>
            </Link>
      			<div class="nav-links">
              <ul>
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
