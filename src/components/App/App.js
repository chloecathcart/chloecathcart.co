import React from 'react';
import Footer from '../Footer/Footer';

function App(props) {
  return (
    <div className="app">


      <main className="container">
        {props.children}
      </main>

      <Footer />

    </div>
  );
}

export default App;
