import { title, variables } from "../../../../../settings/mainstyles";
import styled from "styled-components";

export const PartnersContainer = styled.section`
  background-color: ${variables.colors.sec_blue_dark};
  position: relative;
  overflow: hidden;

  @media (min-width: 1290px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
  }
`;

export const PartnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 88px;

  @media (min-width: 1280px) {
    align-items: start;
    padding-bottom: 100px;
  }
`;

export const TextPartners = styled.p`
  margin: 0 30px 32px 30px;
  opacity: 70%;
  font-family: ${variables.fonts.textFont};
  color: ${variables.colors.pri_white};
  text-align: center;
  line-height: 28px;
  font-size: 15px;

  @media (min-width: 600px) {
    width: 420px;
  }

  @media (min-width: 1200px) {
    margin: 0 0 32px 0;
    text-align: left;
  }
`;

export const TitleH3 = styled.h3`
  ${title}
  color: ${variables.colors.pri_white};
  margin-top: 56px;
  margin-bottom: 16px;

  @media (min-width: 600px) {
    margin: 64px 0 24px 0;
  }

  @media (min-width: 1280px) {
    margin-top: 100px;
  }
`;
