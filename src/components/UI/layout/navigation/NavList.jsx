import React from "react";
import { Link } from "react-router-dom";
import { NavigationList, ListElement } from "./style";

const NavOptions = ({ handleClick, footer }) => {
  const list = ["Pricing", "About", "Contact"];
  return (
    <NavigationList>
      {list.map((list, key) => (
        <ListElement onClick={handleClick} key={key} footer={footer}>
          <Link to={`/${list}`}>{list}</Link>
        </ListElement>
      ))}
    </NavigationList>
  );
};

export default NavOptions;
