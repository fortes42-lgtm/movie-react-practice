const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMovies(endpoint, {movieId} = {}) {
  let path = endpoint;

  if (movieId && typeof endpoint === 'function'){
    path = endpoint(movieId);
  }else if(movieId){
    path = `${endpoint}/${movieId}`;
  }
  
  const url = `${BASE_URL}/${path}?api_key=${API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`API 요청 실패: ${response.status}`);
      throw new Error(`Http Error! Status: ${response.status}`);
    }
    const data = await response.json();

    if(data && data.results){
      return data.results
    }
    return data;
  } catch (error) {
    console.error(
      `${endpoint}에서 데이터를 불러오는데 실패했습니다:`,
      error.message
    );
    return null;
  }
}
