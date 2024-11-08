import { Ambulance, Stethoscope, FolderHeart, Hospital, HeartHandshake, HeartPulse } from "lucide-react";
import React from "react";

const services = [
  { icon: HeartPulse, title: "Cardiac Clinic", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A aspernatur officiis excepturi dicta eligendi aliquam dolorem..." },
  { icon: Ambulance, title: "Emergency Services", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A aspernatur officiis excepturi dicta eligendi aliquam dolorem..." },
  { icon: HeartHandshake, title: "Heart Care", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A aspernatur officiis excepturi dicta eligendi aliquam dolorem..." },
  { icon: Stethoscope, title: "General Health", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A aspernatur officiis excepturi dicta eligendi aliquam dolorem..." },
  { icon: Hospital, title: "Hospital Services", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A aspernatur officiis excepturi dicta eligendi aliquam dolorem..." },
  { icon: FolderHeart, title: "Specialized Care", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A aspernatur officiis excepturi dicta eligendi aliquam dolorem..." },
];

export default function ServicesSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5">
      {services.map(({ icon: Icon, title, description }, index) => (
        <div key={index} className="flex gap-3 p-6 items-center justify-center bg-blue-50 rounded-2xl shadow-md">
          <Icon className="w-32 h-32  " />
          <div>
            <h3 className="text-lg md:text-xl font-bold">{title}</h3>
            <p className="text-sm">{description.substring(0, 100)}...</p>
          </div>
        </div>
      ))}
    </div>
  );
}
