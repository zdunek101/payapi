import styled from "styled-components";
import { circle, variables } from "../../../../settings/mainstyles";

export const Container = styled.footer`
  background-color: ${variables.colors.sec_blue_dark};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;

  &::before {
    ${circle}
    z-index:0;
    top: 0;
    transform: translate(-50%, 25%);
  }

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 31px 0 31px 0;

    &::before {
      transform: translate(0%, -20%);
    }
  }
`;

export const LogoBox = styled.div`
  margin: 0;
  padding-top: 41px;

  @media (min-width: 600px) {
    padding-top: 0;

    & svg {
      width: 100px;
    }
  }

  @media (min-width: 780px) {
    & svg {
      width: 135px;
    }
  }

  @media (min-width: 1280px) {
    padding-top: 0;
    margin-right: 64px;
    margin-left: 165px;
  }
`;

export const SocialBox = styled.div`
  padding-bottom: 55px;
  z-index: 1;
  .social_icon {
    margin-left: 24px;
  }
  @media (min-width: 600px) {
    padding-bottom: 0;
  }
  @media (min-width: 1280px) {
    margin-left: auto;
    margin-right: 165px;
  }
`;

export const Title = styled.h4`
  font-family: ${variables.fonts.titleFont};
  font-size: 32px;
  font-weight: 400;
  color: ${variables.colors.sec_blue};
  text-align: center;
  margin: 0 24px;

  @media (min-width: 600px) {
    font-size: 48px;
  }
  @media (min-width: 1200px) {
    text-align: left;
    margin: 0;
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 80px;

  @media (min-width: 600px) {
    width: inherit;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 10%;
    margin-left: 10%;
  }
`;
