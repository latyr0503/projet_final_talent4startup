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
        className="bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "80vh",
          width: "100%",
        }}
      >
        <div className="flex flex-col h-full items-center justify-center space-y-5 bg-black bg-opacity-50">
          <h2 className="text-8xl font-bold text-white">{title}</h2>
          <div>
            <Link
              to="/"
              className="text-xl font-medium text-white hover:underline "
            >
              {navigation.home}
            </Link>
            <span className="mx-3 text-white text-xl font-bold">/</span>
            <Link className="text-xl font-medium text-white hover:underline">
              {navigation.current}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
