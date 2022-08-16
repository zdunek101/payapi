import React, { useState, useRef } from "react";
import { ReactComponent as Logo } from "../../files/assets/logo.svg";
import Buttons from "../atoms/Buttons";
import NavOptions from "../atoms/NavOptions";
import { BurgerMenu, UseOnClickOutside } from "../atoms/BurgerMenu";

const NavBar = () => {
  const node = useRef();
  UseOnClickOutside(node, () => setStatus("close"));
  const [status, setStatus] = useState("close");

  const HandleClick = () => {
    setStatus(status === "open" ? "close" : "open");
    console.log(status);
  };

  return (
    <>
      <nav className="navBar">
        <span className="logo">
          <Logo />
        </span>
        <span className={`navBar__options ${status}`} ref={node}>
          <BurgerMenu status={status} HandleClick={HandleClick} />
          <NavOptions />
          <Buttons text={"Schedule a Demo"} />
        </span>
      </nav>
    </>
  );
};

export default NavBar;
