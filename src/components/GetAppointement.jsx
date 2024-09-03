import React from "react";

export default function GetAppointement() {
  return (
    <div className="w-full bg-blue-700 p-14 text-white flex items-center justify-center gap-10">
      <p className="text-2xl">Contactez-nous pour plus d'informations ou prenez rendez-vous.</p>
      <button className="btn btn-outline text-white sm:btn-sm md:btn-md lg:btn-lg">
        En savoir plus
      </button>
    </div>
  );
}
