import React from "react";
import { SvgImage, Box, Title, Text } from "./style";

const SvgBox = ({ titleText, text, src, size }) => {
  return (
    <>
      <Box typeSize={size}>
        <SvgImage src={src} altText="" typeSize={size} />
        <div>
          <Title typeSize={size}>{titleText} </Title>
          <Text typeSize={size}>{text}</Text>
        </div>
      </Box>
    </>
  );
};
export default SvgBox;
