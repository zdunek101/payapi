import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/UI/pages/main.scss";
// import App from "./App";
import NavBar from "./components/UI/molecules/NavBar";
import Home from "./components/UI/pages/home/Home";
import Pricing from "./components/UI/pages/Pricing";
import Footer from "./components/UI/organisms/Footer";
import About from "./components/UI/pages/About";
import Contact from "./components/UI/pages/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
