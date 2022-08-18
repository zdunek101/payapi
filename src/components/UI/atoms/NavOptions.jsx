import React from "react";

const NavOptions = ({ modification }) => {
  return (
    <ul className={`navOptions${modification}`}>
      <li className={`navOptions__item${modification}`}>
        <a href="/">Pricing</a>
      </li>
      <li className={`navOptions__item${modification}`}>
        <a href="/">About</a>
      </li>
      <li className={`navOptions__item${modification}`}>
        <a href="/">Contact</a>
      </li>
    </ul>
  );
};

export default NavOptions;
