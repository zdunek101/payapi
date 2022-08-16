import React from "react";
import { ReactComponent as Phone } from "../../files/assets/home/desktop/illustration-phone-mockup.svg";
import HomePhone from "../atoms/HomePhone";

const Home = () => {
  return (
    <>
      <div className="home__container">
        <HomePhone />
      </div>
    </>
  );
};

export default Home;
