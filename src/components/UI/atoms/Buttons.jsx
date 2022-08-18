import React from "react";

const Buttons = ({ className, text, type, href }) => {
  const insideBtn = () => {
    if (type === "submit") {
      return <>{text}</>;
    } else {
      return (
        <>
          <a href={href} className={`${className}__btn__link`}>
            {text}
          </a>
        </>
      );
    }
  };

  return (
    <>
      <button type={type} className={`${className}__btn`}>
        {insideBtn()}
      </button>
    </>
  );
};

export default Buttons;
