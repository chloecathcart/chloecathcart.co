import React, { Component } from 'react';
import Projects from '../Projects/Projects';

function Index() {

  return (
    <div className="index">
      <div id="hero-content">
        <h1>I’m a product designer currently working at HubSpot on the Engagement & Retention team. Previously at Blend in San Francisco.</h1>
        <a className="button" href="/images/chloecathcartcv.pdf" target="_blank">View Resume→</a>
        <ul className="bg-bubbles">
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
