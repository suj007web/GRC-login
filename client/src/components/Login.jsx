import React, { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {

  const [recaptchValue, setRecaptchValue] = useState('')

  const clientSiteKey = import.meta.env.VITE_CAPTCHA_CLIENT_SITE_KEY;

  function onChange(value) {
    setRecaptchValue(value);
  }

  return (
    <div>
      <div className="flex h-screen">
        <div className="w-[50vw] ">
          <div className="w-full shadow-md h-10 flex justify-end p-2">
            <h1 className="flex place-items-center gap-1 px-2">
              Region <CiGlobe /> <FaAngleDown />
            </h1>
            <button className="rounded-full bg-slate-200 py-1 px-4 flex place-items-center">
              India
            </button>
          </div>
          <div className="flex flex-col justify-center w-full place-items-center h-[80vh] gap-8">
            <h1>Company Name</h1>
            <h1 className="text-2xl font-semibold">Log into your account</h1>
            <div className="flex flex-col">
              <button
                type="button"
                className="text-white bg-[#24292F] hover:bg-[#474646] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2 "
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                Sign in with Github
              </button>
              <button
                type="button"
                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                    clipRule="evenodd"
                  />
                </svg>
                Sign in with Google
              </button>
              <button
                type="button"
                className="text-white bg-green-800 hover:bg-green-800/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
              >
              
                Sign in with Okta
              </button>
              <button
                type="button"
                className="text-white bg-slate-600 hover:bg-slate-600/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
              >
               
                Sign in with OneLogin
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-grow border-t border-gray-300 w-40"></div>
              <span className="mx-4 text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300 w-40"></div>
            </div>
            <form onSubmit={() => {}} className="w-[50%]">
              <div>
                <label
                  htmlFor="email-input"
                  className="mb-1 inline-block text-sm font-medium"
                >
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  id="email-input"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 mb-2 focus:outline-indigo-600"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password-input"
                  className="mb-1 inline-block text-sm font-medium"
                >
                  Password<span className="text-red-600">*</span>
                </label>
                <input
                  id="password-input"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
                  required
                />
              </div>
              <ReCAPTCHA
                sitekey={clientSiteKey}
                onChange={onChange}
                className="flex justify-center mt-5"
              />
              <button
                type="submit"
                className="mb-1.5 w-full rounded  px-4 py-2 text-center font-medium text-black shadow-[0_0_1px_1px_rgba(0,0,0,0.3)]  mt-5"
              >
                Sign in with Email
              </button>
            </form>
          </div>
        </div>
        <div className="w-[50vw] bg-[#172741]"></div>
      </div>
    </div>
  );
};

export default Login;
