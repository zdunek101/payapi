import React from "react";

const Title = ({ component, text }) => {
  return <h3 className={`${component}__title`}>{text}</h3>;
};

export default Title;
