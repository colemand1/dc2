import React from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './Component/Top';
import Main from './Containers/Main';
import About from './Containers/About';
import Contact from './Containers/Contact';
import Portfolio from './Containers/Portfolio';
import Fun from './Containers/Fun';
import Jumbo from './Component/Jumbo';



function App() {
  return (
    <div className="App">
      <Top />
      <Main />
      <Jumbo name='Cincinnati' />
      <About />
      <Portfolio />
      <Jumbo name='Chicago' />
      <Fun />
      <Contact />
    </div>
  );
}

export default App;
