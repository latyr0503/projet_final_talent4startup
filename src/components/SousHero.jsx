import { CalendarDays, Clock4, Phone } from "lucide-react";
import React from "react";

export default function SousHero() {
  return (
    <div className="flex sm:flex-col mx-5 rounded-xl my-10 bg-gradient-to-r from-blue-800 to-blue-500">
      <div className="w-full p-8 flex flex-col gap-5 text-white justify-between">
        <Phone aria-label="Emergency phone icon" className="w-8 h-8" />
        <h2 className="text-xl font-bold">Emergency Cases</h2>
        <p className="text-sm ">
          Ut wisi enim ad minim veniam, quis laore nostrud exerci tation
        </p>
        <h2 className="text-2xl font-medium">+221 76 124 10 31</h2>
      </div>

      <div className="w-full p-8 flex flex-col gap-5 text-white justify-between">
        <CalendarDays aria-label="Doctor calendar icon" className="w-8 h-8" />
        <h2 className="text-xl font-bold">Calendrier des docteurs</h2>
        <p className="text-sm ">
          Ut wisi enim ad minim veniam, quis laore nostrud exerci tation Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="w-full p-8 flex flex-col gap-5 text-white justify-between">
        <Clock4 aria-label="Consultation hours icon" className="w-8 h-8" />
        <h2 className="text-xl font-bold">Heures de consultation</h2>
        <table className="w-full text-sm ">
          <thead className="text-white">
            <tr className="border-b border-white">
              <th className="text-left">Jour</th>
              <th className="text-left">Heures</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white">
              <td>Lundi - Vendredi</td>
              <td>8h - 20h</td>
            </tr>
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
