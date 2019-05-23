import React, { Component } from 'react';
import Projects from '../Projects/Projects';
import { render } from 'react-dom';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

function Index() {

  return (  
    <div className="index">
      <div id="hero-content">
        <div class="logo">
          <h1>Chloe Cathcart</h1>
        </div>

        <h2>Product Designer @ HubSpot</h2>
        <p>Currently working on the Growth Onboarding team at HubSpot desiging new experiences for our users. I have a focus on creating experiences with business objectives in mind.</p>
      </div>

      <Projects />
    </div>
  );
}



export default Index;
