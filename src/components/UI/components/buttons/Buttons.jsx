import styled from "styled-components";
import { variables } from "../../../../settings/mainstyles";
import React from "react";

const buttonTheme = {
  basecolor: {
    pink: {
      border: "none",
      color: `${variables.colors.pri_white}`,
      backgroundColor: `${variables.colors.pri_pink}`,
      boxShadow: `10px 10px 25px -10px rgba(54, 83, 107, 0.25)`,
    },
    white: {
      border: `1px solid ${variables.colors.pri_white}`,
      color: `${variables.colors.pri_white}`,
      backgroundColor: `transparent`,
      alignSelf: "flex-start",
    },
    black: {
      border: `1px solid ${variables.colors.sec_blue}`,
      color: `${variables.colors.sec_blue}`,
      backgroundColor: `transparent`,
    },
  },
  hoverColor: {
    pink: {
      backgroundColor: `${variables.colors.sec_pink}`,
    },
    white: {
      color: `${variables.colors.sec_blue}`,
      backgroundColor: `${variables.colors.pri_white}`,
      border: `1 solid ${variables.colors.pri_white}`,
    },
    black: {
      border: `1 solid ${variables.colors.pri_blue}`,
      color: `${variables.colors.pri_white}`,
      backgroundColor: `${variables.colors.sec_blue}`,
    },
  },
  withEmail: {
    default: {
      padding: `16px 0`,
      marginTop: `16px`,
      alignSelf: `auto`,
    },
    media: {
      marginRight: `0`,
      marginTop: `0`,
      height: `48px`,
      width: `40%`,
      position: `absolute`,
      right: `0`,
    },
  },
};

export const Button = styled.button`
  ${(props) => {
    switch (props.colorTheme) {
      case "pink":
        return buttonTheme.basecolor.pink;

      case "white":
        return buttonTheme.basecolor.white;

      case "black":
        return buttonTheme.basecolor.black;

      default:
    }
  }}
  text-align: center;
  text-decoration: none;
  font-family: ${variables.fonts.textFont};
  font-size: 15px;
  font-weight: 700;
  padding: 16px 26px;
  border-radius: 28px;
  align-self: center;
  min-width: 152px;

  ${(props) => (props.isEmail ? buttonTheme.withEmail.default : "")}

  &:hover {
    cursor: pointer;
    ${(props) => {
      switch (props.colorTheme) {
        case "pink":
          return buttonTheme.hoverColor.pink;

        case "white":
          return buttonTheme.hoverColor.white;

        case "black":
          return buttonTheme.hoverColor.black;
        default:
      }
    }}
  }

  @media (min-width: 600px) {
    font-size: 14px;
    padding: 13px 20px;
    margin-right: 10px;
    margin-top: 0;

    ${(props) => (props.isEmail ? buttonTheme.withEmail.media : "")}
  }

  @media (min-width: 700px) {
    font-size: 15px;
    padding: 16px 26px;
  }

  @media (min-width: 1200px) {
    align-self: ${(props) => (props.colorTheme === "white" ? `flex-start` : "")};
  }
`;

const Buttons = ({ text, colorTheme, isEmail }) => {
  return (
    <>
      <Button colorTheme={colorTheme} isEmail={isEmail}>
        {text}
      </Button>
    </>
  );
};

export default Buttons;
