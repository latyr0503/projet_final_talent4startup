import React from "react";
import { IntroductionSection } from "../components/IntroductionSection";
import backgroundImage from "../assets/i.jpeg";

export const NosDoctors = () => {
  return (
    <div>
      <IntroductionSection
        backgroundImage={backgroundImage}
        title="Nos médecins"
        navigation={{ home: "Home", current: "Nos médecins" }}
      />
    </div>
  );
};
