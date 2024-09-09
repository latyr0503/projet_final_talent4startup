import React from "react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import medecin from "../assets/team-member-2.jpg";

const DetailDoctor = () => {
  const doctor = {
    twitter: "https://twitter.com/doctor",
    facebook: "https://facebook.com/doctor",
    instagram: "https://instagram.com/doctor",
    linkedin: "https://linkedin.com/in/doctor",
  };

  return (
    <div className="flex flex-col md:flex-row overflow-hidden">
      <div className="md:w-96 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <img src={medecin} alt="medecin" className="w-full max-w-md" />
          <h1 className="mt-4 text-2xl font-bold ms-8">Jordan Kelley</h1>
          <h2 className="text-xl font-semibold text-blue-700">Cardiology</h2>
          <div className="mt-4 flex items-center text-gray-800">
            <Phone className="mr-2 text-blue-700" />
            <span>(+221) 783828958</span>
          </div>
          <div className="mt-6 ms-8 flex items-center text-gray-800">
            <Mail className="mr-2 text-blue-700" />
            <span>exempl@example.com</span>
          </div>
        </div>

        <button className="mt-6 px-4 py-2 bg-green-300 w-80 text-white rounded-lg hover:bg-green-600">
          Book Appointment
        </button>

        <div className="flex justify-center items-center my-4">
          <a
            href={doctor.twitter}
            className="mx-2 text-gray-500 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
          <a
            href={doctor.facebook}
            className="mx-2 text-gray-500 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            href={doctor.instagram}
            className="mx-2 text-gray-500 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href={doctor.linkedin}
            className="mx-2 text-gray-500 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </div>
      </div>

      <div className="md:w-2/3 p-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Delectus quisquam tenetur animi expedita
          inventore est? Autem rem possimus facere blanditiis dolores,
          voluptatibus numquam ex vel. Quos ipsum vel nisi eveniet!
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <br />
        <br />
        <p className="font-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          similique ex incidunt ut autem nesciunt obcaecati beatae, provident
          natus reiciendis sunt? Molestiae aspernatur suscipit praesentium at,
          quos maiores repellendus ducimus! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Soluta laborum consequuntur illum
          tempore totam aspernatur culpa unde placeat suscipit eum recusandae
          alias eveniet laudantium, perspiciatis qui, sint magnam. Accusantium,
          aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          reprehenderit obcaecati aspernatur ducimus quas deserunt cupiditate
          error ex esse quia neque, suscipit illo corporis. Nisi assumenda autem
          deserunt saepe placeat.
        </p>
        <div className="mt-6">
          <div className="mt-6">
            <div className="flex justify-between border-b border-gray-300 pb-2 mr-8">
              <span className="font-semibold">Specialty:</span>
              <span>Cardiology</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2 mt-2">
              <span className="font-semibold">Degrees:</span>
              <span>M.D. of Medicine</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2 mt-2">
              <span className="font-semibold">Training:</span>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
                odit architecto illo suscipit expedita tempora quaerat sapiente
                cum tempore?
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2 mt-2">
              <span className="font-semibold">Work Days</span>
              <span>Monday Tuesday Wednesday</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDoctor;
