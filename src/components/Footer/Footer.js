import React, { Component } from 'react';

function Footer(props) {
  return (
    <section id="footer">
       <div class="links">
        <ul>
          <li><a href="#">Resume</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </div>
      <div class="copyright">
        <h4>
          Copyright &copy; Chloe Cathcart {new Date().getFullYear()}
        </h4>
      </div>

    </section>
  );
}

export default Footer;
