import React from "react";
import EmailForm from "../../../components/emailForm/EmailForm";
import { Link } from "react-router-dom";
import { FormContainer, HomeImage, HomeOpeningSection, Text, Title } from "./styles";

const Opening = () => {
  return (
    <>
      <HomeOpeningSection>
        <HomeImage />
        <FormContainer>
          <Title>Start building with our APIs for absolutely free.</Title>
          <EmailForm />
          <Text>
            Have any questions? <Link to="/contact">Contact Us</Link>
          </Text>
        </FormContainer>
      </HomeOpeningSection>
    </>
  );
};

export default Opening;
