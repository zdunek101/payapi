import React from "react";


const Title = ({ className, text, mod = "" }) => {
  return <h3 className={`${className}__title${mod}`}>{text}</h3>;
};

export default Title;
