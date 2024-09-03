import { CalendarDays } from "lucide-react";
import { Clock4 } from "lucide-react";
import { Phone } from "lucide-react";
import React from "react";

export default function SousHero() {
  return (
    <div className="flex mx-36 relative bottom-24 rounded-2xl ">
      <div className="bg-blue-800 w-1/3 rounded-tl-2xl rounded-bl-2xl p-10 flex flex-col items-start gap-5 text-white justify-between">
        <Phone className="w-16 h-16" />
        <h2 className="text-2xl font-bold">Emergency Cases</h2>
        <p>Ut wisi enim ad minim veniam, quis laore nostrud exerci tation </p>
        <h2 className="text-4xl font-medium">1-800-400-7400</h2>
      </div>
      <div className="bg-blue-600 w-1/3  p-10 flex flex-col items-start gap-5 text-white justify-between">
        <CalendarDays className="w-16 h-16" />
        <h2 className="text-2xl font-bold">Calendrier des docteurs</h2>
        <p>
          Ut wisi enim ad minim veniam, quis laore nostrud exerci tation Lorem
          ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </div>
      <div className="bg-blue-400 w-1/3 rounded-tr-2xl rounded-br-2xl p-10 flex flex-col items-start gap-5 text-white justify-between">
        <Clock4 className="w-16 h-16" />
        <h2 className="text-2xl font-bold">Heures de consultation</h2>
        <table className="table w-full">
          <thead className=" text-white">
            <tr>
              <th>Lundi - Vendredi</th>
              <th>8h - 20h</th>
            </tr>
          </thead>
          <tbody>
            <tr>
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
