import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../firebase";  // Import the Google Sign-In function

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      // Sign in with Google
      const result = await signInWithGoogle();

      // Redirect to Marketplace after successful login
      if (result) {
        navigate("/marketplace");
      }
    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Login</h2>
      <p>Sign in with Google</p>
      <button
        onClick={handleGoogleSignIn}
        style={{
          padding: '0.8rem 1.5rem',
          backgroundColor: '#4285F4',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          fontSize: '1rem',
          cursor: 'pointer',
          margin: '1rem 0',
          transition: 'background-color 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#357AE8'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#4285F4'}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginPage;
