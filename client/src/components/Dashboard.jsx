import React from 'react';
import { useUser } from '../context/AuthContext';

const Dashboard = () => {
  const { currentUser } = useUser();

  return (
    <div className='text-center'>
      <h1 className='text-4xl underline'>Dashboard</h1>
      {currentUser ? (
        <>
        <p className='text-xl'>Welcome, {currentUser.email}!</p>
        <p className='text-xl'>and you are {currentUser.role}</p>
        {currentUser.role=='admin'? <>You can go to <a href="/admin" className='text-blue-400 underline'>admin page</a>.</> : ""}
        </>
      ) : (
        <p className='text-xl'>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
