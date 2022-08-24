import React from "react";
import Title from "../../atoms/Title";
import AboutParagraph from "../../molecules/AboutParagraph";
import mobileImage from "../../../files/assets/about/mobile/image-team-members.jpg";
import tabletImage from "../../../files/assets/about/tablet/image-team-members.jpg";
import desktopImage from "../../../files/assets/about/desktop/image-team-members.jpg";
import GoalsContainer from "../../organisms/about/GoalsContainer";
import FormDemo from "../../molecules/FormDemo";

const About = () => {
  return (
    <>
      <div className="about__container">
        <Title className={"about"} text={"We empower innovators by delivering access to the financial system"} />
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
          <source srcset={`${desktopImage}`} media="(min-width: 1200px)" />
          <source srcset={`${tabletImage}`} media="(min-width: 600px)" />
          <img className="about__img" src={`${mobileImage}`} alt="our three employees have a meeting in a cafe" />
        </picture>

        <GoalsContainer />
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
      </div>
    </>
  );
};

export default About;
