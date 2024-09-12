import React from 'react';
import { Link } from 'react-router-dom';
import img from "../assets/img.jpeg";

const CareInfo = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="flex flex-col lg:flex-row items-start justify-between w-full max-w-5xl">
        <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Soins et équipements
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-5xl mb-4 lg:mb-6">
            de qualité pour les <br className="hidden lg:block" /> patients
          </h1>
          <div className="flex flex-col lg:flex-row justify-between text-black">
            <div className="flex-1 text-center lg:text-left">
              {Array(4).fill().map((_, index) => (
                <div key={index} className="flex items-start text-gray-700 my-2">
                  <span className="text-xl text-green-800">&rarr;</span>
                  <p className="flex-1 ml-2">Lorem ipsum dolor sit,</p>
                </div>
              ))}
            </div>
            <div className="flex-1 text-center lg:text-right mt-4 lg:mt-0">
              {Array(4).fill().map((_, index) => (
                <div key={index} className="flex items-start text-gray-700 my-2">
                  <span className="text-xl text-green-800">&rarr;</span>
                  <p className="flex-1 ml-2">Lorem ipsum dolor sit, </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-start mt-6">
            <Link to="/about">
              <button
                className="bg-cyan-700 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-600 transition-transform transform hover:translate-y-1"
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
        <div className="flex-1 flex justify-center items-start mt-8 lg:mt-0">
          <img src={img} alt="img" className="w-full max-w-sm lg:max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default CareInfo;
