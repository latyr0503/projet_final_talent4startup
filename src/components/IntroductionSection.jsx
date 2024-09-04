import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background.jpeg';

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
    </div>
  );
};
