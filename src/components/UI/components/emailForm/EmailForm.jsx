import React, { useEffect } from "react";
import { useState } from "react";
import Buttons from "../buttons/Buttons";
import { Form, Input } from "./styles";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [send, setSend] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSend(email);
    setEmail("");
  };

  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(send));
  }, [send]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Buttons type={"submit"} colorTheme="pink" text={"Schedule a Demo"} isEmail={true}></Buttons>
      </Form>
    </>
  );
};

export default EmailForm;
