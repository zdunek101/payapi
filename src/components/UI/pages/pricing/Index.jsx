import React from "react";
// import Title from "../../atoms/Title";
import Plan from "./plan/Plan";
import styled from "styled-components";
import { circle, variables } from "../../../../settings/mainstyles";

const Title = styled.h3`
  font-size: 32px;
  margin: 48px 0 0 0;
  font-family: ${variables.fonts.titleFont};
  text-align: center;
  color: ${variables.colors.sec_blue};
  font-weight: 400;

  @media (min-width: 600px) {
    font-size: 48px;
  }
  @media (min-width: 1280px) {
    font-size: 56px;
    text-align: left;
    margin-left: 8%;
    margin-top: 80px;
    width: fit-content;
  }
`;

const PricingContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;

  &:before {
    ${circle}
    transform: translate(-15%, -85%);

    @media (min-width: 768px) {
      transform: translate(10%, -65%);
    }

    @media (min-width: 768px) {
      transform: translate(-3%, -65%);
    }
  }

  @media (min-width: 780px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 8% 80px 8%;
  }
`;

const Pricing = () => {
  return (
    <>
      <Title>Pricing</Title>

      <PricingContainer>
        <Plan
          title={"Free Plan"}
          price={"0.00"}
          checkAmount={3}
          text={"Build and test using our core set of products with up to 100 API requests "}
        />
        <Plan
          title={"Basic Plan"}
          price={"249.00"}
          checkAmount={5}
          text={"Launch your project with unlimited requests and no contractual minimums "}
        />
        <Plan
          title={"Premium Plan"}
          price={"499.00"}
          checkAmount={7}
          text={"Get tailored solutions, volume pricing, and dedicated support for your team "}
        />
      </PricingContainer>
    </>
  );
};

export default Pricing;
