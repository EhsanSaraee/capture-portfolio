import React from "react";
// Import Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import ScrollTop from "../components/ScrollTop";
// Import Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
   return (
      <motion.section
         variants={pageAnimation}
         initial="hidden"
         animate="show"
         exit="exit"
      >
         <AboutSection />
         <ServicesSection />
         <FaqSection />
         <ScrollTop />
      </motion.section>
   );
};

export default AboutUs;
