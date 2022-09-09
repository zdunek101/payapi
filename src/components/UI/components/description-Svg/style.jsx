import styled, { css } from "styled-components";
import { title } from "../../../../settings/mainstyles";
import { Svg } from "../partners-icon/PartnersLogo";
import { variables } from "../../../../settings/mainstyles";

const bigTheme = css`
  position: relative;
  width: 80%;
  transform: translate(4%, 0);

  @media (min-width: 1280px) {
    width: 55%;
    transform: translate(3%, 0);
  }
`;

const regularTheme = css`
  @media (min-width: 1290px) {
    width: 40%;
  }
`;

const smallTheme = css`
  margin-bottom: 32px;
`;

export const SvgImage = styled(Svg)`
  ${(props) => {
    switch (props.typeSize) {
      case "big":
        return bigTheme;
      case "regular":
        return regularTheme;
      case "small":
        return smallTheme;
      default:
        return "";
    }
  }}
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 23px;
  position: relative;
  overflow: hidden;

  @media (min-width: 1280px) {
    flex-direction: ${(props) => {
      switch (props.typeSize) {
        case "big":
          return "row-reverse";
        case "regular":
          return "row";
        default:
          return "column";
      }
    }};
    justify-content: space-between;
    /* margin-top: 150px; */
    margin: 0;
  }
`;

export const Title = styled.h3`
  font-family: ${(props) => (props.typeSize === "small" ? variables.fonts.textFont : variables.fonts.titleFont)};
  font-size: ${(props) => (props.typeSize === "small" ? `18px` : "32px")};
  font-weight: ${(props) => (props.typeSize === "small" ? "800" : "400")};
  color: ${variables.colors.sec_blue};
  text-align: center;
  margin: 0 24px;
  max-width: 420px;

  @media (min-width: 600px) {
    font-size: ${(props) => (props.typeSize === "small" ? `18px` : "48px")};
  }
  @media (min-width: 1200px) {
    text-align: ${(props) => (props.typeSize === "small" ? `center` : "left")};
    margin: 0;
  }
`;

export const Text = styled.p`
  text-align: center;
  color: ${variables.colors.sec_blue_light};
  font-family: ${variables.fonts.textFont};
  max-width: 420px;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;

  @media (min-width: 1200px) {
    text-align: ${(props) => (props.typeSize === "small" ? "center" : "left")};
  }
`;
