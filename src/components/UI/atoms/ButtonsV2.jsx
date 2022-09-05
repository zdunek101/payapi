import styled from "styled-components";
import { variables } from "../../../settings/mainstyles";

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
