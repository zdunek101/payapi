import React from "react";
import Partner from "../atoms/Partner";

import tesla from "../../files/assets/shared/desktop/tesla.svg";
import microsoft from "../../files/assets/shared/desktop/microsoft.svg";
import hp from "../../files/assets/shared/desktop/hewlett-packard.svg";
import oracle from "../../files/assets/shared/desktop/oracle.svg";
import google from "../../files/assets/shared/desktop/google.svg";
import nvidia from "../../files/assets/shared/desktop/nvidia.svg";

const Partners = () => {
  return (
    <>
      <div className="partners__container">
        <div className="partners__logo">
          <Partner partner={"tesla"} partnerSrc={tesla} />
          <Partner partner={"microsoft"} partnerSrc={microsoft} />
          <Partner partner={"HP hewlett-packard"} partnerSrc={hp} />
          <Partner partner={"oracle"} partnerSrc={oracle} />
          <Partner partner={"google"} partnerSrc={google} />
          <Partner partner={"nvidia"} partnerSrc={nvidia} />
        </div>
      </div>
    </>
  );
};

export default Partners;
