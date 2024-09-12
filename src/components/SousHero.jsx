import { CalendarDays } from "lucide-react";
import { Clock4 } from "lucide-react";
import { Phone } from "lucide-react";
import React from "react";

export default function SousHero() {
  return (
    <div className="flex flex-col md:flex-row mx-5 md:mx-36 relative bottom-12 md:bottom-24 rounded-2xl">
      <div className="bg-blue-800 w-full md:w-1/3 rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl p-6 md:p-8 flex flex-col items-start gap-5 text-white justify-between">
        <Phone className="w-8 h-8 md:w-12 md:h-12" />
        <h2 className="text-lg md:text-xl font-bold">Emergency Cases</h2>
        <p className="text-sm md:text-base">
          Ut wisi enim ad minim veniam, quis laore nostrud exerci tation 
        </p>
        <h2 className="text-2xl md:text-3xl font-medium">+221 76 124 10 31</h2>
      </div>
      <div className="bg-blue-600 w-full md:w-1/3 p-6 md:p-8 flex flex-col items-start gap-5 text-white justify-between">
        <CalendarDays className="w-8 h-8 md:w-12 md:h-12" />
        <h2 className="text-lg md:text-xl font-bold">Calendrier des docteurs</h2>
        <p className="text-sm md:text-base">
          Ut wisi enim ad minim veniam, quis laore nostrud exerci tation Lorem
          ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </div>
      <div className="bg-blue-400 w-full md:w-1/3 rounded-bl-2xl rounded-br-2xl md:rounded-bl-none md:rounded-tr-2xl p-6 md:p-8 flex flex-col items-start gap-5 text-white justify-between">
        <Clock4 className="w-8 h-8 md:w-12 md:h-12" />
        <h2 className="text-lg md:text-xl font-bold">Heures de consultation</h2>
        <table className="table w-full text-sm md:text-base">
          <thead className="text-white">
            <tr className="border-b border-white">
              <th>Lundi - Vendredi</th>
              <th>8h - 20h</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white">
              <td>Samedi</td>
              <td>9h - 18h</td>
            </tr>
            <tr>
              <td>Dimanche</td>
              <td>9h - 18h</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
