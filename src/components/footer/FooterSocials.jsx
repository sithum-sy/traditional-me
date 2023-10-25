import React from "react";
import Github from "../../assets/images/socials/github.svg";
import Linkedin from "../../assets/images/socials/linkedin.svg";
import Website from "../../assets/images/socials/portfolio.png";

const socials = [
  {
    id: 1,
    href: "https://github.com/sithum-sy",
    img: Github,
    name: Github,
  },
  {
    id: 2,
    href: "https://linkedin.com/in/sithum-yasiru-608509261",
    img: Linkedin,
    name: Linkedin,
  },
  {
    id: 3,
    href: "https://sithum-yasiru-portfolio-v1.netlify.app/",
    img: Website,
    name: Website,
  },
];

function FooterSocials() {
  return (
    <ul className="socials">
      {socials.map((social) => (
        <li key={social.id}>
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
          >
            <span aria-hidden="true">{social.name}</span>
            <img src={social.img} alt="" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
export default FooterSocials;
