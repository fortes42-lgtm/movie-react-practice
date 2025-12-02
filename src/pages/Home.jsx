import { Link } from "react-router";
import {useEffect, useState} from 'react'
import Routes from "@/constants/routes.js";
import { TEXT_STYLES } from "@/constants/style.js";
import { fetchMovies } from "@/api/movieApi";
import 
import { ENDPOINTS } from "@/constants/api_endpoints";

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
