import React from "react";
import SvgImage from "../atoms/SvgImage";
import Title from "../atoms/Title";
import Text from "../atoms/Text";

const iluImplement = ({ className, altText, titleText, text, src }) => {
  return (
    <>
      <div className={className}>
        <SvgImage src={src} className={`${className}__img`} altText={altText} />
        <div className={`${className}__box`}>
          <Title className={className} text={titleText} />
          <Text className={className} text={text} />
        </div>
      </div>
    </>
  );
};

export default iluImplement;
