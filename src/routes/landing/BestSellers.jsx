import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";
import bestSellers from "../../data/bestSellers";

const BestSellers = () => {
  return (
    <article className="section-4 flex-container flex-column">
      <section className="section-4-info txt-center">
        <h2 className="pop-font txt-white">Our Best Sellers</h2>
        <p className="section-description">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem Ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <section className="meals-grid flex-container flex-column">
        {bestSellers.map((item, id) => (
          <motion.div
            key={id}
            className="meal-item flex-container"
            initial={{ opacity: 0, translateX: -300 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: -300 }}
            transition={{ duration: 3 }}
          >
            <img
              src={item.img375}
              srcSet={`${item.img1440} 300w, ${item.img700} 450w, ${item.img375} 375w`}
              sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
              alt={item.name}
            />
            <section className="meal-item-details flex-container flex-column">
              <h3 className="txt-white">{item.name}</h3>
              <p>{item.description}</p>
              <section className="meal-item-order flex-container flex-row txt-center">
                <p>
                  <span>{item.currency}</span>
                  {item.price}
                </p>
              </section>
            </section>
          </motion.div>
        ))}
      </section>
      <Link
        onClick={ResetLocation}
        to="/menu"
        className="active-button-style txt-white"
      >
        View More
      </Link>
    </article>
  );
};

export default BestSellers;
