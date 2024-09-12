import { Ambulance, Stethoscope, FolderHeart, Hospital, HeartHandshake, HeartPulse } from "lucide-react";
import React from "react";

export default function ServicesSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5 md:p-10 -mt-20">
      <div className="flex gap-3 p-6 md:p-10 items-center justify-center">
        <div>
          <HeartPulse className="w-16 h-16 md:w-24 md:h-24 text-blue-700" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold">Cardiac Clinic</h3>
          <p className="text-xs md:text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            aspernatur officiis excepturi dicta eligendi aliquam dolorem...
          </p>
        </div>
      </div>
      <div className="flex gap-3 p-6 md:p-10 items-center justify-center">
        <div>
          <Ambulance className="w-16 h-16 md:w-24 md:h-24 text-blue-700" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold">Emergency Services</h3>
          <p className="text-xs md:text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            aspernatur officiis excepturi dicta eligendi aliquam dolorem...
          </p>
        </div>
      </div>
      <div className="flex gap-3 p-6 md:p-10 items-center justify-center">
        <div>
          <HeartHandshake className="w-16 h-16 md:w-24 md:h-24 text-blue-700" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold">Heart Care</h3>
          <p className="text-xs md:text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            aspernatur officiis excepturi dicta eligendi aliquam dolorem...
          </p>
        </div>
      </div>
      <div className="flex gap-3 p-6 md:p-10 items-center justify-center">
        <div>
          <Stethoscope className="w-16 h-16 md:w-24 md:h-24 text-blue-700" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold">General Health</h3>
          <p className="text-xs md:text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            aspernatur officiis excepturi dicta eligendi aliquam dolorem...
          </p>
        </div>
      </div>
      <div className="flex gap-3 p-6 md:p-10 items-center justify-center">
        <div>
          <Hospital className="w-16 h-16 md:w-24 md:h-24 text-blue-700" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold">Hospital Services</h3>
          <p className="text-xs md:text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            aspernatur officiis excepturi dicta eligendi aliquam dolorem...
          </p>
        </div>
      </div>
      <div className="flex gap-3 p-6 md:p-10 items-center justify-center">
        <div>
          <FolderHeart className="w-16 h-16 md:w-24 md:h-24 text-blue-700" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold">Specialized Care</h3>
          <p className="text-xs md:text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            aspernatur officiis excepturi dicta eligendi aliquam dolorem...
          </p>
        </div>
      </div>
    </div>
  );
}
