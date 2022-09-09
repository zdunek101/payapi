import React from "react";
import { Box, GoalsTitle, GoalsText, GoalsContainer } from "./style";
import CountUp from "react-countup";

const GoalsBox = ({ text, title }) => {
  const Goals = ({ text, title, suffix }) => {
    return (
      <>
        <Box>
          <GoalsTitle>{title}</GoalsTitle>
          <GoalsText>
            <CountUp end={text} suffix={suffix} />
          </GoalsText>
        </Box>
      </>
    );
  };

  return (
    <>
      <GoalsContainer>
        <Goals text={"300"} suffix={"+"} title={"Team Members"} />
        <Goals text={"3"} suffix="" title={"Offices in the US"} />
        <Goals text={"10"} suffix={"M+"} title={"Transactions analyzed"} />
      </GoalsContainer>
    </>
  );
};

export default GoalsBox;
