import React, { Component } from 'react';
import Projects from '../Projects/Projects';

function Index() {

  return (
    <div className="index">
      <div id="hero-content">
        <h1>Chloe Cathcart</h1>
        <hr></hr>
        <h2>Product Designer @ HubSpot</h2>
        <p>Currently working on the Growth Onboarding team at HubSpot desiging new experiences for our users. I have a focus on creating experiences with business objectives in mind.</p>
      </div>

      <Projects />
    </div>
  );
}

export default Index;
