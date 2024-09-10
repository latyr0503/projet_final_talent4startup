import React from "react";
import { Link } from "react-router-dom";

export const IntroductionSection = ({
  backgroundImage,
  title,
  navigation,
  lien,
}) => {
  return (
    <div>
      <div
        className="bg-cover brightness-125 backdrop-blur-lg bg-white/30 backdrop-contrast-125 bg-white/30 scroll-smooth	"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "80vh",
          width: "100%",
        }}
      >
        <div className="flex flex-col h-full items-center justify-center space-y-5 bg-black bg-opacity-50 px-4 ">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center">
            {title}
          </h2>
          <div className="text-center">
            <Link
              to="/"
              className="text-lg md:text-xl font-medium text-white hover:underline"
            >
              {navigation.home}
            </Link>
            <span className="mx-2 md:mx-3 text-white text-lg md:text-xl font-bold">
              /
            </span>
            <Link
              className="text-lg md:text-xl font-medium text-white hover:underline"
            >
              {navigation.current}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
