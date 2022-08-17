import React from "react";

const Buttons = ({ component, text }) => {
  return (
    <>
      <button className={`${component}__btn`}>{text}</button>
    </>
  );
};

export default Buttons;
