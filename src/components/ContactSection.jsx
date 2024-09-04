import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/b.jpeg';

export const ContactSection = () => {
  return (
    <div className="relative overflow-hidden ">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})`, height: '300px', width: '100%' }}
      />
      <div className="absolute inset-0 bg-cyan-200 opacity-50" />
      <div className="relative flex flex-col h-[300px] items-center justify-center space-y-4">
        <h2 className="text-5xl font-semibold text-white">Contactez-nous</h2>
        <div className="flex space-x-4">
          <Link to="/" className="font-semibold text-white hover:underline">
            Home
          </Link>
          <p className="text-xl font-semibold text-white">/Contactez-nous</p>
        </div>
      </div>
    </div>
  );
};
