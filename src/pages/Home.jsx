import { Link } from "react-router";
import Routes from "@/constants/routes.js";
import { TEXT_STYLES } from "@/constants/style.js";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome Home!</h1>
      <Link to={Routes.TEST_DETAIL} className={TEXT_STYLES.BLUE_LINK}>
        Go to Test Detail Page
      </Link>
    </div>
  );
};

export default Home;
