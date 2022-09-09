import React from "react";
import styled from "styled-components";
import { variables } from "../../../../settings/mainstyles";

const Box = styled.article`
  margin: 0 24px 48px 24px;

  @media (min-width: 600px) {
    margin: 0 48px 48px 48px;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 32% 68%;
    margin: 0 24px 64px 24px;

    &:nth-child(3) {
      margin-bottom: 92px;
    }
  }

  @media (min-width: 1280px) {
    width: 920px;
    align-self: center;
  }

  @media (min-width: 1900px) {
    width: inherit;
    max-width: 1200px;
    align-self: center;
  }
`;

const Title = styled.h3`
  font-family: ${variables.fonts.titleFont};
  font-size: 24px;
  font-weight: 400;
  color: ${variables.colors.sec_blue};
  text-align: center;
  margin: 0 24px;

  @media (min-width: 768px) {
    font-size: 32px;
    text-align: left;
    margin: 0;
  }
`;

const Textx = styled.p`
  font-size: 15px;
  font-family: ${variables.fonts.textFont};
  color: ${variables.colors.sec_blue_light};
  font-weight: 400;
  line-height: 28px;

  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    margin: 0;
  }
`;

const AboutParagraph = ({ title, text }) => {
  return (
    <>
      <Box>
        <Title>{title}</Title>
        <Textx>{text}</Textx>
      </Box>
    </>
  );
};

export default AboutParagraph;
