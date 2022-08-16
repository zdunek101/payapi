import React, { useEffect } from "react";

const BurgerMenu = ({ status, HandleClick }) => {
  return (
    <>
      <div className={`menu__btn ${status}`} role="button" onClick={HandleClick}>
        <span> </span>
        <span> </span>
        <span> </span>
      </div>
    </>
  );
};

const UseOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

export { BurgerMenu, UseOnClickOutside };
