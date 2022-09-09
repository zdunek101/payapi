import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "../../settings/normalize.scss";
import NavBar from "./layout/navigation/NavBar";
import { routeComponents } from "../../settings/routes";
import Footer from "./layout/footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Suspense>
          <Routes>
            {routeComponents}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
