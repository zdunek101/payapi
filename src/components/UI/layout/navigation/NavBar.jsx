import React, { useState, useRef } from "react";
import { ReactComponent as Logo } from "../../../files/assets/logo.svg";
import Buttons from "../../components/buttons/Buttons";
import NavList from "./NavList";
import { Link } from "react-router-dom";
import UseOnClickOutside from "../../hooks/UseOnClickOutside";
import { UseResize } from "../../hooks/UseResize";
import BurgerMenu from "../../components/buttons/BurgerMenu";
import { Navigation, NavigationContainer, LogoBox } from "./style";

const NavBar = () => {
  const node = useRef();
  const [status, setStatus] = useState("close");

  UseOnClickOutside(node, () => setStatus("close"));
  UseResize(
    () => setStatus("open"),
    () => setStatus("close")
  );

  const handleClick = () => {
    setStatus(status === "open" ? "close" : "open");
  };

  return (
    <>
      <Navigation>
        <LogoBox>
          <Link to="/">
            <Logo />
          </Link>
        </LogoBox>
        <NavigationContainer className={`${window.innerWidth > 599 ? "" : status}`} ref={node}>
          <BurgerMenu status={status} HandleClick={handleClick} open={status} />
          <NavList handleClick={handleClick} />
          <Buttons text={"Schedule a Demo"} colorTheme="pink" />
        </NavigationContainer>
      </Navigation>
    </>
  );
};

export default NavBar;
