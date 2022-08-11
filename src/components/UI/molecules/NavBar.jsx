import React from "react";
import { ReactComponent as Logo } from "../../files/assets/logo.svg";
import Buttons from "../atoms/Buttons";
import NavOptions from "../atoms/NavOptions";

const NavBar = () => {
  return (
    <>
      <nav className="navBar">
        <span className="logo">
          <Logo />
        </span>
        <span className="navBar__options">
          <NavOptions />
          <Buttons text={"Schedule a Demo"} />
        </span>
      </nav>
    </>
  );
};

export default NavBar;
