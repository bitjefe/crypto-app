import React from 'react';
import BTC from './BTC.js';

class BtcButton extends React.Component{
  render(){
    return(
      <button variant="primary" size ="lg" block>
        <BTC />
      </button>
    );
  }
}

export default BtcButton;
