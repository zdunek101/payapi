import React from "react";
import { useState } from "react";
import Buttons from "../atoms/Buttons";

const FormDemo = ({ className }) => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
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
  );
};

export default FormDemo;
