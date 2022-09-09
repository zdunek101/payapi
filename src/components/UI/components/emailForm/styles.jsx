import styled from "styled-components";
import { variables } from "../../../../settings/mainstyles";
import { Button } from "../buttons/styles/style";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    position: relative;
    flex-direction: row;
    width: 440px;
  }
`;
export const Input = styled.input`
  border: none;
  background-color: ${variables.colors.pri_white};
  font-family: ${variables.fonts.textFont};
  font-size: 15px;
  font-weight: 700;
  padding: 16px 0;
  border-radius: 28px;
  width: 327px;
  box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
  border-radius: 24px;
  padding-left: 27px;

  &::placeholder {
    font-size: 15px;
    color: rgba(54, 83, 107, 0.5);
    text-align: left;
  }

  @media (min-width: 600px) {
    height: 48px;
    padding: 0 0 0 27px;
  }
  @media (min-width: 700px) {
    width: 100%;
  }
`;

export const ButtonForm = styled(Button)``;

/*

  
  .formDemo__btn {
    padding: 16px 0;
    margin-top: 16px;
    align-self: auto;
    @media (min-width: 600px) {
      margin-right: 0;
      margin-top: 0;
      height: 48px;
      width: 40%;
      position: absolute;
      right: 0;
    }
  }
  
  @media (min-width: 600px) {
    .emailInput {
      padding: 0;
      height: 48px;
      width: 100%;
    }
  }
  
  [class$="_container--supp"] {
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
  }
  */
