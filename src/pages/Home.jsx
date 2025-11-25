import { Link } from "react-router";
import Routes from "../constants/routes";
import { TEXT_STYLES } from "../constants/style";

const Home = () => {
  return (
    <div>
      <h1>Welcome Home!</h1>
      {/* Link to a hard-coded detail page for testing */}
      <Link to={Routes.TEST_DETAIL} className={TEXT_STYLES.BLUE_LINK}>
        Go to Test Detail Page
      </Link>
    </div>
  );
};

export default Home;
