import React, { Component } from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <header>
  		<nav>
        <div class="container">
          <div class="nav-content">
      	    <Link id="logo" to="/"><h1>Chloe Cathcart</h1></Link>
      			<div class="icons">
      				<a href="https://dribbble.com/chloecathcart"target="_blank"><i class="icon-dribbble"></i></a>
      				<a href="https://www.instagram.com/chloecathcart/" target="_blank"><i class="icon-instagram"></i></a>
      				<a href="/public/images/chloecathcartcv.pdf" target="_blank"><i class="icon-attachment"></i></a>
      			</div>
          </div>
        </div>
  	  </nav>
    </header>
  );
}

export default Header;
