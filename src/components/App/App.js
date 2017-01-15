import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from 'Header/Header';
import Footer from 'Footer/Footer';

function App(props) {
  return (
    <div class="app">

      <Header />

      <main class="container">
        {props.children}
      </main>

      <Footer />

    </div>
  );
}

export default App;
