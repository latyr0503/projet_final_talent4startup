import React, { useState } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Calendar,
  Check,
} from "lucide-react";
import medecin from "../assets/team-member-2.jpg";

const DetailDoctor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const doctor = {
    twitter: "https://twitter.com/doctor",
    facebook: "https://facebook.com/doctor",
    instagram: "https://instagram.com/doctor",
    linkedin: "https://linkedin.com/in/doctor",
  };

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col md:flex-row overflow-hidden -mt-24 p-4 scroll-smoothoverflow-auto touch-auto">
      <div className="md:w-1/3 flex flex-col items-center mb-4 md:mb-0">
        <div className="flex flex-col">
          <img src={medecin} alt="medecin" className="w-80 md:w-72 lg:w-72" />
          <h3 className="mt-8 font-medium">Jordan Kelley</h3>
          <h6 className="text-sm text-blue-700 border-b border-gray-300 pb-2 font-normal">
            Cardiology
          </h6>
          <div className="mt-4 flex items-center text-gray-800">
            <Phone className="mr-2 text-blue-700 size-4" />
            <span>(+221) 783828958</span>
          </div>
          <div className="mt-2 flex items-center text-gray-800">
            <Mail className="mr-2 text-blue-700 size-4" />
            <span>exempl@example.com</span>
          </div>
        </div>

        <button
          className="mt-6 px-4 py-2 bg-blue-700 w-72 md:w-64 lg:w-72 text-white rounded-lg hover:bg-blue-500 flex items-center justify-center"
          onClick={handleOpenModal}
        >
          <Calendar className="mr-2" />
          Book Appointment
        </button>
        {isModalOpen && (
          <div className="mt-2 w-72 md:w-64 lg:w-72 bg-blue-700 p-6 rounded-lg ">
            <h6 className="text-white">Nous sommes là pour vous</h6>
            <h2 className="text-lg font-bold mb-4 text-white">
              Prendre un rendez-vous
            </h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  className="border rounded-lg w-full py-2 px-3 bg-white"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  className="border rounded-lg w-full py-2 px-3 bg-white"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="date"
                  className="border rounded-lg w-full py-2 px-3 bg-white"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="time"
                  className="border rounded-lg w-full py-2 px-3 bg-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-white text-sm font-bold text-blue-700 px-4 py-2 rounded-lg flex items-center w-full gap-2 transition-transform transform hover:translate-y-1"
              >
                Prendre un rendez-vous
                <svg
                  className="w-4 h-4 transition-transform transform group-hover:translate-x-2"
                  stroke="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5L21 12m0 0L13.5 19.5M21 12H3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        )}

        <div className="flex  items-center my-4">
          <a
            href={doctor.twitter}
            className="mx-2 text-gray-500 hover:text-blue-600"
            target="_blank"
          >
            <Twitter />
          </a>
          <a
            href={doctor.facebook}
            className="mx-2 text-gray-500 hover:text-blue-600"
            target="_blank"
          >
            <Facebook />
          </a>
          <a
            href={doctor.instagram}
            className="mx-2 text-gray-500 hover:text-blue-600"
            target="_blank"
          >
            <Instagram />
          </a>
          <a
            href={doctor.linkedin}
            className="mx-2 text-gray-500 hover:text-blue-600"
            target="_blank"
          >
            <Linkedin />
          </a>
        </div>
      </div>
      <div className="md:w-2/3 px-5 ">
        <p className="text-xl text-justify font-light">
          Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
          commodo non habent claritatem insitamconsequat duis autem facilisis at
          vero eros vel eum iriure. Duis autem vel eum iriure dolor in hendrerit
          in vulputate velit esse molestie consequat, vel illum dolore eu
          feugiat nulla facilisis at vero eros et accumsan et iusto odio
          dignissim qui blandit praesent luptatum
        </p>
        <br />
        <p className="font-medium text-justify text-sm">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Nam liber tempor cum soluta nobis eleifend option congue nihil
          imperdiet doming id quod mazim placerat facer possim assum. Nam liber
          tempor cum soluta nobis eleifend option congue nihil imperdiet doming
          id quod mazim placerat facer possim assum. Typi non habent claritatem
          insitam; est usus legentis in iis qui facit eorum claritatem.
          Investigationes demonstraverunt lectores legere me lius quod ii legunt
          saepius. Claritas est etiam processus dynamicus, qui sequitur
          mutationem consuetudium lectorum. Ulputate velit esse molestie
          consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
          accumsan et iusto odio dignissim qui blandit praesent luptatum zzril.
        </p>
        <div className="mt-6">
          <div className="flex justify-between border-b border-gray-300 pb-2">
            <span className="font-semibold">Specialty:</span>
            <span>Cardiology</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 pb-2 mt-2">
            <span className="font-semibold">Degrees:</span>
            <span>M.D. of Medicine</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 pb-2 mt-2">
            <span className="font-semibold">Training:</span>
            <span>Lorem ipsum dolor sit...</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 pb-2 mt-2">
            <span className="font-semibold">Work Days</span>
            <span className="flex space-x-2">
              <span className="flex items-center">
                <Check size={18} className="text-blue-500" />
                <span className="ml-1">Monday</span>
              </span>
              <span className="flex items-center">
                <Check size={18} className="text-blue-500" />
                <span className="ml-1">Tuesday</span>
              </span>
              <span className="flex items-center">
                <Check size={18} className="text-blue-500" />
                <span className="ml-1">Wednesday</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDoctor;
