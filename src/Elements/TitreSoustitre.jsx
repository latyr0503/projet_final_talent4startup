import React from "react";

export default function TitreSoustitre({ titre, desctiption }) {
  return (
    <div className="text-center sm:p-5">
      <h2 className="lg:text-6xl text-4xl font-bold">{titre}</h2>
      <p className="lg:w-1/2 lg:mx-auto mt-5 font-light">{desctiption}</p>
    </div>
  );
}
