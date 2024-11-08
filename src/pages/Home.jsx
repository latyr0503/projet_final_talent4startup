import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import SousHero from "../components/SousHero";
import SectionInfo from "../components/SectionInfo";
import SectionDoctor from "../components/SectionDoctor";
import GetAppointement from "../components/GetAppointement";
import StateSection from "../components/StateSection";
import ServicesSection from "../components/ServicesSection";
import TitreSoustitre from "../Elements/TitreSoustitre";
import Med from "../components/Med";

export const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Med />
      <SectionInfo />
      <TitreSoustitre
        titre={"Découvrez nos services"}
        desctiption={
          "Lorem ipsum dolor sit odit id illo quibusdam culpa, eum, facilis rem asperiores voluptatem amet itaque. Quas minima, nesciunt hic dolore iure, dolor pariatur, totam expedita fugiat dicta quis qui."
        }
      />
      <ServicesSection />
      <StateSection />
      <TitreSoustitre
        titre={"Rencontrez notre équipe"}
        desctiption={
          "Lorem ipsum dolor sit odit id illo quibusdam culpa, eum, facilis rem asperiores voluptatem amet itaque. Quas minima, nesciunt hic dolore iure, dolor pariatur, totam expedita fugiat dicta quis qui."
        }
      />
      <SectionDoctor limit={4} />
      <SousHero />

      <GetAppointement />
    </div>
  );
};
