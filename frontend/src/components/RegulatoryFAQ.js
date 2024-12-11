// src/components/RegulatoryFAQ.js
import React from 'react';

const RegulatoryFAQ = () => {
  return (
    <div style={styles.container}>
      <h2>Regulatory FAQs</h2>
      <div style={styles.faq}>
        <h3>What is KYC (Know Your Customer)?</h3>
        <p>KYC is the process of verifying your identity to ensure we are in compliance with financial regulations.</p>
      </div>
      <div style={styles.faq}>
        <h3>Why do I need to complete KYC?</h3>
        <p>Completing KYC ensures that we meet legal requirements and helps us maintain a safe and secure platform for all users.</p>
      </div>
      <div style={styles.faq}>
        <h3>How do I complete KYC?</h3>
        <p>To complete KYC, you will need to upload identification documents and pass a verification process. You can start this process from your profile page.</p>
      </div>
      <div style={styles.faq}>
        <h3>What happens if I fail KYC?</h3>
        <p>If you fail KYC verification, you won't be able to participate in certain transactions. You can try again by resubmitting the required documents.</p>
      </div>
      <div style={styles.faq}>
        <h3>What is AML (Anti-Money Laundering)?</h3>
        <p>AML involves monitoring and detecting suspicious transactions that could indicate money laundering activities.</p>
      </div>
      <div style={styles.faq}>
        <h3>Are my personal details safe?</h3>
        <p>Yes, we use advanced encryption methods to protect your personal and sensitive data during the KYC process.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  faq: {
    marginBottom: '1.5rem',
  },
};

export default RegulatoryFAQ;
