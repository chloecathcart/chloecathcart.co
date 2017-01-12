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
      				<a href="https://www.facebook.com/chloe.cathcart" target="_blank"><i class="entypo-facebook"></i></a>
      				<a href="https://dribbble.com/chloecathcart"target="_blank"><i class="entypo-dribbble"></i></a>
      				<a href="https://www.instagram.com/chloecathcart/" target="_blank"><i class="entypo-instagrem"></i></a>
      				<a href="/public/images/chloecathcartcv.pdf" target="_blank"><i class="entypo-attach"></i></a>
      			</div>
          </div>
        </div>
  	  </nav>
    </header>
  );
}

export default Header;
