import React from "react";
import SvgBox from "../../../components/description-Svg/SvgBox";
import { InfoContainer, SmallIconBox } from "./styles";

import implement from "../../../../files/assets/home/desktop/illustration-easy-to-implement-v2.svg";
import simpleUi from "../../../../files/assets/home/desktop/illustration-simple-ui.svg";
import finance from "../../../../files/assets/home/desktop/icon-personal-finances.svg";
import banking from "../../../../files/assets/home/desktop/icon-banking-and-coverage.svg";
import payments from "../../../../files/assets/home/desktop/icon-consumer-payments.svg";

const Info = () => {
  return (
    <>
      <InfoContainer>
        <SvgBox
          src={implement}
          altText={"Implement Template"}
          titleText={"Easy to implement"}
          text={
            "Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease."
          }
          size={"regular"}
        />

        <SvgBox
          src={simpleUi}
          altText={"Pay API Design"}
          titleText={"Simple UI & UX"}
          text={
            "Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. "
          }
          size="big"
        />
        <SmallIconBox>
          <SvgBox
            src={finance}
            altText={"Finance icon"}
            titleText={"Personal Finances"}
            text={
              "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. "
            }
            size="small"
          />
          <SvgBox
            src={banking}
            altText={"Banking icon"}
            titleText={"Banking & Coverage"}
            text={
              "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts."
            }
            size="small"
          />
          <SvgBox
            src={payments}
            altText={"Consumer Payments"}
            titleText={"Consumer Payments"}
            text={
              "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account."
            }
            size="small"
          />
        </SmallIconBox>
      </InfoContainer>
    </>
  );
};

export default Info;
