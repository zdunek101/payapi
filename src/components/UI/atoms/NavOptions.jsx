import React from "react";
import { Link } from "react-router-dom";

const NavOptions = ({ modification, handleClick }) => {
  return (
    <ul className={`navOptions${modification}`}>
      <li className={`navOptions__item${modification}`} onClick={handleClick}>
        <Link to="/pricing">Pricing</Link>
      </li>
      <li className={`navOptions__item${modification}`} onClick={handleClick}>
        <Link to="/about">About</Link>
      </li>
      <li className={`navOptions__item${modification}`} onClick={handleClick}>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default NavOptions;
