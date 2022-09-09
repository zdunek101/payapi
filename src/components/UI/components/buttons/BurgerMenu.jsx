import React from "react";
import { MenuBurger } from "./styles/style";

const BurgerMenu = ({ status, HandleClick }) => {
  return (
    <>
      <MenuBurger className={`${status}`} role="button" onClick={HandleClick}>
        <span> </span>
        <span> </span>
        <span> </span>
      </MenuBurger>
    </>
  );
};

export default BurgerMenu;
