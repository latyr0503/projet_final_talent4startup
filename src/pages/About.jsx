import React from "react";
import { IntroductionSection } from "../components/IntroductionSection";
import CareInfo from "../components/CareInfo";
import StateSection from "../components/StateSection";
import ServicesSection from "../components/ServicesSection";
import SectionDoctor from "../components/SectionDoctor";
import backgroundImage from "../assets/background.jpeg";
import GetAppointement from "../components/GetAppointement";
import SectionInfo from "../components/SectionInfo";

const About = () => {
  return (
    <div>
      <IntroductionSection
        backgroundImage={backgroundImage}
        title="About"
        height="450px"
        navigation={{ home: "Home", current: "About" }}
        className="lg:h-[500px] md:h-[400px] h-[300px]"
      />
      <CareInfo className="py-8" />
      <SectionInfo className="py-8" />
      <ServicesSection className="py-8" />
      <StateSection className="py-8" />
      <SectionDoctor limit={4} className="py-8" />
      <GetAppointement />
    </div>
  );
};

export default About;
