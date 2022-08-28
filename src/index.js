import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/UI/pages/main.scss";
import NavBar from "./components/UI/molecules/NavBar";
import Footer from "./components/UI/organisms/Footer";

import routes from "./settings/routes";
import FormDemo from "./components/UI/molecules/FormDemo";

const routeComponents = routes.map(({ path, element }, key) => <Route exact path={path} element={element} key={key} />);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar />
    <Suspense fallback="loading...">
      <Routes>{routeComponents}</Routes>
      <FormDemo className={"form"} bottom={true} />
    </Suspense>
    <Footer />
  </BrowserRouter>
);
