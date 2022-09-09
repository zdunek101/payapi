import React from "react";
import { SvgImage, Box, Title, Text } from "./style";
// import Text from "../../atoms/Text";
// import Title from "../../atoms/Title";

const SvgBox = ({ className, altText, titleText, text, src, size }) => {
  return (
    <>
      <Box typeSize={size}>
        <SvgImage src={src} altText="" typeSize={size} />
        <div className={`${className}__box`}>
          <Title typeSize={size}>{titleText} </Title>
          <Text typeSize={size}>{text}</Text>
        </div>
      </Box>
    </>
  );
};
export default SvgBox;
