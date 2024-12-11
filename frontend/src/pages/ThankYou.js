import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
      <h2>Thank You for Your Purchase!</h2>
      <p>Your transaction was successful. We hope you enjoy your new NFT!</p>
      <Link to="/" style={{ color: '#007BFF', fontWeight: 'bold' }}>
        Back to Marketplace
      </Link>
    </div>
  );
};

export default ThankYou;
