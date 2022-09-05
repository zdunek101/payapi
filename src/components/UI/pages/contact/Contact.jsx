import React from "react";
import styled from "styled-components";
import Title from "../../atoms/Title";
import ContactPartners from "../../organisms/contact/ContactPartners";
import ContactForm from "../../organisms/ContactForm";
import { variables } from "../../../../settings/mainstyles";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 80px 24px;
`;

const ContactTitle = styled.h3`
  font-family: ${variables.fonts.titleFont};
  font-size: 32px;
  font-weight: 400;
  color: ${variables.colors.sec_blue};
  text-align: center;
  margin: 0 0 40px 0;
  @media (min-width: 600px) {
    font-size: 48px;
  }
  @media (min-width: 1200px) {
    text-align: left;
    margin: 0;
  }
`;

const Contact = () => {
  return (
    <>
      <Section>
        <ContactTitle>Submit a help request and we’ll get in touch shortly.</ContactTitle>
        <ContactForm />
        <ContactPartners />
      </Section>
    </>
  );
};

export default Contact;

/*
visibility: hidden;
width: 24px;
height: 24px;
background-color: rgba(54, 83, 107, 0.25);
&:before {
content: "";
visibility: visible;
position: absolute;
width: 24px;
height: 24px;
background-color: rgba(54, 83, 107, 0.25);
}


*/
