import React from "react";
import styled from "styled-components";
import ContactPartners from "./contactPartners/ContactPartners";
import ContactForm from "./contanctForm/ContactForm";
import { circle, variables } from "../../../../settings/mainstyles";

const Main = styled.main`
  &:before {
    ${circle}
  }
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 24px 80px 24px;

  @media (min-width: 600px) {
    margin: 0 161px 80px 161px;
  }

  @media (min-width: 1200px) {
    width: 445px;
    margin: 0 0 80px 50px;
  }

  @media (min-width: 1440px) {
    margin: 0 0 80px 160px;
  }
`;

const ContactTitle = styled.h3`
  font-family: ${variables.fonts.titleFont};
  font-size: 32px;
  font-weight: 400;
  color: ${variables.colors.sec_blue};
  text-align: center;
  margin: 80px 24px 40px 24px;

  @media (min-width: 600px) {
    font-size: 47px;
    letter-spacing: -0.369231px;
    line-height: 56px;
    margin: 80px 161px 40px 161px;
  }
  @media (min-width: 1200px) {
    text-align: left;
    margin: 80px 0 40px 50px;
    width: 600px;
  }
  @media (min-width: 1440px) {
    margin-left: 160px;
  }
`;

const Contact = () => {
  return (
    <>
      <ContactTitle>Submit a help request and we’ll get in touch shortly.</ContactTitle>
      <Main>
        <Section>
          <ContactForm />
        </Section>
        <ContactPartners />
      </Main>
    </>
  );
};

export default Contact;
