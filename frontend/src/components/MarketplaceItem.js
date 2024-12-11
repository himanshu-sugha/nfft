import React from 'react';
import { Link } from 'react-router-dom';
import SocialShare from './SocialShare'; // Import SocialShare component

const MarketplaceItem = ({ id, title, price, imageUrl }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    padding: '15px',
    backgroundColor: '#fff',
    textDecoration: 'none',
    color: '#333',
    transition: 'transform 0.2s ease-in-out',
    width: '300px',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '10px',
  };

  const textStyle = {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '10px',
  };

  // NFT object to pass to SocialShare
  const nft = { id, title, imageUrl, currentBid: price, biddingEndTime: '2024-12-20T18:00:00Z' };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Link to={`/nft/${id}`} style={cardStyle}>
        <img src={imageUrl} alt={title} style={imageStyle} />
        <h3>{title}</h3>
        <p style={textStyle}>Price: {price} ETH</p>
      </Link>

      {/* Social Share Buttons */}
      <SocialShare nft={nft} />
    </div>
  );
};

export default MarketplaceItem;
