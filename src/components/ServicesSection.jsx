import { Ambulance } from "lucide-react";
import { Stethoscope } from "lucide-react";
import { FolderHeart } from "lucide-react";
import { Hospital } from "lucide-react";
import { HeartHandshake } from "lucide-react";
import { HeartPulse } from "lucide-react";
import React from "react";

export default function ServicesSection() {
  return (
    <div className="grid md:grid-cols-3 gap-5 p-10">
      <div className="flex gap-3 p-10 items-center justify-center">
        <div>
          <HeartPulse className="w-24 h-24 text-blue-700" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Cardiac Clinic</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            aspernatur officiis excepturi dicta eligendi aliquam dolorem...
          </p>
        </div>
      </div>
      <div className="flex gap-3 p-10 items-center justify-center">
        <div>
          <Ambulance className="w-24 h-24 text-blue-700" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Cardiac Clinic</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            aspernatur officiis excepturi dicta eligendi aliquam dolorem...
          </p>
        </div>
      </div>
      <div className="flex gap-3 p-10 items-center justify-center">
        <div>
          <HeartHandshake className="w-24 h-24 text-blue-700" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Cardiac Clinic</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            aspernatur officiis excepturi dicta eligendi aliquam dolorem...
          </p>
        </div>
      </div>
      <div className="flex gap-3 p-10 items-center justify-center">
        <div>
          <Stethoscope className="w-24 h-24 text-blue-700" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Cardiac Clinic</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            aspernatur officiis excepturi dicta eligendi aliquam dolorem...
          </p>
        </div>
      </div>
      <div className="flex gap-3 p-10 items-center justify-center">
        <div>
          <Hospital className="w-24 h-24 text-blue-700" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Cardiac Clinic</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            aspernatur officiis excepturi dicta eligendi aliquam dolorem...
          </p>
        </div>
      </div>
      <div className="flex gap-3 p-10 items-center justify-center">
        <div>
          <FolderHeart className="w-24 h-24 text-blue-700" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Cardiac Clinic</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            aspernatur officiis excepturi dicta eligendi aliquam dolorem...
          </p>
        </div>
      </div>
    </div>
  );
}
