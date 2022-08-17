import React from "react";

const Partner = ({ partner, partnerSrc }) => {
  return (
    <>
      <img src={partnerSrc} alt={`${partner} logo`} className="partner__logo"></img>
    </>
  );
};

export default Partner;
