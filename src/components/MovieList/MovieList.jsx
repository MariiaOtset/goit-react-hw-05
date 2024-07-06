import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

function MovieList({ movies, state }) {
  return (
    <>
      <ul className={css.movieList}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.movieItem}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ ...state, movie }}
              className={css.movieLink}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={css.movieImage}
              />
              <div className={css.movieInfo}>
                <h2 className={css.movieTitle}>{movie.title}</h2>
                <p className={css.movieReleaseDate}>{movie.release_date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MovieList;
