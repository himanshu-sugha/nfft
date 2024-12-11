import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Marketplace = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const fetchedNfts = [
      {
        id: 1,
        name: "Cosmic Voyager",
        description: "A surreal cosmic journey through uncharted space.",
        imageUrl: "https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/520383/e5128aa6e95f0556bd551764cce149fc39809119/original/cosmic-voyager.jpg/!!/b%3AW1sicmVzaXplIixbNjAwLG51bGwseyJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWUsImZpdCI6Im91dHNpZGUifV1dXQ%3D%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg", // Image from Pexels
        price: "1.5 ETH"
      },
      {
        id: 2,
        name: "Neon Dreamscape",
        description: "A neon-lit dream world full of abstract beauty.",
        imageUrl: "https://images.pexels.com/photos/1287567/pexels-photo-1287567.jpeg", // Image from Pexels
        price: "2.0 ETH"
      },
      {
        id: 3,
        name: "Quantum Leap",
        description: "The art of transitioning between alternate dimensions.",
        imageUrl: "https://images.pexels.com/photos/2212657/pexels-photo-2212657.jpeg", // Image from Pexels
        price: "0.8 ETH"
      },
      {
        id: 4,
        name: "Solar Rebirth",
        description: "A radiant phoenix rising from the ashes of a dying star.",
        imageUrl: "https://live.staticflickr.com/65535/49256072423_11870b2a80_b.jpg", // Image from Pexels
        price: "3.2 ETH"
      },
      {
        id: 5,
        name: "Lunar Eclipse",
        description: "The rare beauty of the moon's dark side revealed.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1x7xczWhCw5mX6RLEKfn9ruNvgR0sj3rJVQ&s.jpeg", // Image from Pexels
        price: "2.5 ETH"
      },
      {
        id: 6,
        name: "Pixelated Memories",
        description: "A nostalgic digital memory in pixel art form.",
        imageUrl: "https://i1.sndcdn.com/artworks-bAtJxRmOmnzcqZyI-CO8yWQ-t500x500.jpg", // Image from Pexels
        price: "1.2 ETH"
      },
      {
        id: 7,
        name: "Retro Vibes",
        description: "A tribute to the retro pop culture of the 80s.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzGJhpPp7rZQokVxU9ZfV2_lcpmh532CBBA&s", // Image from Pexels
        price: "1.8 ETH"
      },
      {
        id: 8,
        name: "Floral Symphony",
        description: "A delicate dance of flowers and vibrant colors.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4jXkTdxTjh3j2QcG9aooVBNXKqt_eOLz5fA&s", // Image from Pexels
        price: "0.9 ETH"
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
            maxWidth: '250px',
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
            <p><strong>Price: {nft.price}</strong></p>
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
