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
        navigation={{ home: "Home", current: "About" }}
      />
      <CareInfo />
      <SectionInfo />
      <ServicesSection />
      <StateSection />
      {/* <DishSection /> */}
      <SectionDoctor  limit={4}/>
      <GetAppointement />
    </div>
  );
};
export default About;
