// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import SousHero from "../components/SousHero";
import SectionInfo from "../components/SectionInfo";
import SectionDoctor from "../components/SectionDoctor";
import GetAppointement from "../components/GetAppointement";
import StateSection from "../components/StateSection";
import ServicesSection from "../components/ServicesSection";
import TitreSoustitre from "../Elements/TitreSoustitre";

export const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <SousHero />
      <SectionInfo />
      <TitreSoustitre
        titre={"Decouvrez nos services"}
        desctiption={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugiatducimus similique possimus, voluptatum deserunt voluptas itaque ipsamamet odit id illo quibusdam culpa, eum, facilis officiis? Aliquid iustoullam illum, rem asperiores voluptatem amet itaque. Quas minima,nesciunt hic dolore iure, dolor pariatur, totam expedita fugiat dictaquis qui."
        }
      />
      <ServicesSection />
      <StateSection />
      <TitreSoustitre
        titre={" Rencontrez notre équipe"}
        desctiption={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugiatducimus similique possimus, voluptatum deserunt voluptas itaque ipsamamet odit id illo quibusdam culpa, eum, facilis officiis? Aliquid iustoullam illum, rem asperiores voluptatem amet itaque. Quas minima,nesciunt hic dolore iure, dolor pariatur, totam expedita fugiat dictaquis qui."
        }
      />
      <SectionDoctor />
      <GetAppointement />
    </div>
  );
};
