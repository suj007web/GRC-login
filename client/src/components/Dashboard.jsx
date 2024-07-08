import React from 'react';
import { useUser } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { currentUser, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className='text-center'>
      <h1 className='text-4xl underline'>Dashboard</h1>
      {currentUser ? (
        <>
          <p className='text-2xl'>Welcome, {currentUser.email}!</p>
          <p className='text-xl'>and you are {currentUser.role}</p>
          {currentUser.role == 'admin' ? <>You can go to <a href="/admin" className='text-blue-400 underline'>admin page</a>.</> : ""}
          <button onClick={handleLogout} className='mt-5 px-4 py-2 bg-black text-white rounded'>
            Logout
          </button>
        </>
      ) : (
        <p className='text-xl'>Login to view</p>
      )}
    </div>
  );
};

export default Dashboard;
