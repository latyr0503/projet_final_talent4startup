import React from "react";

export default function TitreSoustitre({ titre, desctiption }) {
  return (
    <div className="text-center">
      <h2 className="text-6xl font-bold">{titre}</h2>
      <p className="w-1/2 mx-auto my-5 font-light">{desctiption}</p>
    </div>
  );
}
