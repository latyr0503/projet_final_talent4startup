import React from 'react';
import image from "../assets/image.jpeg";


export const DishSection = () => {
  return (
    <div className="p-6 max-w-full mx-auto bg-white rounded-xl shadow-md flex space-x-4">
      <div className="flex flex-col items-center w-full max-w-sm bg-white rounded-xl shadow-md">
        <img
          src={image}
          alt="photo"
          className="w-full h-64 object-cover rounded-t-xl"
        />
        <h5 className="text-lg font-bold mt-4">Chosen For Excellence</h5>
        <p className="text-gray-600 mt-2 text-center">
          Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud exerci tation ulm hedi corper turet suscipit lobortis nisl
        </p>
        <h6 className="text-blue-500 mt-4 cursor-pointer hover:underline">Read More</h6>
      </div>

      <div className="flex flex-col items-center w-full max-w-sm bg-white rounded-xl shadow-md">
        <img
          src={image}
          alt="photo"
          className="w-full h-64 object-cover rounded-t-xl"
        />
        <h5 className="text-lg font-bold mt-4">Chosen For Excellence</h5>
        <p className="text-gray-600 mt-2 text-center">
          Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud exerci tation ulm hedi corper turet suscipit lobortis nisl
        </p>
        <h6 className="text-blue-500 mt-4 cursor-pointer hover:underline">Read More</h6>
      </div>

      <div className="flex flex-col items-center w-full max-w-sm bg-white rounded-xl shadow-md">
        <img
          src={image}
          alt="photo"
          className="w-full h-64 object-cover rounded-t-xl"
        />
        <h5 className="text-lg font-bold mt-4">Chosen For Excellence</h5>
        <p className="text-gray-600 mt-2 text-center">
          Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud exerci tation ulm hedi corper turet suscipit lobortis nisl
        </p>
        <h6 className=" mt-4 cursor-pointer hover:underline">Read More</h6>
      </div>
    </div>
  );
};
