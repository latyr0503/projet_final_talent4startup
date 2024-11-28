import React from "react";
import { Stethoscope, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import teamMember from "../assets/team-member-1.jpg";

const socialLinks = [
  { icon: Twitter, hrefKey: "twitter" },
  { icon: Facebook, hrefKey: "facebook" },
  { icon: Instagram, hrefKey: "instagram" },
  { icon: Linkedin, hrefKey: "linkedin" }
];

const CardDoctor = ({ doctor }) => {
  return (
    <div>
      <a href={`nos-doctors/${doctor.id}`}>
        <div className="flex justify-center relative">
          <img
            className="w-56 h-56 object-cover rounded-full"
            src={doctor.image || teamMember}
            alt={doctor.NomComplet || "Médecin"}
          />
          <div className="w-10 h-10 bg-blue-600 flex items-center justify-center text-white rounded-full absolute  top-0 right-16">
            <Stethoscope />
          </div>
        </div>

        <div className="text-center mt-4">
          <h3 className="text-xl font-semibold text-gray-800">
            {doctor.NomComplet}
          </h3>
          <p className="text-blue-600 mt-1">{doctor.specialite}</p>
          <p className="text-gray-600 text-sm mt-2 px-4">
            {doctor.description.substring(0, 100)}...
          </p>
        </div>
      </a>
      <div className="flex justify-center items-center my-4">
        {socialLinks.map(({ icon: Icon, hrefKey }, index) => (
          <a
            key={index}
            href={doctor[hrefKey]}
            className="mx-2 text-gray-500 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default CardDoctor;
