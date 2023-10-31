//images
import ImgOne from "../../assets/images/about-us/img-1.jpeg";
import ImgTwo from "../../assets/images/about-us/img-2.jpeg";
import ImgThree from "../../assets/images/about-us/img-3.jpg";

const AboutCustomers = () => {
  return (
    <article className="about-customers">
      <div className="images">
        <img src={ImgOne} alt="" aria-hidden="true" />
        <img src={ImgTwo} alt="" aria-hidden="true" />
        <img src={ImgThree} alt="" aria-hidden="true" />
      </div>
      <section className="content">
        <h2 className="sub-title">Happy Customers</h2>
        <h3>Over 1000 positive feedbacks</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada
          fames ac turpis egestas sed tempus urna et. Tincidunt lobortis feugiat
          vivamus at augue eget arcu. Purus non enim praesent elementum
          facilisis leo vel fringilla est. Nulla facilisi etiam dignissim diam
          quis enim. At tellus at urna condimentum mattis pellentesque id nibh
          tortor. Egestas egestas fringilla phasellus faucibus. Amet purus
          gravida quis blandit turpis cursus in hac. Iaculis nunc sed augue
          lacus viverra vitae congue eu. Libero nunc consequat interdum varius.
          Eget mauris pharetra et ultrices. Adipiscing elit ut aliquam purus
          sit. Venenatis tellus in metus vulputate eu scelerisque. Sit amet nisl
          suscipit adipiscing bibendum est ultricies integer quis. Nisl
          tincidunt eget nullam non nisi est sit amet.
        </p>
      </section>
      <div className="img-glass"></div>
    </article>
  );
};

export default AboutCustomers;
