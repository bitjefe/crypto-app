import React from 'react';

const Currency = props => {
  const {
    price_usd,
  } = props.data

  return (
    <li className = "currency">
      <h1>${(+price_usd).toFixed(2)}</h1>
    </li>
  )
}

export default Currency;
