// src/components/ComplianceMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

const ComplianceMenu = () => {
  return (
    <div style={styles.menu}>
      <Link to="/compliance-education" style={styles.link}>Compliance Education</Link>
      <Link to="/regulatory-faq" style={styles.link}>Regulatory FAQs</Link>
    </div>
  );
};

const styles = {
  menu: {
    padding: '1rem',
    backgroundColor: '#007BFF',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around',
    borderRadius: '5px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default ComplianceMenu;
