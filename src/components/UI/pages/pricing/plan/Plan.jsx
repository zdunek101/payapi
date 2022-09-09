import React from "react";
import PlanBenefits from "../plan/PlanBenefits";
import Buttons from "../../../components/buttons/Buttons";
import { PlanPackage, PlanText, PlanTitle, Price } from "./style";
import CountUp from "react-countup";

const Plan = ({ className, title, price, checkAmount, text, mod }) => {
  return (
    <>
      <PlanPackage>
        <PlanTitle>{title}</PlanTitle>
        <PlanText>{text}</PlanText>
        <Price className={`${className}__price`}>
          <CountUp duration={1} decimals={2} end={price} prefix={"$"} />
        </Price>
        <PlanBenefits checkAmount={checkAmount} />
        <Buttons text={"Request Access"} type={"button"} href={"/contact"} colorTheme="black" />
      </PlanPackage>
    </>
  );
};

export default Plan;
