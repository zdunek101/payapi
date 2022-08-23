import React from "react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";

const AboutParagraph = ({ title, text }) => {
  return (
    <>
      <div className="about__paragraph">
        <Title className={"about"} text={title} mod="--subtitle" />
        <Text className={"about"} text={text} />
      </div>
    </>
  );
};

export default AboutParagraph;
