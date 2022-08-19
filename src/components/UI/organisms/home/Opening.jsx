import React from "react";
import HomePhone from "../../atoms/HomePhone";
import Title from "../../atoms/Title";
import FormDemo from "../../molecules/FormDemo";

const Opening = () => {
  return (
    <>
      <div className="opening__container">
        <HomePhone />
        <div className="opening__container--supp">
          <Title className={"opening"} text={"Start building with our APIs for absolutely free."} />
          <FormDemo className={"opening"} text="Schedule a Demo" />
          <p className="opening__text">
            Have any questions?{" "}
            <a className="opening__text--link" href="/">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Opening;
