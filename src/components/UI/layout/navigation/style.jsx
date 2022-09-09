import styled from "styled-components";
import { variables } from "../../../../settings/mainstyles";

export const LogoBox = styled.span`
  margin: 40px 0 0 25px;

  @media (min-width: 1280px) {
    margin: 45px 0 0 165px;
  }
`;

export const Navigation = styled.header`
  display: grid;
  grid-template-columns: 50% 50%;
  overflow: hidden;

  @media (min-width: 600px) {
    grid-template-columns: 20% 80%;
  }
  @media (min-width: 1280px) {
    grid-template-columns: 30% 70%;
  }
`;

export const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${variables.colors.sec_blue_dark};
  height: 100vh;
  width: 80vw;
  z-index: 2;
  position: fixed;
  right: 0;
  transition: 0.5s ease-in-out;

  &.close {
    right: -500px;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    background-color: transparent;
    align-items: flex-start;
    justify-content: end;
    margin-top: 35px;
    position: relative;
    height: auto;
  }

  @media (min-width: 1200px) {
    justify-content: space-between;
    position: relative;
    width: auto;
    margin-top: 40px;
    margin-right: 165px;
    z-index: inherit;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 0;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const ListElement = styled.li`
  font-family: ${variables.fonts.textFont};
  font-size: 20px;
  list-style: none;
  opacity: 70%;
  font-weight: 700;
  padding: 0 75px 32px 75px;

  &:first-child {
    padding-top: 48px;
    margin-top: 90px;
    border-top: 1px solid white;
  }
  a {
    text-decoration: none;
    color: ${variables.colors.pri_white};
    opacity: 70%;
    &:visited {
      color: ${variables.colors.pri_white};
      opacity: 70%;
    }
    &:hover,
    &:focus,
    &:active {
      opacity: 70%;
      color: ${(props) => (props.footer ? `${variables.colors.pri_white}` : `${variables.colors.sec_blue}`)};
    }
  }

  @media (min-width: 600px) {
    font-size: 15px;
    color: ${(props) => (props.footer ? `${variables.colors.pri_white}` : `${variables.colors.sec_blue}`)};
    padding: 0;

    &:first-child {
      padding-top: 0;
      margin-top: 0;
      border-top: none;
    }
    &:nth-child(2) {
      margin: 0 20px;
    }

    &:nth-child(3) {
      margin-right: 40px;
    }
    a:visited {
      color: ${variables.colors.sec_blue};
      opacity: 70%;
    }

    a {
      text-decoration: none;
      color: ${(props) => (props.footer ? `${variables.colors.pri_white}` : `${variables.colors.sec_blue}`)};
      opacity: 70%;
      &:visited {
        color: ${(props) => (props.footer ? `${variables.colors.pri_white}` : `${variables.colors.sec_blue}`)};
        opacity: 70%;
      }
      &:hover {
        opacity: 100%;
      }

      &:focus,
      &:active {
        opacity: 70%;
        color: ${(props) => (props.footer ? `${variables.colors.pri_white}` : `${variables.colors.sec_blue}`)};
      }
    }
  }

  @media (min-width: 760px) {
    padding: 0;
    &:first-child {
      padding-top: 0;
      margin-top: 0;
      border-top: none;
    }
    &:nth-child(2) {
      margin: 0 40px;
    }
    &:nth-child(3) {
      margin-right: 85px;
    }
  }
`;
