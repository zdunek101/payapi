import styled, { css } from "styled-components";
import checkIcon from "../../../../files/assets/shared/desktop/icon-check.svg";

import { Button } from "../../../components/buttons/styles/style";
import { FontDefault, variables } from "../../../../../settings/mainstyles";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputStyle = css`
  padding: 20px;
  background-color: transparent;
  font-family: ${variables.fonts.textFont};
  font-size: 15px;
  border: none;
  border-bottom: 1px solid ${(props) => (props.validate ? `rgba(255, 0, 0, 0.5)` : `rgba(54, 83, 107, 0.5)`)};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${(props) => (props.validate ? `rgba(255, 0, 0, 0.5)` : `rgba(54, 83, 107, 1)`)};
    &::placeholder {
      opacity: 100%;
    }
  }

  &::placeholder {
    font-family: ${variables.fonts.textFont};
    color: ${(props) => (props.validate ? "rgba(255, 0, 0, 1)" : variables.colors.sec_blue)};
    opacity: 50%;
    font-size: 15px;
  }
`;

export const Input = styled.input`
  ${InputStyle};
`;

export const TextArea = styled.textarea`
  ${InputStyle}
`;

export const CheckBox = styled.input`
  appearance: none;
  min-width: 24px;
  height: 24px;
  background-color: ${(props) => (props.mark ? `#BA4270` : `rgba(54, 83, 107, 0.25)`)};
  position: relative;
  margin-right: 26px;

  &:before {
    content: "";
    display: ${(props) => (props.mark ? "block" : "none")};
    mask: url(${checkIcon}) no-repeat 50% 50%;
    mask-size: contain;
    position: absolute;
    width: 60%;
    height: 100%;
    background-color: white;
    left: 0;
    right: 0;
    top: 42%;
    bottom: 41.71%;
    margin: auto;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
`;

export const Invalid = styled.p`
  color: #ff0000;
  opacity: 50%;
  margin-bottom: 0;
  font-size: 11px;
  font-family: ${variables.fonts.textFont};
`;

export const NewsletterText = styled(FontDefault)`
  letter-spacing: -0.115385px;
  line-height: 25px;
  margin: 0;
`;

export const SubmitButton = styled(Button)`
  align-self: flex-start;
`;
