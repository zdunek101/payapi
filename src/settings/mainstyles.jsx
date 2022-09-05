import styled from "styled-components";

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
