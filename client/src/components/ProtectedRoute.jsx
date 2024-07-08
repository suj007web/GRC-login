import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/AuthContext';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { currentUser } = useUser();

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  if (requiredRole && currentUser.role !== requiredRole) {
    return <div className='text-center text-red-500 text-2xl'>Unauthorized</div>;
  }

  return children;
};

export default ProtectedRoute;
