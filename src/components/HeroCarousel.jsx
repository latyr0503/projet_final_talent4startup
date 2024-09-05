import React, { useState, useEffect } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { Activity } from "lucide-react";
import { Stethoscope } from "lucide-react";
import { HeartPulse } from "lucide-react";
import { Ambulance } from "lucide-react";
import { Zap } from "lucide-react";

function HeroCarousel() {
  const slides = [
    {
      id: 1,
      title: "Hello there",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquamveritatis ut molestiae suscipit rem explicabo reiciendis, praesentiumadipisci maiores, repellat, tenetur eum! Animi nam assumenda odit eiusaccusamus sunt, omnis veniam natus, est, dolor corporis laudantiumsapiente quae id quo veritatis saepe reprehenderit culpamolestiae a. Officia, esse nemo!",
      imageUrl: image1,
    },
    {
      id: 2,
      title: "Another Slide",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquamveritatis ut molestiae suscipit rem explicabo reiciendis, praesentiumadipisci maiores, repellat, tenetur eum! Animi nam assumenda odit eiusaccusamus sunt, omnis veniam natus, est, dolor corporis laudantiumsapiente quae id quo veritatis saepe reprehenderit culpamolestiae a. Officia, esse nemo!",
      imageUrl: image2,
    },
    {
      id: 3,
      title: "Final Slide",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquamveritatis ut molestiae suscipit rem explicabo reiciendis, praesentiumadipisci maiores, repellat, tenetur eum! Animi nam assumenda odit eiusaccusamus sunt, omnis veniam natus, est, dolor corporis laudantiumsapiente quae id quo veritatis saepe reprehenderit culpamolestiae a. Officia, esse nemo!",
      imageUrl: image3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[80vh]">
      <div
        className="hero h-full transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>

        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="w-1/2"></div>
          <div className="w-1/2">
            <h1 className="text-5xl text-white font-bold">
              {" "}
              {slides[currentSlide].title}
            </h1>
            <p className="pt-6 text-justify text-white">
              {slides[currentSlide].description}
            </p>
            <ul className="pt-6 flex gap-5 items-center text-white">
              <li className="border-2 border-white p-4 rounded-full">
                <Activity />
              </li>
              <li className="border-2 border-white p-4 rounded-full">
                <Stethoscope />
              </li>
              <li className="border-2 border-white p-4 rounded-full">
                <HeartPulse />
              </li>
              <li className="border-2 border-white p-4 rounded-full">
                <Ambulance />
              </li>
              <li className="border-2 border-white p-4 rounded-full">
                <Zap />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Boutons de navigation */}
      <button
        onClick={handlePrevClick}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white"
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default HeroCarousel;
