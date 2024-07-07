import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';

function Auth() {
  const [toLogin, setToLogin] = useState(true);

  return (
    <div className=''>
      {toLogin ? <Login /> : <Signup />}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setToLogin(!toLogin)}
          className="text-blue-500 underline"
        >
          {toLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
        </button>
      </div>
    </div>
  );
}

export default Auth;
