import React from "react";

const NavOptions = ({ modification }) => {
  return (
    <ul className={`navOptions${modification}`}>
      <li className={`navOptions__item${modification}`}>
        <a href="/pricing">Pricing</a>
      </li>
      <li className={`navOptions__item${modification}`}>
        <a href="/about">About</a>
      </li>
      <li className={`navOptions__item${modification}`}>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  );
};

export default NavOptions;
