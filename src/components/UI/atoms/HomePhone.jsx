import React from "react";
import phone from "../../files/assets/home/desktop/iphone.svg";
import { ReactComponent as Phone } from "../../files/assets/home/desktop/iphone.svg";

const HomePhone = () => {
  return (
    <>
      <img src={phone} alt={"phone screen API demo"} className="home__image"></img>
      {/* <div className="home__image ">
        <Phone />
      </div> */}
    </>
  );
};

export default HomePhone;
