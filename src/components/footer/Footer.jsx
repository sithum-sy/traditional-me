import React from "react";
import FooterMenu from "./FooterMenu";
import FooterContact from "./FooterContact";
import FooterLegal from "./FooterLegal";
import "../../core-ui/footer/footer.css";

function Footer() {
  return (
    <footer className=" flex-container flex-column txt-center txt-white pop-font">
      <FooterMenu />
      <hr />
      <FooterLegal />
      <hr />
      <FooterContact />
    </footer>
  );
}
export default Footer;
