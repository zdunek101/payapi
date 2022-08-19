import React from "react";
import check from "../../files/assets/shared/desktop/icon-check.svg";

const ListItem = ({ text, avalible }) => {
  const isCheck = avalible;

  const listyle = {
    listStyle: `${isCheck === true ? `url(${check})` : "none"}`,
    opacity: `${isCheck === false ? `50%` : ""}`,
  };

  return (
    <>
      <li style={listyle} className="plan__package__benefits">
        {text}
      </li>
    </>
  );
};

export default ListItem;
