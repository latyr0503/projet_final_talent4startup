// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import SousHero from "../components/SousHero";
import SectionInfo from "../components/SectionInfo";
import SectionDoctor from "../components/SectionDoctor";
import GetAppointement from "../components/GetAppointement";
import StateSection from "../components/StateSection";
import ServicesSection from "../components/ServicesSection";

export const Home = () => {
  return (
    <div>
      {/* Hero */}
      <HeroCarousel />
      <SousHero />
      <SectionInfo />
      <ServicesSection />
      <StateSection />
      <SectionDoctor />
      <GetAppointement />
    </div>
  );
};
