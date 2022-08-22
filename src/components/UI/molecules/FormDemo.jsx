import React from "react";
import { useState } from "react";
import Buttons from "../atoms/Buttons";
import Title from "../atoms/Title";

const FormDemo = ({ className, bottom = false }) => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  const isBottom = () => {
    if (bottom) {
      return <Title className={"info__form"} text={"Ready to start?"} />;
    } else return <></>;
  };
  return (
    <>
      <div className={`${className}__container--supp`}>
        {isBottom()}
        <form className={`${className}__form`} onSubmit={handleSubmit}>
          <input
            className="emailInput"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={handleChange}
          ></input>
          <Buttons type={"submit"} className={"formDemo"} text={"Schedule a Demo"} />
        </form>
      </div>
    </>
  );
};

export default FormDemo;
