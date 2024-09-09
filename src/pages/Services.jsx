import React from "react";
import { IntroductionSection } from "../components/IntroductionSection";
import backgroundImage from "../assets/i.jpeg";
import ServicesSection from "../components/ServicesSection";
import GetAppointement from "../components/GetAppointement";
import TitreSoustitre from "../Elements/TitreSoustitre";
import DetailDoctor from "../components/DetailDoctor";

export const Services = () => {
  return (
    <div>
      <IntroductionSection
        backgroundImage={backgroundImage}
        title="Nos Services"
        navigation={{ home: "Home", current: "Nos médecins" }}
      />
      <div className="my-20">
        <TitreSoustitre
          titre={"Decouvrez nos services"}
          desctiption={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugiatducimus similique possimus, voluptatum deserunt voluptas itaque ipsamamet odit id illo quibusdam culpa, eum, facilis officiis? Aliquid iustoullam illum, rem asperiores voluptatem amet itaque. Quas minima,nesciunt hic dolore iure, dolor pariatur, totam expedita fugiat dictaquis qui."
          }
        />
        <ServicesSection />
      </div>

      <DetailDoctor />
      <GetAppointement />
    </div>
  );
};
