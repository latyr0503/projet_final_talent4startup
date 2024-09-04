import React from 'react';
import { ContactSection } from '../components/ContactSection'; 
import { ContactForm } from '../components/ContactForm';
import { GeolocationSection } from '../components/GeolocationSection';


const Contact = () => {
  return (
    <div>
      <ContactSection /> 
      <ContactForm /> 
      <GeolocationSection /> 

      

    </div>
  );
};
export default Contact;
