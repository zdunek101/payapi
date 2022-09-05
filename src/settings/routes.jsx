import React, { lazy } from "react";
import { Route } from "react-router-dom";

const Home = lazy(() => import("../components/UI/pages/home/Home"));
const Pricing = lazy(() => import("../components/UI/pages/pricing/Pricing"));
const About = lazy(() => import("../components/UI/pages/about/About"));
const Contact = lazy(() => import("../components/UI/pages/Contact"));

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

export const routeComponents = routes.map(({ path, element }, key) => (
  <Route exact path={path} element={element} key={key} />
));