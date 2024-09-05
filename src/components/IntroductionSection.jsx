import React from "react";
import { Link } from "react-router-dom";

export const IntroductionSection = ({
  backgroundImage,
  title,
  navigation,
  height,
}) => {
  return (
    <div>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat text-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: height,
          width: "100%",
        }}
      >
        <div className="flex flex-col h-full items-center justify-center space-y-4 bg-black bg-opacity-50">
          <h2 className="text-5xl font-semibold text-white">{title}</h2>
          <div className="flex space-x-4">
            <Link to="/" className="font-semibold text-white hover:underline">
              {navigation.home}
            </Link>
            <p className="text-xl font-semibold text-white">
              {navigation.current}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
