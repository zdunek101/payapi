import React from "react";
import styled from "styled-components";
import Title from "../../atoms/Title";
import ContactPartners from "../../organisms/contact/ContactPartners";
import ContactForm from "../../organisms/ContactForm";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 24px;
`;

const Contact = () => {
  return (
    <>
      <Section>
        <Title className={""} text={"Submit a help request and we’ll get in touch shortly."} mod={""} />
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
