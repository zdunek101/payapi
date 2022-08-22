import React from "react";
import Title from "../../atoms/Title";
import Plan from "../../organisms/pricing/Plan";
import FormDemo from "../../molecules/FormDemo";

const Pricing = () => {
  return (
    <>
      <Title className={"pricing"} text={"Pricing"} />
      <div className="plan__container">
        <Plan className={"pricing"} mod={"--package"} title={"Free Plan"} price={"$0.00"} checkAmount={3} />
        <Plan className={"pricing"} mod={"--package"} title={"Basic Plan"} price={"$249.00"} checkAmount={5} />
        <Plan className={"pricing"} mod={"--package"} title={"Premium Plan"} price={"$499.00"} checkAmount={7} />
      </div>
      <FormDemo className={"pricing"} bottom={true} />
    </>
  );
};

export default Pricing;
