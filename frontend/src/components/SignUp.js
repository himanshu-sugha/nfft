// src/components/SignUp.js
import { useState } from 'react';
import { auth } from '../firebase';  // Import auth from firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up successfully!');
      // Redirect to another page or clear form fields as needed
    } catch (error) {
      setError(error.message);
      console.log('Error signing up:', error);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px' }}>Sign Up</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignUp;
