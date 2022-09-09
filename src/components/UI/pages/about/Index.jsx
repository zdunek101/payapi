import React from "react";
import AboutParagraph from "./AboutParagraph";
import mobileImage from "../../../files/assets/about/mobile/image-team-members.jpg";
import tabletImage from "../../../files/assets/about/tablet/image-team-members.jpg";
import desktopImage from "../../../files/assets/about/desktop/image-team-members.jpg";
import { Container, MainTitle } from "./style";
import GoalsBox from "./Goals";

const About = () => {
  return (
    <>
      <Container>
        <MainTitle className={"about"} text={"We empower innovators by delivering access to the financial system"}>
          We empower innovators by delivering access to the financial system
        </MainTitle>
        <AboutParagraph
          title={"Our Vision"}
          text={
            "Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. "
          }
        />

        <AboutParagraph
          title={"Our Business"}
          text={
            "At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. "
          }
        />

        <picture>
          <source srcSet={`${desktopImage}`} media="(min-width: 1200px)" />
          <source srcSet={`${tabletImage}`} media="(min-width: 600px)" />
          <img srcSet={`${mobileImage}`} style={{ width: "100%" }} alt="our three employees have a meeting in a cafe" />
        </picture>

        <GoalsBox />
        <AboutParagraph
          title={"The Culture"}
          text={
            "We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title."
          }
        />
        <AboutParagraph
          title={"The People"}
          text={
            " We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills."
          }
        />
      </Container>
    </>
  );
};

export default About;
