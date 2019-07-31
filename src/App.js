import React from 'react';
import logo from './bitcoin.svg';
import './App.css';
import BTC from './components/BTC.js';
import RenderPriceOnClick from './components/RenderPriceOnClick.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to the Bitcoin Price Fetcher App
        </h1>
        <div>
          <RenderPriceOnClick />
        </div>
      </header>
    </div>
  );
}

export default App;
