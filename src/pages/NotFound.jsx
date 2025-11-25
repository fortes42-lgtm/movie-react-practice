// src/pages/NotFound.jsx
import { Link } from "react-router";
import { TEXT_STYLES } from "../constants/style";

export const NotFound = () => {
  return (
    <div className="p-12 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className={TEXT_STYLES.BLUE_LINK}>
        Go to Home
      </Link>
    </div>
  );
};
