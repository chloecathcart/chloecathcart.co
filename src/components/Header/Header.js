import React, { Component } from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <header>
  		<nav>
        <div class="container">
          <div class="nav-content">
      	    <Link id="logo" to="/" class='hvr-hang'><h1>CHLOECATHCART.CO<span> | Product Designer</span></h1></Link>
      			<div class="about">
              <h1><Link to="/about">About</Link></h1>
            </div>
          </div>
        </div>
  	  </nav>
    </header>
  );
}

export default Header;
