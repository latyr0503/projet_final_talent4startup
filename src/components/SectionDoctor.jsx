// eslint-disable-next-line no-unused-vars
import React from "react";
import CardDoctor from "../Elements/CardDoctor";
import teamMember from "../assets/team-member-1.jpg";
import teamMember1 from "../assets/team-member-2.jpg";
import teamMember2 from "../assets/team-member-3.jpg";

export default function SectionDoctor() {
  const doctors = [
    {
      name: "Angela Adams",
      specialty: "Cardiac Surgery",
      description:
        "Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis",
      image: teamMember, // Remplace par l'URL réelle de l'image
      icon: "syringe", // Remplace par l'icône correspondante
      socials: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Jordan Kelley",
      specialty: "Cardiology",
      description:
        "Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis",
      image: teamMember1,
      icon: "heartbeat",
      socials: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Nicole Dixon",
      specialty: "Gynecology",
      description:
        "Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis",
      image: teamMember2,
      icon: "stethoscope",
      socials: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Nicole Dixon",
      specialty: "Gynecology",
      description:
        "Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis",
      image: teamMember2,
      icon: "stethoscope",
      socials: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];
  return (
    <div className="text-center mb-10">
      <h2 className="text-6xl font-bold">Rencontrez notre équipe</h2>
      <p className="w-1/2 mx-auto my-5 font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugiat
        ducimus similique possimus, voluptatum deserunt voluptas itaque ipsam
        amet odit id illo quibusdam culpa, eum, facilis officiis? Aliquid iusto
        ullam illum, rem asperiores voluptatem amet itaque. Quas minima,
        nesciunt hic dolore iure, dolor pariatur, totam expedita fugiat dicta
        quis qui.
      </p>
      <div className="flex justify-center items-center p-10">
        {doctors.map((doctor, index) => (
          <CardDoctor key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
