// src/pages/Home.jsx (Example)
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Welcome Home!</h1>
      {/* Link to a hard-coded detail page for testing */}
      <Link to="/detail/123" className="text-blue-500 underline">
        Go to Detail Page for Item 123
      </Link>
    </div>
  );
};
