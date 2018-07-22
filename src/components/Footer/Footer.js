import React, { Component } from 'react';

function Footer(props) {
  return (
    <section id="footer">
      <h3>
        Chloe Cathcart &copy; {new Date().getFullYear()}
      </h3>
      <div className="icons">
        <a href="https://dribbble.com/chloecathcart"target="_blank"><i className="icon-dribbble"></i></a>
        <a href="https://www.instagram.com/chloecathcart/" target="_blank"><i className="icon-instagram"></i></a>
        <a href="/public/images/chloecathcartcv.pdf" target="_blank"><i className="icon-attachment"></i></a>
      </div>
    </section>
  );
}

export default Footer;
