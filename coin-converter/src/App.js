import React from 'react';
import logo from './logo.svg';
import './App.css';

import Converter from './components/Converter.js'

function App() {
  return (
    <div className="App">
      <Converter moedaA="EUR" moedaB="USD"></Converter>
    </div>
  );
}

export default App;
