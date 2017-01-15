import React, { Component } from 'react';
import Projects from 'Projects/Projects';

function Index() {

  return (
    <div class="index">
      <div id="hero-content">
        <h1>Product & visual designer from Ireland.</h1>
        <p>Currently searching for a new opportunity in Dublin after living and working in San Francisco. Feel free to contact me at <a href="mailto:chloecathcart93@gmail.com">chloecathcart93@gmail.com</a>.</p>
        <a class="button" href="/images/chloecathcartcv.pdf" target="_blank">View Resume</a>
      </div>

      <Projects />
    </div>
  );
}

export default Index;
