import React, { useState, useEffect } from 'react';

const Bidding = () => {
  const [availableNfts, setAvailableNfts] = useState([]);
  const [bidDetails, setBidDetails] = useState({
    nftId: '',
    bidAmount: '',
    complianceLevel: 'low',
  });
  const [error, setError] = useState('');

  // Fetch available NFTs from the backend API
  useEffect(() => {
    const fetchNfts = async () => {
      try {
        const response = await fetch('/api/nfts'); // Assuming you have an endpoint that returns NFTs
        const data = await response.json();
        setAvailableNfts(data);
      } catch (err) {
        setError('Failed to fetch NFTs');
      }
    };

    fetchNfts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBidDetails({ ...bidDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nftId, bidAmount, complianceLevel } = bidDetails;

    if (!nftId || !bidAmount || !complianceLevel) {
      return setError('Please fill out all fields');
    }

    try {
      const response = await fetch('/api/bidding/place-bid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bidDetails),
      });
      const data = await response.json();
      alert(data.message);
      setError('');
    } catch (err) {
      setError('Failed to place bid');
    }
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

  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '10px', maxWidth: '900px', margin: '0 auto' }}>
        <h2>Place Your Bid</h2>

        {/* Display Available NFTs for Bidding */}
        <div style={{ marginBottom: '30px' }}>
          <h3>Available NFTs for Bid</h3>
          {availableNfts.length === 0 ? (
            <p>Loading NFTs...</p>
          ) : (
            availableNfts.map((nft) => (
              <div key={nft._id} style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center' }}>
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
            ))
          )}
        </div>

        {/* Display Error Messages */}
        {error && <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>}

        {/* Bid Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <select
            name="nftId"
            value={bidDetails.nftId}
            onChange={handleInputChange}
            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
          >
            <option value="">Select NFT</option>
            {availableNfts.map((nft) => (
              <option key={nft._id} value={nft._id}>
                {nft.name}
              </option>
            ))}
          </select>

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

        {/* Back Button */}
        <button
          onClick={goBack}
          style={{
            marginTop: '20px',
            padding: '12px 25px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default Bidding;
