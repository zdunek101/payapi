import styled from "styled-components";

export const InfoContainer = styled.section`
  margin-bottom: 80px;

  @media (min-width: 600px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;

export const SmallIconBox = styled.div`
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
`;
