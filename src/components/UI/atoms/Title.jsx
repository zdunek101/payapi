import React from "react";

const Title = ({ className, text }) => {
  return <h3 className={`${className}__title`}>{text}</h3>;
};

export default Title;
