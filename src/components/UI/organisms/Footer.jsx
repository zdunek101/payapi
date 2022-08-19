import React from "react";
import { ReactComponent as Logo } from "../../files/assets/logo-white.svg";
import facebook from "../../files/assets/shared/desktop/facebook.svg";
import twitter from "../../files/assets/shared/desktop/twitter.svg";
import linkedin from "../../files/assets/shared/desktop/linkedin.svg";
import NavOptions from "../atoms/NavOptions";

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <span className="logo">
          <a href="/">
            <Logo />
          </a>
        </span>
        <NavOptions modification={"--footer"} />

        <div className="footer__socials">
          <a href="/">
            <img src={facebook} alt={"facebook icon"} className="social__icon"></img>
          </a>
          <a href="/">
            <img src={twitter} alt={"twitter icon"} className="social__icon"></img>
          </a>
          <a href="/">
            <img src={linkedin} alt={"linkedin icon"} className="social__icon"></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
