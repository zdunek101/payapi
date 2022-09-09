import styled, { css } from "styled-components";

export const variables = {
  fonts: {
    titleFont: `"DM Serif Display", serif`,
    textFont: `"Public Sans", sans-serif`,
  },
  colors: {
    pri_pink: `#ba4270`,
    pri_white: `#fbfcfe`,
    sec_blue: `#36536b`,
    sec_blue_dark: `#1b262f`,
    sec_blue_light: `#6c8294`,
    sec_pink: `#da6d97`,
  },
};

export const FontDefault = styled.p`
  font-size: 15px;
  font-family: ${variables.fonts.textFont};
  color: ${(props) => props.fontColor};
  font-weight: 400;
  line-height: 28px;
`;

export const circle = css`
  content: "";
  position: absolute;
  z-index: -1;
  width: 780px;
  height: 780px;
  background-color: ${variables.colors.sec_blue};

  border-radius: 50%;
  opacity: 15%;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -70%);

  @media (min-width: 600px) {
    width: 950px;
    height: 950px;
  }
  @media (min-width: 1280px) {
    width: 780px;
    height: 780px;
  }
`;

export const title = css`
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
