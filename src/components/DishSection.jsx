import React from "react";
import image from "../assets/image.jpeg";

const dishes = [
  {
    id: 1,
    title: "Chosen For Excellence",
    description:
      "Ut wisi enim ad minim veniam, quis laore est usus legentis in iis qui facit eorum nostrud exerci tation ulm hedi corper turet suscipit lobortis nisl",
    img: image,
  },
  {
    id: 2,
    title: "Top Quality Dish",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: image,
  },
  {
    id: 3,
    title: "Delicious Flavors",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: image,
  },
];

export const DishSection = () => {
  return (
    <div className="flex items-center justify-center space-x-8 mb-20">
      {dishes.map((dish) => (
        <div key={dish.id} className="max-w-sm rounded-xl shadow-md">
          <img
            src={dish.img}
            alt="photo"
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <div className="p-7">
            <h5 className="text-xl font-bold">{dish.title}</h5>
            <p className="text-gray-600 mt-4 text-justify">
              {dish.description}
            </p>
            <button className="text-slate-800 font-semibold mt-4 hover:underline">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
