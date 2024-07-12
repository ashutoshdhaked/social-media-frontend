"use client"
import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      <div className="p-8">
        <header className="flex justify-between items-center">
        <div className="mb-8 flex items-center">
            <Image src="/icon-socialmedia.svg" alt="Social Media Icon" width={100} height={100} />
             <p className="font-bold text-4xl">Logs.org</p>
        </div>
        <div>
        <nav className="flex justify-between items-center gap-5 mb-8">
            <ul className="flex space-x-4 mx-10">
              <li className="relative group">
                <a href="#" className="font-bold hover:text-white relative">
                  About
                  <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-gradient-to-r from-indigo-700 to-indigo-700 transition-all duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                </a>
              </li>
              <li className="relative group">
                <a href="#" className="font-bold hover:text-white relative">
                  Download
                  <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-gradient-to-r  from-indigo-700 to-indigo-700 transition-all duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                </a>
              </li>
              <li className="relative group">
                <a href="#" className="font-bold hover:text-white relative">
                  Pricing
                  <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-gradient-to-r  from-indigo-700 to-indigo-700 transition-all duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                </a>
              </li>
              <li className="relative group">
                <a href="#" className="font-bold hover:text-white relative">
                  Features
                  <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-gradient-to-r  from-indigo-700 to-indigo-700 transition-all duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                </a>
              </li>
              <li className="relative group">
                <a href="#" className="font-bold hover:text-white relative">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r  from-indigo-700 to-indigo-700 transition-all duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                </a>
              </li>
            </ul>
            <button className="ml-4 bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-900 font-bold">
              Sign In
            </button>
          </nav>
        </div>  
        </header>
        <div className="flex items-center justify-center">
        <div className="flex justify-between gap-10 shadow-gray-700 shadow-2xl bg-gray-900 p-6 rounded-md w-5/6">
          <div className="flex-1 flex flex-col items-start justify-center p-4">
            <h1 className="text-3xl mb-6">Register</h1>
            <form className="w-full flex flex-col">
              <label htmlFor="name" className="mb-1 font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mb-4 p-2 text-white bg-gray-900 focus:outline-none border-b-2 focus:border-blue-800"
              />
              <label htmlFor="email" className="mb-1 font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mb-4 p-2 text-white bg-gray-900 focus:outline-none border-b-2 focus:border-blue-800"
              />
              <label htmlFor="password" className="mb-1 font-bold">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mb-4 p-2 text-white bg-gray-900 focus:outline-none border-b-2 focus:border-blue-800"
              />
              <button
                type="submit"
                className="bg-indigo-600 py-4 rounded-md font-bold mt-4 hover:bg-indigo-900"
              >
                Register
              </button>
            </form>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-4">
            <div className="text-center">
              <h2 className="text-4xl mb-8">Welcome to Logs.org</h2>
              <p className="text-lg">
               create and build your network with this platform.
               our palatform i provide end to end encryption and security to your message.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
