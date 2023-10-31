import { LazyLoadImage } from "react-lazy-load-image-component";

import img375 from "../../assets/images/welcome-section/section-one-375.webp";
import img700 from "../../assets/images/welcome-section/section-one-700.webp";
// import img1440 from "../../assets/images/section-one/section-one-1440.webp";
import img1440 from "../../assets/images/welcome-section/welcome-section.webp";
import "../../core-ui/landing/welcome-section.css";

const WelcomeSection = () => {
  return (
    <article className="welcome-section">
      <section className="section-2-info flex-container flex-column txt-center pop-font">
        <h2 className="txt-white">
          Welcome to <span>Traditional Me</span> restaurant
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages,
        </p>
      </section>
      <LazyLoadImage
        className="section-two-img"
        src={img375}
        srcSet={`${img1440} 1440w, ${img700} 700w, ${img375} 375w`}
        sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
        alt=""
      />
    </article>
  );
};

export default WelcomeSection;
