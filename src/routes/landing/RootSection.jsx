import React, { useEffect } from "react";

import Hero from "./Hero.jsx";
import ScrollUpButton from "../../helpers/ScrollUpBtn";
import ContactUsLanding from "./ContactUsLanding";
import WelcomeSection from "./WelcomeSection";
import OurServices from "./OurServices";
import BestSellers from "./BestSellers";
import BlogPreview from "./BlogPreview";
import Newsletter from "./Newsletter";
import ResetLocation from "../../helpers/ResetLocation";
import ContactLanding from "./ContactLanding";

const RootSection = () => {
  useEffect(() => {
    document.title = "Traditional Me";
    ResetLocation();
  }, []);
  return (
    <React.Fragment>
      <Hero />
      <WelcomeSection />
      <ContactUsLanding />
      <OurServices />
      <BestSellers />
      <Newsletter />
      <BlogPreview />
      <ContactLanding />
      <ScrollUpButton />
    </React.Fragment>
  );
};

export default RootSection;
