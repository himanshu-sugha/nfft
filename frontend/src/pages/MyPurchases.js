import React, { useEffect, useState } from 'react';

const MyPurchases = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    // Retrieve purchases from localStorage
    const storedPurchases = JSON.parse(localStorage.getItem('purchases')) || [];
    setPurchases(storedPurchases);
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Your Purchases</h2>
      {purchases.length === 0 ? (
        <p>You haven't made any purchases yet.</p>
      ) : (
        <div>
          {purchases.map((purchase, index) => (
            <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <h3>{purchase.name}</h3>
              <p><strong>Price:</strong> {purchase.price}</p>
              <p><strong>Purchased on:</strong> {purchase.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPurchases;
