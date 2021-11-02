import React from 'react'
import NonStyleLink from './NonStyleLink.js';

const HomeButton = () => {
  return(
    <NonStyleLink to="/home">
      <h2 className="home-button">CryptoP2P</h2>
    </NonStyleLink>
  );
}

export default HomeButton