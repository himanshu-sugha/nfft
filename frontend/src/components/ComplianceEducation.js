// src/components/ComplianceEducation.js
import React from 'react';

const ComplianceEducation = () => {
  return (
    <div style={styles.container}>
      <h2>Compliance Education</h2>
      <section style={styles.section}>
        <h3>What is KYC (Know Your Customer)?</h3>
        <p>
          KYC is a process through which we verify the identity of users to prevent fraud. This involves submitting personal identification documents and face verification.
        </p>
      </section>
      <section style={styles.section}>
        <h3>What is AML (Anti-Money Laundering)?</h3>
        <p>
          AML ensures that our platform is free from illegal activities like money laundering. We monitor transactions and block suspicious activity to maintain compliance with global financial laws.
        </p>
      </section>
      <section style={styles.section}>
        <h3>Why is Compliance Important?</h3>
        <p>
          Compliance helps maintain the integrity of the marketplace. It reduces fraud, protects users, and ensures the platform can operate legally and securely.
        </p>
      </section>
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
  section: {
    marginBottom: '1.5rem',
  },
};

export default ComplianceEducation;
