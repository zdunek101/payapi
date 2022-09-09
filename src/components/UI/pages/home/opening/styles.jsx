import styled from "styled-components";
import { circle, title, variables } from "../../../../../settings/mainstyles";
import phone from "../../../../files/assets/home/desktop/iphone.svg";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    grid-column: left;
    justify-content: left;
    align-items: center;
  }

  @media (min-width: 1620px) {
    align-items: baseline;
    margin: 0 auto;
  }
`;

export const HomeOpeningSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px 0 0 0;

  &::before {
    ${circle}
    @media (min-width: 1280px) {
      top: 0%;
      left: 50%;
      transform: translate(0%, -23%);
    }
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: [left] 50% [right] 50%;
    grid-auto-flow: column;
    margin-top: 80px;
  }
`;

export const Title = styled.h1`
  ${title}
  margin-bottom: 24px;

  @media (min-width: 600px) {
    margin: 0 96px 22px 96px;
  }

  @media (min-width: 1200px) {
    text-align: left;
    margin: 0 96px 22px 96px;
    max-width: 590px;
    font-size: 72px;
  }

  @media (min-width: 1620px) {
    margin: 0 0 22px 0;
  }
`;

export const Text = styled.p`
  margin: 24px 0 80px 0;
  font-family: ${variables.fonts.textFont};
  color: ${variables.colors.sec_blue_light};
  @media (min-width: 1200px) {
    width: 415px;
    padding-left: 27px;
  }

  a {
    font-size: 15px;
    font-family: ${variables.fonts.textFont};
    color: ${variables.colors.sec_blue};
    font-weight: bold;
    text-decoration: none;
  }
`;

export const HomeImage = styled.img.attrs(() => ({
  src: `${phone}`,
  alt: "phone screen API demo",
}))`
  width: 33.333%;
  height: auto;
  margin-bottom: 24px;

  @media (min-width: 1200px) {
    grid-column: right;
    place-self: center;
  }
`;
