import React from 'react';
import { IntroductionSection } from "../components/IntroductionSection";
import CareInfo from '../components/CareInfo';
import StateSection from '../components/StateSection';
import ServicesSection from '../components/ServicesSection';
import { DishSection } from '../components/DishSection';
import SectionDoctor from '../components/SectionDoctor';



const About = () => {
  return (
    <div>
      <IntroductionSection /> 
      <CareInfo /> 
      <ServicesSection />
      <StateSection />
      <DishSection />
      <SectionDoctor />

    </div>
  );
};
export default About;
