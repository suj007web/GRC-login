import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
const Login = () => {
  return (
    <div>
           <div className="flex h-screen">
          <div className="w-[50vw] ">
            <div className="w-full shadow-md h-10 flex justify-end p-2">
              <h1 className="flex place-items-center gap-1">Region <CiGlobe/> <FaAngleDown/></h1>
              <button className="rounded-full bg-slate-200 py-1 px-4 flex place-items-center">India</button>
            </div>
            <div>
              <h1>Company Name</h1>
              <h1>Log into your account</h1>
            </div>
          </div>
          <div className="w-[50vw] bg-[#172741]">

          </div>
        </div>
    </div>
  )
}

export default Login