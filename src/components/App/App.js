import React from 'react';
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
