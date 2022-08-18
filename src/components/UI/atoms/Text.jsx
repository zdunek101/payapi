import React from "react";

const Text = ({ text, className }) => {
  return <p className={`${className}__text`}>{text}</p>;
};

export default Text;
