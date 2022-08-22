import React from "react";
import Title from "../../atoms/Title";
import Plan from "../../organisms/pricing/Plan";
import FormDemo from "../../molecules/FormDemo";

const Pricing = () => {
  return (
    <>
      <Title className={"pricing"} text={"Pricing"} />
      <div className="plan__container">
        <Plan
          className={"pricing"}
          mod={"--package"}
          title={"Free Plan"}
          price={"$0.00"}
          checkAmount={3}
          text={"Build and test using our core set of products with up to 100 API requests "}
        />
        <Plan
          className={"pricing"}
          mod={"--package"}
          title={"Basic Plan"}
          price={"$249.00"}
          checkAmount={5}
          text={"Launch your project with unlimited requests and no contractual minimums "}
        />
        <Plan
          className={"pricing"}
          mod={"--package"}
          title={"Premium Plan"}
          price={"$499.00"}
          checkAmount={7}
          text={"Get tailored solutions, volume pricing, and dedicated support for your team "}
        />
      </div>
      <FormDemo className={"pricing"} bottom={true} />
    </>
  );
};

export default Pricing;
