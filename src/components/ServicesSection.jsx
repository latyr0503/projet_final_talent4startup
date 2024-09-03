import { Ambulance } from "lucide-react";
import { Stethoscope } from "lucide-react";
import { FolderHeart } from "lucide-react";
import { Hospital } from "lucide-react";
import { HeartHandshake } from "lucide-react";
import { HeartPulse } from "lucide-react";
import React from "react";

export default function ServicesSection() {
  return (
    <div>
      <h2 className="text-6xl text-center font-bold">Decouvrez Nos Services</h2>
      <p className="w-1/2 text-center mx-auto my-5 font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugiat
        ducimus similique possimus, voluptatum deserunt voluptas itaque ipsam
        amet odit id illo quibusdam culpa, eum, facilis officiis? Aliquid iusto
        ullam illum, rem asperiores voluptatem amet itaque. Quas minima,
        nesciunt hic dolore iure, dolor pariatur, totam expedita fugiat dicta
        quis qui.
      </p>
      <div className="grid grid-cols-3 gap-5 p-10">
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
    </div>
  );
}
