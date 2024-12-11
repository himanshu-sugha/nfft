import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{
      height: '100vh',
      backgroundImage: 'url("https://example.com/nft-background.jpg")', // Replace with an actual NFT-related background image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <div style={{
        background: 'rgba(0, 0, 0, 0.6)', // semi-transparent black background to make text readable
        padding: '3rem',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}>Welcome to the NFT Marketplace</h1>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
        }}>Discover unique digital assets and art in a decentralized marketplace.</p>
        <Link to="/marketplace" style={{
          padding: '1rem 2rem',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
        }} onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'} onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}>
          Explore Marketplace
        </Link>
      </div>
    </div>
  );
};

export default Home;
