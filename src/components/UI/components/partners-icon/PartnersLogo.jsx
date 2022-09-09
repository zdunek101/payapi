import React from "react";
import styled from "styled-components";

import tesla from "../../../files/assets/shared/desktop/tesla-black.svg";
import microsoft from "../../../files/assets/shared/desktop/microsoft-black.svg";
import hp from "../../../files/assets/shared/desktop/hewlett-packard-black.svg";
import oracle from "../../../files/assets/shared/desktop/oracle-black.svg";
import google from "../../../files/assets/shared/desktop/google-black.svg";
import nvidia from "../../../files/assets/shared/desktop/nvidia-black.svg";

import teslaWhite from "../../../files/assets/shared/desktop/tesla.svg";
import microsoftWhite from "../../../files/assets/shared/desktop/microsoft.svg";
import hpWhite from "../../../files/assets/shared/desktop/hewlett-packard.svg";
import oracleWhite from "../../../files/assets/shared/desktop/oracle.svg";
import googleWhite from "../../../files/assets/shared/desktop/google.svg";
import nvidiaWhite from "../../../files/assets/shared/desktop/nvidia.svg";

const Section = styled.section`
  margin: 80px 24px;

  @media (min-width: 600px) {
    margin: 80px 0 80px 0;
  }
  @media (min-width: 1200px) {
    margin-left: 50px;
  }
  @media (min-width: 1440px) {
    margin-left: 125px;
  }
`;

export const Svg = styled.img.attrs((props) => ({
  src: props.src,
}))`
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
    grid-row-gap: 10px;
    grid-column-gap: 55px;
  }

  @media (min-width: 700px) {
    margin: 0 115px;
  }

  @media (min-width: 1200px) {
    margin: 0;
    padding-top: 0;
    column-gap: 65px;
    margin: 0;
  }
`;

const PartnersLogo = ({ isBlack = true }) => {
  const partners = [tesla, microsoft, hp, oracle, google, nvidia];
  const partnersWhite = [teslaWhite, microsoftWhite, hpWhite, oracleWhite, googleWhite, nvidiaWhite];

  const Logos = (partnersLogo) => {
    let storage = [...partnersLogo];
    let companyNames = ["tesla", "microsoft", "hp", "oracle", "google", "nvidia"];

    return (
      <>
        {storage.map((partner, key) => {
          return <Svg src={partner} key={key} alt={`${companyNames[key]} logo`}></Svg>;
        })}
      </>
    );
  };

  return (
    <>
      <Section isBlack={isBlack}>
        <PartnerContainer>{isBlack ? Logos(partners) : Logos(partnersWhite)}</PartnerContainer>
      </Section>
    </>
  );
};

export default PartnersLogo;
