import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import SousHero from "../components/SousHero";
import SectionInfo from "../components/SectionInfo";

export const Home = () => {
  return (
    <div>
      {/* Hero */}
      <HeroCarousel />
      <SousHero />
      <SectionInfo />
    </div>
  );
};
