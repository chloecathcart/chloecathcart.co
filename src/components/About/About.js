import React, { Component } from 'react';
import PropTypes from 'prop-types';

class About extends Component {
  render() {
    return (
      <div className="about">
        <p>I’m a product designer and illustrator who just moved back home to Dublin after living in San Francisco. I worked for a company called Blend to
        create a better user experience for the mortgage application process in the US and also created the visual identity of their customer facing app through
        illustration.</p>

        <p>Before Blend I worked as a UI/UX Designer, Visual Designer and Graphic Designer. I studied marketing at Maynooth University but always had a desire
        to pursue my interest in design.
        </p>
        <p>If you'd like to chat about working together feel free to send me a message at chloecathcart93@gmail.com. I'll be happy to hear from you.
        </p>

        <img src="images/chloe.png" />
      </div>
    )
  }
}

export default About;
