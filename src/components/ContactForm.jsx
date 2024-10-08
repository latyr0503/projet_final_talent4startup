import React from 'react';

export const ContactForm = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-6">
      <div className="lg:w-1/2 p-8 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm -mt-40">
          <div>
            <h1 className='font-bold'>Lorem</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum odio fugiat eaque tempora, debitis necessitatibus hic magni dolores vitae sed amet ullam nam culpa laudantium, explicabo, possimus in maxime fuga!</p>
          </div>
          <div>
            <h1 className='font-bold'>Lorem</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum odio fugiat eaque tempora, debitis necessitatibus hic magni dolores vitae sed amet ullam nam culpa laudantium, explicabo, possimus in maxime fuga!</p>
          </div>
          <div>
            <h1 className='font-bold'>Lorem</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum odio fugiat eaque tempora, debitis necessitatibus hic magni dolores vitae sed amet ullam nam culpa laudantium, explicabo, possimus in maxime fuga!</p>
          </div>
          <div>
            <h1 className='font-bold'>Lorem</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum odio fugiat eaque tempora, debitis necessitatibus hic magni dolores vitae sed amet ullam nam culpa laudantium, explicabo, possimus in maxime fuga!</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 lg:max-w-2xl p-8">
        <form className="space-y-4">
          <div className="flex flex-col">
            <input id="nom" type="text" placeholder="Nom" className="mt-1 p-3 rounded-md bg-gray-200"/>
          </div>
          <div className="flex flex-col">
            <input id="email" type="email" placeholder="Email" className="mt-1 p-3 rounded-md bg-gray-200"/>
          </div>
          <div className="flex flex-col">
            <textarea id="message" name="message" placeholder="Votre message" rows="6" className="mt-1 p-3 rounded-md bg-gray-200"/>
          </div>
          <button
            className="bg-cyan-700 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-cyan-300 transition-transform transform hover:translate-y-1"
          >
            <p>Contactez-nous</p>
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
        </form>
      </div>
    </div>
  );
};
