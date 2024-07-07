import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
import StackedNotifications from './StackedNotifications';
import { CiGlobe } from 'react-icons/ci';
import { FaAngleDown } from 'react-icons/fa';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recaptchValue, setRecaptchValue] = useState('');
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const clientSiteKey = import.meta.env.VITE_CAPTCHA_CLIENT_SITE_KEY;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchValue) {
      setNotification({ id: Math.random(), text: 'Please complete the reCAPTCHA' });
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(`${backendUrl}/api/user/signup`, {
        email,
        password,
        recaptchValue
      });
      setNotification({ id: Math.random(), text: response.data.message });

      setTimeout(() => {
        if (response.data.success) {
          navigate('/dashboard');
        }
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      setNotification({ id: Math.random(), text: error.response.data.error });
      setIsLoading(false); 
    }
  };

  return (
    <div className="flex-col md:flex md:flex-row h-[90vh]">
      <div className="w-[100vw] md:w-[50vw]">
        <div className="w-full shadow-md h-10 flex justify-end p-2">
          <h1 className="flex place-items-center gap-1 px-2">
            Region <CiGlobe /> <FaAngleDown />
          </h1>
          <button className="rounded-full bg-slate-200 py-1 px-4 flex place-items-center">
            India
          </button>
        </div>
        <div className="flex flex-col justify-center w-full place-items-center h-[90vh] gap-1">
          <h1>GRC Signup</h1>
          <h1 className="text-2xl font-semibold">Create your account</h1>
          <form onSubmit={handleSubmit} className="w-[50%]">
            <div>
              <label
                htmlFor="email-input"
                className="inline-block text-sm font-medium"
              >
                Email<span className="text-red-600">*</span>
              </label>
              <input
                id="email-input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded border-[1px] border-slate-300 py-1 px-2.5 focus:outline-indigo-600"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password-input"
                className=" inline-block text-sm font-medium"
              >
                Password<span className="text-red-600">*</span>
              </label>
              <input
                id="password-input"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded border-[1px] border-slate-300 py-1 px-2.5 focus:outline-indigo-600"
                required
              />
            </div>
            <ReCAPTCHA
              sitekey={clientSiteKey}
              onChange={(token) => setRecaptchValue(token)}
              className="flex justify-center mt-3"
            />
            <button
              type="submit"
              className="mb-1.5 w-full rounded px-4 py-2 text-center font-medium text-black shadow-[0_0_1px_1px_rgba(0,0,0,0.3)] mt-5 relative"
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900"></div>
                </div>
              )}
              Sign up with Email
            </button>
          </form>
          {notification && (
            <StackedNotifications
              removeNotif={() => setNotification(null)}
              notification={notification}
            />
          )}
        </div>
      </div>
      <div className="md:w-[50vw] bg-[#172741] text-white">
        <div className='flex flex-col gap-7 justify-center items-center h-screen'>
          <h1 className='text-5xl font-bold mt-8'>Welcome!</h1>
          <p className='text-md'>Stay aware, stay ahead, stay compliant</p>
          <img src="../../public/login.png" alt="" className='h-80 mx-auto' />
        </div>
      </div>
    </div>
  );
};

export default Signup;
