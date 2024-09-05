import React from "react";
import { IntroductionSection } from "../components/IntroductionSection";
import backgroundImage from "../assets/i.jpeg";

export const Services = () => {
  return (
    <div>
      <IntroductionSection
        backgroundImage={backgroundImage}
        title="Nos Services"
        navigation={{ home: "Home", current: "Nos médecins" }}
      />
    </div>
  );
};
