import React from "react";
import PartnersLogo from "../../../components/partners-icon/PartnersLogo";

import { PartnerInfo, PartnersContainer, TextPartners, TitleH3 } from "./styles";
import Buttons from "../../../components/buttons/Buttons";

const Partners = () => {
  return (
    <>
      <PartnersContainer>
        <PartnersLogo isBlack={false} />
        <PartnerInfo>
          <TitleH3>Who we work with</TitleH3>
          <TextPartners>
            Today, millions of people around the world have successfully connected their accounts to apps they love
            using our API. We provide developers with the tools they need to create easy and accessible experiences for
            their users.
          </TextPartners>
          <Buttons colorTheme={"white"} isEmail={false} text={"About Us"} href={"/about"}></Buttons>
        </PartnerInfo>
      </PartnersContainer>
    </>
  );
};

export default Partners;
