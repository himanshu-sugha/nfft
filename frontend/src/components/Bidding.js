import React, { useState, useEffect } from 'react';

const Bidding = () => {
  // Dummy data for NFTs available for bid
  const availableNfts = [
    {
      id: 1,
      name: 'Cosmic Voyager',
      imageUrl: 'https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/520383/e5128aa6e95f0556bd551764cce149fc39809119/original/cosmic-voyager.jpg',
      currentBid: '1.5 ETH',
      biddingEndTime: '2024-12-21T12:00:00Z', // Example end time
    },
    {
      id: 2,
      name: 'Neon Dreamscape',
      imageUrl: 'https://images.pexels.com/photos/1287567/pexels-photo-1287567.jpeg',
      currentBid: '2.0 ETH',
      biddingEndTime: '2024-12-25T18:00:00Z',
    },
    // Add more NFT items here...
  ];

  // Existing bids (example data)
  const existingBids = [
    { nftId: 1, bidAmount: 30, userId: 'user123' },
    { nftId: 2, bidAmount: 50, userId: 'user456' },
    { nftId: 1, bidAmount: 26, userId: 'user789' },
    { nftId: 2, bidAmount: 10, userId: 'user101' },
  ];

  const [bidDetails, setBidDetails] = useState({
    nftId: '',
    bidAmount: '',
    complianceLevel: 'low',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBidDetails({ ...bidDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bid placed for NFT ID: ${bidDetails.nftId} with ${bidDetails.bidAmount} ETH at ${bidDetails.complianceLevel} compliance.`);
  };

  // Filter bids above 25 ETH
  const filterBidsAbove25 = (nftId) => {
    return existingBids
      .filter(bid => bid.nftId === nftId && bid.bidAmount > 25)
      .map(bid => (
        <div key={bid.userId} style={{ padding: '10px', backgroundColor: '#f4f4f4', marginBottom: '10px', borderRadius: '5px' }}>
          <p>User ID: {bid.userId}</p>
          <p>Bid Amount: {bid.bidAmount} ETH</p>
        </div>
      ));
  };

  const timeRemaining = (endTime) => {
    const now = new Date();
    const end = new Date(endTime);
    const difference = end - now;
    
    if (difference <= 0) return "Bidding Ended";

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours} hours, ${minutes} minutes left`;
  };

  return (
    <div>
      <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '10px', maxWidth: '900px', margin: '0 auto' }}>
        <h2>Place Your Bid</h2>

        {/* Display Available NFTs for Bidding */}
        <div style={{ marginBottom: '30px' }}>
          <h3>Available NFTs for Bid</h3>
          {availableNfts.map((nft) => (
            <div key={nft.id} style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center' }}>
              <img
                src={nft.imageUrl}
                alt={nft.name}
                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px', marginRight: '20px' }}
              />
              <div>
                <h4>{nft.name}</h4>
                <p><strong>Current Bid:</strong> {nft.currentBid}</p>
                <p><strong>Time Left:</strong> {timeRemaining(nft.biddingEndTime)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bidding Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input
            type="text"
            name="nftId"
            placeholder="NFT ID"
            value={bidDetails.nftId}
            onChange={handleInputChange}
            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
          />
          <input
            type="number"
            name="bidAmount"
            placeholder="Bid Amount (ETH)"
            value={bidDetails.bidAmount}
            onChange={handleInputChange}
            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
          />
          <select
            name="complianceLevel"
            value={bidDetails.complianceLevel}
            onChange={handleInputChange}
            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
          >
            <option value="low">Low Compliance</option>
            <option value="medium">Medium Compliance</option>
            <option value="high">High Compliance</option>
          </select>
          <button
            type="submit"
            style={{
              padding: '12px 25px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              marginTop: '20px',
            }}
          >
            Place Bid
          </button>
        </form>

        {/* Display Bids Above 25 ETH */}
        <div style={{ marginTop: '30px' }}>
          <h3>Bids Above 25 ETH</h3>
          {availableNfts.map((nft) => (
            <div key={nft.id}>
              <h4>{nft.name}</h4>
              {filterBidsAbove25(nft.id)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bidding;
