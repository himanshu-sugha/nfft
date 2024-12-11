import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ThankYou from './ThankYou';  // Import the ThankYou component

const Details = () => {
  const { id } = useParams();  // Get the id from the URL
  const [nft, setNft] = useState(null);
  const [transactionStatus, setTransactionStatus] = useState('');
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  useEffect(() => {
    // Replace with actual data fetching logic based on ID
    const fetchedNfts = [
      { id: 1, name: "Cosmic Voyager", description: "A surreal cosmic journey through uncharted space.", imageUrl: "https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/520383/e5128aa6e95f0556bd551764cce149fc39809119/original/cosmic-voyager.jpg/!!/b%3AW1sicmVzaXplIixbNjAwLG51bGwseyJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWUsImZpdCI6Im91dHNpZGUifV1dXQ%3D%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg", price: "1.5 ETH" },
      { id: 2, name: "Neon Dreamscape", description: "A neon-lit dream world full of abstract beauty.", imageUrl: "https://images.pexels.com/photos/1287567/pexels-photo-1287567.jpeg", price: "2.0 ETH" },
      { id: 3, name: "Quantum Leap", description: "The art of transitioning between alternate dimensions.", imageUrl: "https://images.pexels.com/photos/2212657/pexels-photo-2212657.jpeg", price: "0.8 ETH" },
      { id: 4, name: "Solar Rebirth", description: "A radiant phoenix rising from the ashes of a dying star.", imageUrl: "https://live.staticflickr.com/65535/49256072423_11870b2a80_b.jpg", price: "3.2 ETH" },
      { id: 5, name: "Lunar Eclipse", description: "The rare beauty of the moon's dark side revealed.", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1x7xczWhCw5mX6RLEKfn9ruNvgR0sj3rJVQ&s.jpeg", price: "2.5 ETH" },
      { id: 6, name: "Pixelated Memories", description: "A nostalgic digital memory in pixel art form.", imageUrl: "https://i1.sndcdn.com/artworks-bAtJxRmOmnzcqZyI-CO8yWQ-t500x500.jpg", price: "1.2 ETH" },
      { id: 7, name: "Retro Vibes", description: "A tribute to the retro pop culture of the 80s.", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzGJhpPp7rZQokVxU9ZfV2_lcpmh532CBBA&s", price: "1.8 ETH" },
      { id: 8, name: "Floral Symphony", description: "A delicate dance of flowers and vibrant colors.", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4jXkTdxTjh3j2QcG9aooVBNXKqt_eOLz5fA&s", price: "0.9 ETH" },
    ];

    // Find the NFT with the matching ID
    const nftDetails = fetchedNfts.find((nft) => nft.id === parseInt(id));
    setNft(nftDetails);
  }, [id]);

  const handleBuyNow = () => {
    // Simulate a transaction
    setTransactionStatus('Processing your purchase...');
    
    // Simulate a delay (e.g., transaction confirmation)
    setTimeout(() => {
      setTransactionStatus('Purchase successful!');
      alert(`You have successfully bought the ${nft.name} NFT for ${nft.price}.`);
  
      // Store the purchase in localStorage
      const purchaseData = {
        id: nft.id,
        name: nft.name,
        price: nft.price,
        date: new Date().toLocaleString(),
      };
      
      // Retrieve existing purchases and add the new one
      const existingPurchases = JSON.parse(localStorage.getItem('purchases')) || [];
      existingPurchases.push(purchaseData);
      localStorage.setItem('purchases', JSON.stringify(existingPurchases));
  
      // Redirect to a "Thank You" page after purchase
      navigate('/thank-you');  // Use navigate instead of history.push
    }, 2000); // 2-second delay to simulate processing
  };
  

  if (!nft) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '10px', maxWidth: '700px', margin: '0 auto' }}>
      <h2>{nft.name}</h2>
      <img 
        src={nft.imageUrl} 
        alt={nft.name} 
        style={{
          width: '300px', 
          height: '300px', 
          borderRadius: '10px',
          objectFit: 'cover', 
          marginBottom: '20px'
        }} 
      />
      <p><strong>Description: </strong>{nft.description}</p>
      <p><strong>Price: </strong>{nft.price}</p>

      {transactionStatus && <p>{transactionStatus}</p>}
      
      <button 
        onClick={handleBuyNow}
        style={{
          padding: '12px 25px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Details;
