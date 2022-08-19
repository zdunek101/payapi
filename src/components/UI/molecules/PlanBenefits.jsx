import React from "react";
import ListItem from "../atoms/ListItem";

const PlanBenefits = ({ checkAmount }) => {
  const isCheck = (number) => {
    if (checkAmount >= number) {
      return true;
    } else return false;
  };

  return (
    <>
      <ul className="plan__package__list">
        <ListItem text={"Translations"} avalible={isCheck(1)} />
        <ListItem text={"Auth"} avalible={isCheck(2)} />
        <ListItem text={"Identity"} avalible={isCheck(3)} />
        <ListItem text={"Investments"} avalible={isCheck(4)} />
        <ListItem text={"Assets"} avalible={isCheck(5)} />
        <ListItem text={"Liabilities"} avalible={isCheck(6)} />
        <ListItem text={"Income"} avalible={isCheck(7)} />
      </ul>
    </>
  );
};

export default PlanBenefits;
