import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background.jpeg';
import img from "../assets/img.jpeg";

export const IntroductionSection = () => {
  return (
    <div>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat text-center"
        style={{ backgroundImage: `url(${backgroundImage})`, height: '600px', width: '100%' }}
      >
        <div className="flex flex-col h-full items-center justify-center space-y-4 bg-black bg-opacity-50">
          <h2 className="text-5xl font-semibold text-white">About</h2>
          <div className="flex space-x-4">
            <Link to="/" className="font-semibold text-white hover:underline">
              Home
            </Link>
            <p className="text-xl font-semibold text-white">/About</p>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full max-w-5xl">
          <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
            <h1 className="text-5xl font-bold mb-6">
              Soins et équipements
            </h1>
            <h1 className="text-5xl  mb-6">
              de qualité pour les <br />patients</h1>
            <div className="flex justify-between text-black">
              <div className="flex-1 text-center ">
                <div className="flex items-start text-gray-700">
                  <span className="text-xl text-green-800">&rarr;</span>
                  <p className="flex-1">
                    <p>Lorem ipsum dolor sit, amet  </p>
                  </p>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-xl text-green-800">&rarr;</span>
                  <p className="flex-1">
                    <p>Lorem ipsum dolor sit, amet  </p>
                  </p>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-xl text-green-800">&rarr;</span>
                  <p className="flex-1">
                    <p>Lorem ipsum dolor sit, amet  </p>
                  </p>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-xl text-green-800">&rarr;</span>
                  <p className="flex-1">
                    <p>Lorem ipsum dolor sit, amet  </p>
                  </p>
                </div>

              </div>
              <div className="flex-1 text-right ">
                <div className="flex items-start text-gray-700">
                  <span className="text-xl text-green-800">&rarr;</span>
                  <p className="flex-1">
                    <p>Lorem ipsum dolor sit, amet  </p>
                  </p>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-xl text-green-800">&rarr;</span>
                  <p className="flex-1">
                    <p>Lorem ipsum dolor sit, amet  </p>
                  </p>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-xl text-green-800">&rarr;</span>
                  <p className="flex-1">
                    <p>Lorem ipsum dolor sit, amet  </p>
                  </p>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-xl text-green-800">&rarr;</span>
                  <p className="flex-1">
                    <p>Lorem ipsum dolor sit, amet  </p>
                  </p>
                </div>            
                </div>
            </div>
            <div className="flex justify-start ">
              <Link to="/about">
              <button
                className="bg-green-300 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition-transform transform hover:translate-y-1"
              >
                <p>Apprendre encore plus</p>
                <svg
                  className="w-6 h-6 transition-transform transform group-hover:translate-x-2"
                  stroke="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5L21 12m0 0L13.5 19.5M21 12H3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-start">
            <img src={img} alt="img" className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </div>
  );
};