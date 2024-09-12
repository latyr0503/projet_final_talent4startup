import React from "react";
import { IntroductionSection } from "../components/IntroductionSection";
import backgroundImage from "../assets/m.jpeg";
import SectionDoctor from "../components/SectionDoctor";
import GetAppointement from "../components/GetAppointement";

export const NosDoctors = () => {
  return (
    <div>
      <IntroductionSection
        backgroundImage={backgroundImage}
        title="Nos médecins"
        height="400px"
        navigation={{ home: "Home", current: "Nos médecins" }}
      />
      <SectionDoctor />
    </div>
  );
};
