import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/UI/pages/main.scss";
// import App from "./App";
import NavBar from "./components/UI/molecules/NavBar";
import Home from "./components/UI/pages/home/Home";
import Footer from "./components/UI/organisms/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>{/* <Route path="/" element={}></Route> */}</Routes>
    <Home />
    <Footer />
  </BrowserRouter>
);
