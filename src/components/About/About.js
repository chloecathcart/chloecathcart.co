import React, { Component } from 'react';
import PropTypes from 'prop-types';

class About extends Component {
  render() {
    return (
      
      <div className="header">
      <style>{'body { background-color: white; }'}</style>
      
        <div className="logo">
        <h1>Chloe Cathcart</h1>
        </div>
        <div class="header">
          
          <h1>Growth design @ HubSpot</h1>
        </div>
      

        <div className="content">
          <p>I’ve worked at HubSpot for just over 2 years now. I first started working on the notifications team designing and building a brand new 
          notification system. You can read about that here. I then progressed onto the Growth team. I’ve led design on the engagement and retention team 
          and I’m currently working on the onboarding team.</p>
          <p>The main focus of my team is to onboard new users and show them the value that HubSpot can give them and their business. We’re concerned with 
          first time WAT’s (First time weekly active teams) on our team.
          </p>
          <h3>Designing a new onboarding experience</h3>
          <p>The majority of my work on the growth team has been focused on creating a new onboarding experience that is tailored to our users role and experience.
          We currently have a checklist in the HubSpot app that is aimed at getting users up to speed but from user research we soon found out that it was not 
          meeting every users needs that have different levels of experience.</p>
          <img src="images/segment.png" />

          <h3>Hypothesis</h3>
          <p>We believe users with no previous experience, those with some experience and those who are HubSpot experts have clear 
            differences in terms of onboarding needs. We believed that your current onboarding wasn’t catering to each users level of experience, therefore affecting their evaluation 
            of HubSpot.</p>
          <p>Another hypothesis we created from previous research was that as well as different experience levels, our users also have different onboarding needs 
            depending on their job role. The job roles we decided to focus on for this new onboarding experience were sales reps and sales managers.</p>

        
        </div>
        </div>
    )
  }
}

export default About;
