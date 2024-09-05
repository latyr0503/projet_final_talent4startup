import React from "react";
import { IntroductionSection } from "../components/IntroductionSection";
import backgroundImage from "../assets/b.jpeg";
import { ContactForm } from "../components/ContactForm";
import { GeolocationSection } from "../components/GeolocationSection";

const Contact = () => {
  return (
    <div>
      <IntroductionSection
        backgroundImage={backgroundImage}
        title="Contactez-nous"
        height="300px"
        navigation={{ home: "Home", current: "/Contactez-Nous" }}
      />{" "}
      <ContactForm />
      <GeolocationSection />
    </div>
  );
};
export default Contact;
