import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/UI/pages/main.scss";
import App from "./App";
import NavBar from "./components/UI/molecules/NavBar";
import Home from "./components/UI/pages/home/Home";
import Partners from "./components/UI/organisms/Partners";
import Info from "./components/UI/organisms/Info";
import Footer from "./components/UI/organisms/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
    <Home />
    <Partners />
    <Info />
    <Footer />
  </BrowserRouter>
);
