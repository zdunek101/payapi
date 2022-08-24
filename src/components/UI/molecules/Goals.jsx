import React from "react";
import Text from "../atoms/Text";
import Title from "../atoms/Title";

const Goals = ({ text, title }) => {
  return (
    <>
      <div className="goals__box">
        <Title className={"goals"} text={title} />
        <Text className={"goals"} text={text} />
      </div>
    </>
  );
};

export default Goals;
