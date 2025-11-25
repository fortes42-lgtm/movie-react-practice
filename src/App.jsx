import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home.jsx";
import { Detail } from "./pages/Detail.jsx";
import { NotFound } from "./pages/NotFound.jsx";

// Define routes array
const APP_ROUTES = [
  { element: <Home />, path: "/" },
  { element: <Detail />, path: "/detail/:id" },
  { element: <NotFound />, path: "*" },
];

// map through routes to create Route components
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {APP_ROUTES.map((route) => (
            <Route element={route.element} key={route.path} path={route.path} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
