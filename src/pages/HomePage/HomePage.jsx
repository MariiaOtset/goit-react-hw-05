import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../../api/movies-api";
import css from "./HomePage.module.css";
import { useLocation } from "react-router-dom";

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchTrending() {
      try {
        const data = await fetchTrendingMovies();
        setTrendingMovies(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrending();
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.heading}>Trending today</h1>
      <MovieList movies={trendingMovies} state={{ from: location }} />
    </div>
  );
}

export default HomePage;
