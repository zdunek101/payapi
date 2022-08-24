import React from "react";
import Goals from "../../molecules/Goals";

const GoalsBox = () => {
  return (
    <>
      <div className="goals_container">
        <Goals text={"300+"} title={"Team Members"} />
        <Goals text={"3"} title={"Offices in the US"} />
        <Goals text={"10M+"} title={"Transactions analyzed"} />
      </div>
    </>
  );
};

export default GoalsBox;
