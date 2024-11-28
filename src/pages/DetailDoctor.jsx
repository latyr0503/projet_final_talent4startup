import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { IntroductionSection } from "../components/IntroductionSection";
import backgroundImage from "../assets/i.jpeg";
import { useParams } from "react-router-dom";


export default function DetailDoctor() {
    const { id } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [doctor, setDoctor] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const response = await axios.get(
                    `https://prise-de-rv-backend-nestjs.onrender.com/doctors/${id}`
                );
                setDoctor(response.data);
            } catch (error) {
                setErrorMessage("Erreur lors de la récupération du médecin.");
                console.error(error);
            }
        };

        fetchDoctor();
    }, [id]);

    const handleOpenModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const defaultSocialLinks = {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#"
    };

    if (!doctor) {
        return <div>Chargement...</div>;
    }
    return (
        <>
            <IntroductionSection
                backgroundImage={backgroundImage}
                title={`${doctor.NomComplet}`}
                height="400px"
                navigation={{
                    home: "Home",
                    current: `${doctor.NomComplet}`
                }}
            />
            <div className="flex md:flex-col sm:flex-col m-10 gap-14">
                <div className="mb-4">
                    <div>
                        <img
                            src={doctor.image || medecin}
                            alt={doctor.NomComplet || "Médecin"}
                            className="w-80 h-80 object-cover"
                        />
                        <h3 className="mt-8 font-medium">{doctor.NomComplet}</h3>
                        <h6 className="text-sm text-blue-700 border-b border-gray-300 pb-2 font-normal">
                            {doctor.specialite}
                        </h6>
                        <div className="mt-4 flex items-center text-gray-800">
                            <Phone className="mr-2 text-blue-700 size-4" />
                            <span>{doctor.telephone || "Non disponible"}</span>
                        </div>
                        <div className="mt-2 flex items-center text-gray-800">
                            <Mail className="mr-2 text-blue-700 size-4" />
                            <span>{doctor.email || "Non disponible"}</span>
                        </div>
                    </div>

                    <button
                        className="mt-6 px-4 py-2 font-bold bg-blue-700 w-72 text-white rounded-lg hover:bg-blue-500 flex items-center gap-2 justify-center"
                        onClick={handleOpenModal}
                    >
                        <Calendar size={18} />
                        Prendre un rendez-vous
                    </button>

                    {isModalOpen && (
                        <div className="mt-2 w-72  bg-blue-700 p-6 rounded-lg ">
                            <h6 className="text-white">Nous sommes là pour vous</h6>
                            <h2 className="text-lg font-bold mb-4 text-white">
                                Prendre un rendez-vous
                            </h2>
                            <form>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        defaultValue={doctor.NomComplet }
                                        className="border rounded-lg w-full py-2 px-3 bg-white"
                                        placeholder={doctor.NomComplet}
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

                    <div className="flex items-center justify-center my-4">
                        {[
                            { Icon: Twitter, link: doctor.twitter || defaultSocialLinks.twitter },
                            { Icon: Facebook, link: doctor.facebook || defaultSocialLinks.facebook },
                            { Icon: Instagram, link: doctor.instagram || defaultSocialLinks.instagram },
                            { Icon: Linkedin, link: doctor.linkedin || defaultSocialLinks.linkedin }
                        ].map(({ Icon, link }, index) => (
                            <a
                                key={index}
                                href={link}
                                className="mx-2 text-gray-500 hover:text-blue-600"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="w-full">
                    <p className="text-justify ">
                        {doctor.description || "Aucune description disponible"}
                    </p>

                    <div className="mt-6">
                        <div className="flex justify-between border-b border-gray-300 pb-2">
                            <p className="font-semibold">Specialty:</p>
                            <p>Cardiology</p>
                        </div>
                        <div className="flex justify-between border-b border-gray-300 pb-2 mt-2">
                            <p className="font-semibold">Degrees:</p>
                            <p>M.D. of Medicine</p>
                        </div>
                        <div className="flex justify-between border-b border-gray-300 pb-2 mt-2">
                            <p className="font-semibold">Training:</p>
                            <p>Lorem ipsum dolor sit...</p>
                        </div>
                        <div className="flex justify-between border-b border-gray-300 pb-2 mt-2">
                            <p className="font-semibold">Work Days</p>
                            <p className="flex space-x-2">
                                <p className="flex items-center">
                                    <Check size={18} className="text-blue-500" />
                                    <p className="ml-1">Monday</p>
                                </p>
                                <p className="flex items-center">
                                    <Check size={18} className="text-blue-500" />
                                    <p className="ml-1">Tuesday</p>
                                </p>
                                <p className="flex items-center">
                                    <Check size={18} className="text-blue-500" />
                                    <p className="ml-1">Wednesday</p>
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

