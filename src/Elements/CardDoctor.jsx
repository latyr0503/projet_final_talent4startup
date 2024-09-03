// eslint-disable-next-line no-unused-vars
import React from "react";
import { Stethoscope } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";

const CardDoctor = ({ doctor }) => {
  return (
    <div>
      <div className="flex justify-center mt-4">
        <img
          className="w-56 h-56 object-cover rounded-full"
          src={doctor.image}
          alt={doctor.name}
        />
        <div className="w-10 h-10 bg-blue-600 flex items-center justify-center text-white rounded-full relative top-0 right-16">
          <Stethoscope />
        </div>
      </div>

      <div className="text-center mt-4">
        <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
        <p className="text-blue-600 mt-1">{doctor.specialty}</p>
        <p className="text-gray-600 text-sm mt-2 px-4">{doctor.description}</p>
        <div className="flex justify-center items-center my-4">
          <a
            href={doctor.socials.twitter}
            className="mx-2 text-gray-500 hover:text-blue-600"
          >
            <Twitter />
          </a>
          <a
            href={doctor.socials.facebook}
            className="mx-2 text-gray-500 hover:text-blue-600"
          >
            <Facebook />
          </a>
          <a
            href={doctor.socials.instagram}
            className="mx-2 text-gray-500 hover:text-blue-600"
          >
            <Instagram />
          </a>
          <a
            href={doctor.socials.linkedin}
            className="mx-2 text-gray-500 hover:text-blue-600"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  );
};
export default CardDoctor;