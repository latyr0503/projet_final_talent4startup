import React from "react";
import { IntroductionSection } from "../components/IntroductionSection";
import CareInfo from "../components/CareInfo";
import StateSection from "../components/StateSection";
import ServicesSection from "../components/ServicesSection";
import { DishSection } from "../components/DishSection";
import SectionDoctor from "../components/SectionDoctor";
import backgroundImage from "../assets/background.jpeg";

const About = () => {
  return (
    <div>
      <IntroductionSection
        backgroundImage={backgroundImage}
        title="About"
        height="500px"
        navigation={{ home: "Home", current: "/About" }}
      />
      <CareInfo />
      <ServicesSection />
      <StateSection />
      <DishSection />
      <SectionDoctor />
    </div>
  );
};
export default About;
