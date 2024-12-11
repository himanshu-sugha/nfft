import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import LoginPage from './pages/LoginPage';  // Combined Login and Register page
import Details from './pages/Details';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './components/AuthContext'; // Import AuthProvider
import ThankYou from './pages/ThankYou'; // Import the ThankYou page
import MyPurchases from './pages/MyPurchases'; 
function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div style={{ minHeight: '80vh', paddingBottom: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/login" element={<LoginPage />} /> {/* Updated login page */}
            <Route path="/nft/:id" element={<PrivateRoute element={<Details />} />} /> {/* Private route for NFT details */}
            <Route path="/thank-you" element={<ThankYou />} /> {/* Corrected route */}
            <Route path="/my-purchases" element={<MyPurchases />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
