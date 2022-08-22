import React from "react";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import PlanBenefits from "../../molecules/PlanBenefits";
import Buttons from "../../atoms/Buttons";

const Plan = ({ className, title, price, checkAmount, text, mod }) => {
  return (
    <>
      <div className="plan__package">
        <Title className={className} text={title} mod={mod} />
        <Text className={"plan"} text={text} />
        <p className={`${className}__price`}>{price}</p>
        <PlanBenefits checkAmount={checkAmount} />
        <Buttons className={"plan"} text={"Request Access"} type={"button"} href={"/contact"} />
      </div>
    </>
  );
};

export default Plan;
