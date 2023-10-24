import React, { useEffect } from "react";

import Hero from "./Hero.jsx";
import ScrollUpButton from "../../helpers/ScrollUpBtn";
// import ContactUsLanding from "./ContactUsLanding";
// import WelcomeSection from "./WelcomeSection";
// import OurServices from "./OurServices";
// import PizzaMenuPreview from "./PizzaMenuPreview";
// import MenuPricingPreview from "./MenuPricingPreview";
// import Gallery from "./Gallery";
// import StatsPreview from "./StatsPreview";
// import MenuSlider from "./MenuSlider";
// import BlogPreview from "./BlogPreview";
// import Newsletter from "./Newsletter";
import ResetLocation from "../../helpers/ResetLocation";
// import ContactLanding from "./ContactLanding";

const RootSection = () => {
  useEffect(() => {
    document.title = "Pizza Time";
    ResetLocation();
  }, []);
  return (
    <React.Fragment>
      <Hero />
      {/* <WelcomeSection /> */}
      {/* <ContactUsLanding />
      <OurServices />
      <PizzaMenuPreview />
      <MenuPricingPreview />
      <Gallery />
      <StatsPreview />
      <MenuSlider />
      <Newsletter />
      <BlogPreview />
      <ContactLanding /> */}
      <ScrollUpButton />
    </React.Fragment>
  );
};

export default RootSection;
