import React from "react";

const Buttons = ({ className, text, type, href }) => {
  const btnType = () => {
    if (type === "submit") {
      return (
        <>
          <button type={type} className={`${className}__btn`}>
            {text}
          </button>
        </>
      );
    } else {
      return (
        <>
          <a href={href} className={`${className}__btn__link`}>
            <button type={type} className={`${className}__btn`}>
              {text}
            </button>
          </a>
        </>
      );
    }
  };

  return <>{btnType()}</>;
};

export default Buttons;
