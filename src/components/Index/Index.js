import React, { Component } from 'react';
import Projects from 'Projects/Projects';

function Index() {

  return (
    <div class="index">
      <div id="hero-content">
        <h1>Passionate product designer and illustrator from Dublin, Ireland.</h1>
        <a class="button" href="/images/chloecathcartcv.pdf" target="_blank">View Resume→</a>
        <ul class="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <Projects />
    </div>
  );
}

export default Index;
