import React from 'react';
import logo from './bitcoin.svg';
import './App.css';
import BTC from './components/BTC.js';
import BtcButton from './components/BtcButton.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to the Bitcoin Price Fetcher App
        </h1>
        <div>
          <BtcButton />
        </div>
      </header>
    </div>
  );
}

export default App;
