import { motion } from "framer-motion";
import PizzaOne from "../../assets/images/contact-us/image-one.webp";
import PizzaTwo from "../../assets/images/contact-us/image-two.webp";
import PizzaThree from "../../assets/images/contact-us/image-three.webp";
import "../../core-ui/landing/contactUsLanding.css";

const ContactUsLanding = () => {
  return (
    <section className="contact-us-landing flex-container flex-row txt-white">
      <motion.img
        initial={{ opacity: 0, translateX: 1600 }}
        whileInView={{ opacity: 0.8, translateX: 400 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne}
        alt=""
        aria-hidden="true"
        className="parallax company-details-image"
      />
      <motion.img
        initial={{ opacity: 0, translateX: 1600 }}
        whileInView={{ opacity: 0.8, translateX: 800 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaTwo}
        alt=""
        aria-hidden="true"
        className="parallax company-details-image-two"
      />
      <motion.img
        initial={{ opacity: 0, translateX: 1600 }}
        whileInView={{ opacity: 0.8, translateX: 1200 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaThree}
        alt=""
        aria-hidden="true"
        className="parallax company-details-image-three"
      />
      <section className="company-details">
        <div>
          <p>Contact us more information</p>
          <h2>+94 11 2265125</h2>
        </div>
        <div>
          <h2>56/3, Galle Road, </h2>
          <p>Colombo 03</p>
        </div>
        <div>
          <h2>Open Monday-Saturday</h2>
          <p>6:00am - 9:00pm</p>
        </div>
      </section>
    </section>
  );
};

export default ContactUsLanding;
