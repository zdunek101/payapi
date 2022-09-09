import styled from "styled-components";
import { circle, variables } from "../../../../settings/mainstyles";

export const Container = styled.main`
  margin: 48px 0 0 0;
  display: flex;

  flex-direction: column;

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

  @media (min-width: 1280px) {
    margin-top: 82px;
    margin-bottom: 92px;
  }
`;

export const MainTitle = styled.h2`
  font-family: ${variables.fonts.titleFont};
  font-size: 32px;
  font-weight: 400;
  color: ${variables.colors.sec_blue};
  text-align: center;
  margin: 0 15px 40px 15px;
  letter-spacing: -0.369231px;
  line-height: 50px;
  height: fit-content;
  align-self: center;

  @media (min-width: 600px) {
    font-size: 48px;
    margin: 0 48px 48px 48px;
  }
  @media (min-width: 768px) {
    margin: 0 97px 48px 97px;
    line-height: 56px;
    letter-spacing: -0.369231px;
    max-width: 569px;
    margin-bottom: 54px;
  }
  @media (min-width: 1200px) {
    text-align: left;
    margin: 0;
    margin-bottom: 51px;
    margin-left: 0;
    margin-right: 0;
    padding-right: calc(920px - 569px);
  }

  @media (min-width: 1900px) {
    padding-right: calc(1200px - 569px);
  }
`;

export const Box = styled.div`
  &:nth-child(2) {
    margin: 32px 0 32px;
  }

  @media (min-width: 768px) {
    border-top: 1px solid rgba(54, 83, 107, 0.25);
    border-bottom: 1px solid rgba(54, 83, 107, 0.25);
    padding: 16px 0;
    width: 223px;

    &:nth-child(2) {
      margin: 0;
    }

    @media (min-width: 1280px) {
      width: 350px;
      padding: 0;
    }
  }
`;

export const GoalsTitle = styled.h4`
  font-family: ${variables.fonts.textFont};
  font-weight: 400;
  font-size: 16px;
  opacity: 70%;
  text-align: center;

  @media (min-width: 768px) {
    margin: 0 0 15px 0;
    text-align: left;
  }
`;

export const GoalsText = styled.p`
  font-family: ${variables.fonts.titleFont};
  color: ${variables.colors.pri_pink};
  font-weight: 400;
  font-size: 56px;
  text-align: center;
  margin: 0;
  line-height: inherit;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const GoalsContainer = styled.section`
  border-top: 1px solid rgba(54, 83, 107, 0.25);
  border-bottom: 1px solid rgba(54, 83, 107, 0.25);
  padding: 16px 0 16px 0;
  margin: 48px 7%;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    border: none;
    align-self: center;
    width: 100vw;
  }

  @media (min-width: 1280px) {
    margin: 72px 7%;
  }
`;
