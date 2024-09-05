import React from "react";
import { IntroductionSection } from "../components/IntroductionSection";
import backgroundImage from "../assets/b.jpeg";
import { ContactForm } from "../components/ContactForm";
// import { GeolocationSection } from "../components/GeolocationSection";

const Contact = () => {
  return (
    <div>
      <IntroductionSection
        backgroundImage={backgroundImage}
        title="Contactez-nous"
        navigation={{ home: "Home", current: "Contactez-Nous" }}
      />
      <ContactForm />
      {/* <GeolocationSection /> */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123477.28844939894!2d-17.600917056640625!3d14.731507400000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10d4a886be1e1%3A0x35caad7291d8cf71!2sNouvelle%20Clinique%20De%20l&#39;Amiti%C3%A9!5e0!3m2!1sfr!2ssn!4v1725495542134!5m2!1sfr!2ssn"
          height="500"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>
    </div>
  );
};
export default Contact;
