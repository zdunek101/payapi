import React from "react";
import { useState } from "react";
import Buttons from "../atoms/Buttons";

const FormDemo = ({ component }) => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form className={`${component}__form`}>
      <input
        className="emailInput"
        type="email"
        placeholder="Enter email address"
        email="email"
        value={email}
        onChange={handleChange}
      ></input>
      <Buttons component={"form"} text={"Schedule a Demo"} />
    </form>
  );
};

export default FormDemo;
