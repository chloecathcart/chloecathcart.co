import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App(props) {
  return (
    <div className="app">

      <Header />

      <main className="container">
        {props.children}
      </main>

      <Footer />

    </div>
  );
}

export default App;
