import React, { useState } from 'react';

const ScheduleDrop = () => {
  const [dropDetails, setDropDetails] = useState({
    name: '',
    description: '',
    date: '',
    complianceLevel: 'low',  // Default compliance level
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDropDetails({ ...dropDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Scheduled NFT Drop: ${dropDetails.name} at ${dropDetails.date} with ${dropDetails.complianceLevel} compliance.`);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '10px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Schedule Your NFT Drop</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          name="name"
          placeholder="NFT Name"
          value={dropDetails.name}
          onChange={handleInputChange}
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
        />
        <textarea
          name="description"
          placeholder="NFT Description"
          value={dropDetails.description}
          onChange={handleInputChange}
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
        />
        <input
          type="date"
          name="date"
          value={dropDetails.date}
          onChange={handleInputChange}
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
        />
        <select
          name="complianceLevel"
          value={dropDetails.complianceLevel}
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
          Schedule Drop
        </button>
      </form>
    </div>
  );
};

export default ScheduleDrop;
