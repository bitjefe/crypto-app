import React from 'react';
import logo from './logo.svg';
import './App.css';
import BtcButton from './components/BtcButton.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the Bitcoin Price Fetcher App
        </p>
        <div>
          <BtcButton />
        </div>
      </header>
    </div>
  );
}

export default App;
