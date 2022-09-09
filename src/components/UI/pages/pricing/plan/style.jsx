import styled from "styled-components";
import { variables } from "../../../../../settings/mainstyles";
import check from "../../../../files/assets/shared/desktop/icon-check.svg";

export const BenefitsLI = styled.li`
  font-family: ${variables.fonts.textFont};
  color: ${variables.colors.sec_blue};
  font-size: 16px;
  font-weight: 400;
  margin: 8px 0 8px 0;
  padding-left: 24px;
  width: 50%;

  list-style: ${(props) => (props.isCheck ? `url(${check})` : "none")};
  opacity: ${(props) => (props.isCheck ? "" : "50%")};
  &::marker {
    padding: 0;
  }
`;

export const List = styled.ul`
  padding: 24px 0 24px 0;
  margin: 42px 0 42px 0;

  border-top: 1px solid rgba(54, 83, 107, 0.25);
  border-bottom: 1px solid rgba(54, 83, 107, 0.25);

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: self-start;
    padding-left: 7%;
  }
`;

export const PlanPackage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 350px;

  @media (min-width: 600px) {
    width: 223px;
    &:nth-child(2) {
      margin: 0 10px;
    }
  }

  @media (min-width: 1280px) {
    align-items: start;
    width: 25%;
    &:nth-child(2) {
      margin: 0;
    }
  }
`;

export const PlanTitle = styled.h4`
  font-size: 32px;
  margin-top: 48px;
  color: ${variables.colors.pri_pink};
  font-size: 24px;
  margin: 48px 0 81px 0;
  font-family: ${variables.fonts.titleFont};
  font-weight: 400;
  text-align: center;
  margin: 48px 0 24px 0;

  @media (min-width: 600px) {
  }
  @media (min-width: 1200px) {
    text-align: left;
    margin: 0;
  }

  @media (min-width: 780px) {
    margin-bottom: 15px;
  }

  @media (min-width: 1280px) {
    margin-top: 72px;
  }
`;

export const PlanText = styled.p`
  font-size: 15px;
  font-family: ${variables.fonts.textFont};
  font-weight: 400;
  line-height: 28px;
  color: ${variables.colors.sec_blue_light};
  text-align: center;

  @media (min-width: 780px) {
    margin-top: 0;
  }

  @media (min-width: 1280px) {
    text-align: start;
  }
`;
export const Price = styled.p`
  font-family: ${variables.fonts.titleFont};
  color: ${variables.colors.sec_blue};
  font-size: 56px;
  margin: 0;
`;
/*

.pricing__title {
  font-size: 32px;
  margin-top: 48px;
  text-align: center;

  @media (min-width: 780px) {
    font-size: 48px;
  }

  @media (min-width: 1280px) {
    font-size: 56px;
    text-align: left;
    margin-left: 8%;
    margin-top: 80px;
    width: fit-content;
  }
}

.pricing__title--package {
  color: $pri_pink;
  font-size: 24px;
  margin: 48px 0 81px 0;

  @media (min-width: 780px) {
    margin-bottom: 15px;
  }

  @media (min-width: 1280px) {
    margin-top: 72px;
    font-size: 32px;
  }
}



*/
