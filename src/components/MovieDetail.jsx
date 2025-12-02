import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { fetchMovies } from "../api/movieApi";
import { ENDPOINTS } from "../constants/api_endpoints";
import { TEXT_STYLES } from "@/constants/style";

const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("Error: Movie ID가 URL에 없습니다.");
      setLoading(false);
      return;
    }
    const loadMovieDetails = async () => {
      setLoading(true);
      setError(null);

      const data = await fetchMovies(ENDPOINTS.DETAIL, { movieId: id });

      if (data && !data.success) {
        setMovie(data);
        setError(`영화를 찾지 못했습니다: ${id}`);
      } else if (data) {
        setMovie(data);
      } else {
        setError(
          "영화 상세 정보를 불러오는데 실패했습니다. 네트워크 이슈 혹은 유효하지 않은 ID",
        );
      }
      setLoading(false);
    };
    loadMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="">
        <p className="">영화 정보 불러오는 중... {id}...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="">
        <p className="">{error}</p>
        <Link
          to={Routes.HOME}
          className={`${TEXT_STYLES.BLUE_LINK} mt-4 block`}
        >
          &larr; 뒤로가기
        </Link>
      </div>
    );
  }
  if (!movie) {
    return <div className="">영화 정보가 없습니다.</div>;
  }
  return (
    <div className="">
      <h1 className="">{movie.title}</h1>
      <p className="">{movie.tagline}</p>

      <div className="">
        <div className="">
          <img src="" alt="" className="" />
        </div>

        <div className="">
          <h2 className="">Movie Overview</h2>
          <p className="">{movie.overview}</p>

          <div className="">
            <p>
              <span className="">Release Date:</span> {movie.release_date}
            </p>
            <p>
              <span className="">Rating:</span> {movie.vote_average}
            </p>
            <p>
              <span className="">Runtime:</span> {movie.runtime}
            </p>
            <p>
              <span className="">Genres:</span>{" "}
              {movie.genres?.map((g) => g.name).join(", ") || "N/A"}
            </p>
          </div>
        </div>
      </div>

      <div>
        <Link to={Routes.HOME} className={`${TEXT_STYLES.BLUE_LINK}`}>
          &larr;뒤로가기
        </Link>
      </div>
    </div>
  );
};

export default MovieDetail;
