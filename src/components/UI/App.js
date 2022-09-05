import React, { Suspense } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import "./pages/main.scss";
import NavBar from "./molecules/NavBar";
import Footer from "./organisms/Footer";
import { routeComponents } from "../../settings/routes";
import FormDemo from "./molecules/FormDemo";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Suspense>
          <Routes>{routeComponents}</Routes>
          <FormDemo className={"form"} bottom={true} />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;