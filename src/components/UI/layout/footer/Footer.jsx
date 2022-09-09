import React from "react";
import { ReactComponent as Logo } from "../../../files/assets/logo-white.svg";
import facebook from "../../../files/assets/shared/desktop/facebook.svg";
import twitter from "../../../files/assets/shared/desktop/twitter.svg";
import linkedin from "../../../files/assets/shared/desktop/linkedin.svg";
import { Container, EmailContainer, LogoBox, SocialBox, Title } from "./style";
import { Link } from "react-router-dom";
import NavList from "../navigation/NavList";
import EmailForm from "../../components/emailForm/EmailForm";

const Footer = () => {
  return (
    <>
      <EmailContainer>
        <Title>Ready to start?</Title>
        <EmailForm />
      </EmailContainer>
      <Container>
        <LogoBox>
          <Link to="/">
            <Logo />
          </Link>
        </LogoBox>
        {/* <NavOptions modification={"--footer"} /> */}
        <NavList footer={true} />
        <SocialBox>
          <a href="/">
            <img src={facebook} alt={"facebook icon"} className="social__icon" style={{ marginLeft: "24px" }}></img>
          </a>
          <a href="/">
            <img src={twitter} alt={"twitter icon"} className="social__icon" style={{ marginLeft: "24px" }}></img>
          </a>
          <a href="/">
            <img src={linkedin} alt={"linkedin icon"} className="social__icon" style={{ marginLeft: "24px" }}></img>
          </a>
        </SocialBox>
      </Container>
    </>
  );
};

export default Footer;
