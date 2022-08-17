import React from "react";
import HomePhone from "../atoms/HomePhone";
import Title from "../atoms/Title";
import FormDemo from "../molecules/FormDemo";

const Home = () => {
  return (
    <>
      <div className="home__container">
        <HomePhone />
        <div className="home__container--supp">
          <Title component={"home"} text={"Start building with our APIs for absolutely free."} />
          <FormDemo component={"home"} text="Schedule a Demo" />
          <p className="home__text">
            Have any questions?{" "}
            <a className="home__text--link" href="/">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
