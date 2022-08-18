import React from "react";

const SvgImage = ({ src, className, altText }) => {
  return (
    <>
      <img src={src} alt={`${altText}`} className={className}></img>
    </>
  );
};

export default SvgImage;
