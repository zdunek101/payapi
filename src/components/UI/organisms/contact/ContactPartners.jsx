import React from "react";
import styled from "styled-components";
import { variables } from "../../../../settings/mainstyles";

import tesla from "../../../files/assets/shared/desktop/tesla-black.svg";
import microsoft from "../../../files/assets/shared/desktop/microsoft-black.svg";
import hp from "../../../files/assets/shared/desktop/hewlett-packard-black.svg";
import oracle from "../../../files/assets/shared/desktop/oracle-black.svg";
import google from "../../../files/assets/shared/desktop/google-black.svg";
import nvidia from "../../../files/assets/shared/desktop/nvidia-black.svg";

const Partner = styled.img.attrs((props) => ({
  src: props.src,
}))`
  src: (${(props) => props.logoName}) no-repeat 50% 50%;
  justify-self: center;
  align-self: center;
  margin-top: 40px;
  z-index: 1;
`;

const PartnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (min-width: 700px) {
    margin: 0 115px;
  }

  @media (min-width: 1280px) {
    margin: 0;
    padding-top: 0;
    column-gap: 65px;
    row-gap: 55px;
  }
`;

const PartnersTitle = styled.h3`
  font-family: ${variables.fonts.titleFont};
  font-size: 24px;
  font-weight: 400;
  color: #36536b;
  text-align: center;
  opacity: 75%;
  margin-top: 80px; ;
`;

const ContactPartners = () => {
  return (
    <>
      <section>
        <PartnersTitle>Join the thousands of innovators already building with us </PartnersTitle>
        <PartnerContainer>
          <Partner src={tesla}></Partner>
          <Partner src={microsoft}></Partner>
          <Partner src={hp}></Partner>
          <Partner src={oracle}></Partner>
          <Partner src={google}></Partner>
          <Partner src={nvidia}></Partner>
        </PartnerContainer>
      </section>
    </>
  );
};

export default ContactPartners;
