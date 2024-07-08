import React from 'react';
import { useUser } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const { currentUser, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className='text-center'>
      <h1 className='text-4xl underline'>Admin Page</h1>
      {currentUser ?
        <>
          <p className='text-2xl'>Welcome, admin {currentUser.email}!</p>
          <button onClick={handleLogout} className='mt-5 px-4 py-2 bg-black text-white rounded'>
            Logout
          </button>
        </>
        :
        ""
      }
    </div>
  );
};

export default Admin;
