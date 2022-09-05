import React from "react";
import styled from "styled-components";
import { variables } from "../../../../settings/mainstyles";

import tesla from "../../../files/assets/shared/desktop/tesla.svg";
import microsoft from "../../../files/assets/shared/desktop/microsoft.svg";
import hp from "../../../files/assets/shared/desktop/hewlett-packard.svg";
import oracle from "../../../files/assets/shared/desktop/oracle.svg";
import google from "../../../files/assets/shared/desktop/google.svg";
import nvidia from "../../../files/assets/shared/desktop/nvidia.svg";

const Partner = styled.img`
  max-width: 120px;
  height: 100px;
  width: 100px;
  mask: url(${(props) => props.logoName}) no-repeat 50% 50%;
  mask-size: contain;
  background-color: ${variables.colors.sec_blue};
`;

const ContactPartners = () => {
  return (
    <>
      <section>
        <p>Join the thousands of innovators already building with us</p>
        <div>
          <Partner logoName={tesla}></Partner>
          <Partner logoName={microsoft}></Partner>
          <Partner logoName={hp}></Partner>
          <Partner logoName={oracle}></Partner>
          <Partner logoName={google}></Partner>
          <Partner logoName={nvidia}></Partner>
        </div>
      </section>
    </>
  );
};

export default ContactPartners;
