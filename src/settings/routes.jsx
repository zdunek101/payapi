import React, { lazy } from "react";
import { Route } from "react-router-dom";

const Home = lazy(() => import("../components/UI/pages/home/Index"));
const Pricing = lazy(() => import("../components/UI/pages/pricing/Index"));
const About = lazy(() => import("../components/UI/pages/about/Index"));
const Contact = lazy(() => import("../components/UI/pages/contact/Index"));

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
