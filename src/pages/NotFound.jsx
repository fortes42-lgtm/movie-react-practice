// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go to Home
      </Link>
    </div>
  );
};
