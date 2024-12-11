import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Header = () => {
  const { currentUser, logout } = useAuth();

  return (
    <header style={{
      padding: '1rem 2rem',
      background: 'linear-gradient(90deg, rgba(72, 61, 139, 1) 0%, rgba(123, 104, 238, 1) 100%)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '8px',
      color: 'white',
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ margin: '0', fontSize: '1.8rem', fontWeight: 'bold' }}>
          <Link to="/" style={{
            color: 'white',
            textDecoration: 'none',
            fontFamily: 'Arial, sans-serif',
          }}>NFT Marketplace</Link>
        </h1>
      </div>

      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{
          margin: '0 1rem',
          fontSize: '1rem',
          color: 'white',
          textDecoration: 'none',
          fontWeight: '500',
        }}>Home</Link>

        <Link to="/marketplace" style={{
          margin: '0 1rem',
          fontSize: '1rem',
          color: 'white',
          textDecoration: 'none',
          fontWeight: '500',
        }}>Marketplace</Link>

        <Link to="/schedule-drop" style={{
          margin: '0 1rem',
          fontSize: '1rem',
          color: 'white',
          textDecoration: 'none',
          fontWeight: '500',
        }}>Schedule Drop</Link>

        <Link to="/bidding" style={{
          margin: '0 1rem',
          fontSize: '1rem',
          color: 'white',
          textDecoration: 'none',
          fontWeight: '500',
        }}>Bidding</Link>

       
        <Link to="/my-purchases" style={{
          margin: '0 1rem',
          fontSize: '1rem',
          color: 'white',
          textDecoration: 'none',
          fontWeight: '500',
        }}>My Purchases</Link>

        {currentUser ? (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '1rem',
          }}>
            <span style={{
              marginRight: '1rem',
              fontSize: '1rem',
              fontWeight: '500',
              color: 'white',
            }}>
              Welcome, {currentUser.displayName}
            </span>
            <button
              onClick={logout}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#c82333'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#dc3545'}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" style={{
            marginLeft: '1rem',
            fontSize: '1rem',
            color: 'white',
            textDecoration: 'none',
            fontWeight: '500',
          }}>Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
