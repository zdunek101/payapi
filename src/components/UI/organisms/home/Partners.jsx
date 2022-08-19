import React from "react";
import SvgImage from "../../atoms/SvgImage";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";

import tesla from "../../../files/assets/shared/desktop/tesla.svg";
import microsoft from "../../../files/assets/shared/desktop/microsoft.svg";
import hp from "../../../files/assets/shared/desktop/hewlett-packard.svg";
import oracle from "../../../files/assets/shared/desktop/oracle.svg";
import google from "../../../files/assets/shared/desktop/google.svg";
import nvidia from "../../../files/assets/shared/desktop/nvidia.svg";
import Buttons from "../../atoms/Buttons";

const Partners = () => {
  return (
    <>
      <div className="partners__container">
        <div className="partners__logo">
          <SvgImage className={"partner__logo"} src={tesla} altText={"tesla logo"} />
          <SvgImage className={"partner__logo"} src={microsoft} altText={"microsoft logo"} />
          <SvgImage className={"partner__logo"} src={hp} altText={"HP hewlett-packard"} />
          <SvgImage className={"partner__logo"} src={oracle} altText={"oracle"} />
          <SvgImage className={"partner__logo"} src={google} altText={"google"} />
          <SvgImage className={"partner__logo"} src={nvidia} altText={"nvidia"} />
        </div>

        <div className="partners__info">
          <Title className={"partners"} text={"Who we work with"} />
          <Text
            className={"partners"}
            text={
              "Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. "
            }
          />
          <div className="partners__container--supp">
            <Buttons className={"partners"} type={"button"} text={"About Us"} href={"/about"}></Buttons>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
