import React, { useState, useRef } from "react";
import { ReactComponent as Logo } from "../../files/assets/logo.svg";
import Buttons from "../atoms/Buttons";
import NavOptions from "../atoms/NavOptions";
import { BurgerMenu, UseOnClickOutside } from "../atoms/BurgerMenu";
import { useEffect } from "react";

const NavBar = () => {
  const node = useRef();
  UseOnClickOutside(node, () => setStatus("close"));
  const [status, setStatus] = useState("close");
  const [className, setClassName] = useState("");

  const handleClick = () => {
    setStatus(status === "open" ? "close" : "open");
  };

  const handleResize = () => {
    if (window.innerWidth > 599) {
      setClassName("open");
    } else setClassName("");
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <nav className="navBar">
        <span className="logo">
          <Logo />
        </span>
        <span className={`navBar__options ${className === "" ? status : className}`} ref={node}>
          <BurgerMenu status={status} HandleClick={handleClick} />
          <NavOptions />
          <Buttons component={"navBar"} text={"Schedule a Demo"} />
        </span>
      </nav>
    </>
  );
};

export default NavBar;
