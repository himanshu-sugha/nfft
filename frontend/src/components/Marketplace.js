import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Marketplace = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    // Replace with actual data fetch logic or use the updated static array
    const fetchedNfts = [
      {
        id: 1,
        name: "Cosmic Voyager",
        description: "A surreal cosmic journey through uncharted space.",
        imageUrl: "https://via.placeholder.com/150/FF6347/FFFFFF?text=Cosmic+Voyager",
      },
      {
        id: 2,
        name: "Neon Dreamscape",
        description: "A neon-lit dream world full of abstract beauty.",
        imageUrl: "https://via.placeholder.com/150/8A2BE2/FFFFFF?text=Neon+Dreamscape",
      },
      {
        id: 3,
        name: "Quantum Leap",
        description: "The art of transitioning between alternate dimensions.",
        imageUrl: "https://via.placeholder.com/150/32CD32/FFFFFF?text=Quantum+Leap",
      },
      {
        id: 4,
        name: "Solar Rebirth",
        description: "A radiant phoenix rising from the ashes of a dying star.",
        imageUrl: "https://via.placeholder.com/150/FFD700/FFFFFF?text=Solar+Rebirth",
      },
      {
        id: 5,
        name: "Lunar Eclipse",
        description: "The rare beauty of the moon's dark side revealed.",
        imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Lunar+Eclipse",
      },
      {
        id: 6,
        name: "Pixelated Memories",
        description: "A nostalgic digital memory in pixel art form.",
        imageUrl: "https://via.placeholder.com/150/DC143C/FFFFFF?text=Pixelated+Memories",
      },
      {
        id: 7,
        name: "Retro Vibes",
        description: "A tribute to the retro pop culture of the 80s.",
        imageUrl: "https://via.placeholder.com/150/FF69B4/FFFFFF?text=Retro+Vibes",
      },
      {
        id: 8,
        name: "Floral Symphony",
        description: "A delicate dance of flowers and vibrant colors.",
        imageUrl: "https://via.placeholder.com/150/FF1493/FFFFFF?text=Floral+Symphony",
      },
    ];

    setNfts(fetchedNfts);
  }, []);

  return (
    <div>
      <h2>Marketplace</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {nfts.map((nft) => (
          <div key={nft.id} style={{
            margin: '1rem', 
            border: '1px solid #ccc', 
            padding: '1rem', 
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            maxWidth: '200px',
            backgroundColor: '#f9f9f9'
          }}>
            <img src={nft.imageUrl} alt={nft.name} style={{
              width: '100%', 
              height: '150px', 
              borderRadius: '8px', 
              objectFit: 'cover', 
              marginBottom: '10px'
            }} />
            <h3>{nft.name}</h3>
            <p>{nft.description}</p>
            <Link to={`/nft/${nft.id}`} style={{
              textDecoration: 'none',
              color: '#007BFF',
              fontWeight: 'bold',
            }}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
