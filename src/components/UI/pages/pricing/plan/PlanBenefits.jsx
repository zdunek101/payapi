import React from "react";
import { List, BenefitsLI } from "./style";

const PlanBenefits = ({ checkAmount }) => {
  const isCheck = (number) => {
    if (checkAmount >= number) {
      return true;
    } else return false;
  };

  const ListItem = ({ text, avalible }) => {
    return (
      <>
        <BenefitsLI isCheck={avalible}>{text}</BenefitsLI>
      </>
    );
  };

  const benefits = ["Translations", "Auth", "Identity", "Investments", "Assets", "Liabilities", "Income"];

  return (
    <>
      <List>
        {benefits.map((element, key) => (
          <ListItem text={`${element}`} avalible={isCheck(key)} key={key} />
        ))}
      </List>
    </>
  );
};

export default PlanBenefits;
