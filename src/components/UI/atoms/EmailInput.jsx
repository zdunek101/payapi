import React from "react";

const EmailInput = (email) => {
  return (
    <>
      <input className="emailInput" type="email" placeholder="Enter email address" value={email}></input>
    </>
  );
};

export default EmailInput;
