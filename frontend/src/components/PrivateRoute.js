import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { auth } from '../firebase';

const PrivateRoute = ({ element, ...rest }) => {
  const user = auth.currentUser; // Get the current user

  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
