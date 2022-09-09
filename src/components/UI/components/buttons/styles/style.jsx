import styled from "styled-components";
import { variables } from "../../../../../settings/mainstyles";

export const MenuBurger = styled.div.attrs((props) => ({
  role: "button",
}))`
  align-items: center;
  position: fixed;
  right: 0px;
  z-index: 100;
  margin: 40px 25px 0 0;
  height: 38px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  span {
    display: block;
    width: 24px;
    height: 3px;
    margin-bottom: 5px;
    background-color: ${(props) => (props.open ? variables.colors.pri_white : variables.colors.sec_blue)};
    top: 0;
    transition: all 0.5s 0s ease-in-out;
    transform-origin: left;
    opacity: 1;
  }

  &.open span {
    &:nth-child(1) {
      transform: rotate(43deg);
      transform-origin: left;
    }
    &:nth-child(2) {
      opacity: 0;
      transform: scale(0, 0);
    }

    &:nth-child(3) {
      transform: rotate(-43deg);
      transform-origin: left;
    }
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

export const Button = styled.button`
  border: ${(props) => (props.bgColor === variables.colors.pri_pink ? "none" : `1px solid ${props.fontColor}`)};
  color: ${(props) => props.fontColor};
  text-align: center;
  text-decoration: none;
  background-color: ${(props) => props.bgColor};
  font-family: ${variables.fonts.textFont};
  font-size: 15px;
  font-weight: 700;
  padding: 16px 26px;
  border-radius: 28px;
  align-self: center;
  min-width: 152px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.fontColor};
    color: ${(props) => props.hoverColor};
  }

  @media (min-width: 600px) {
    font-size: 14px;
    padding: 13px 20px;
    margin-right: 10px;
    margin-top: 0;
  }

  @media (min-width: 700px) {
    font-size: 15px;
    padding: 16px 26px;
    margin-right: 40px;
  }
`;
