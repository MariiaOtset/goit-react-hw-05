import { fetchMovieCast } from "../../api/movies-api";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import BackLink from "../BackLink/BackLink";
import css from "./MovieCast.module.css";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const location = useLocation();
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  useEffect(() => {
    async function fetchCast() {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <div className={css.container}>
      <h2>Movie Cast</h2>
      <BackLink to={location.state?.from ?? `/movies/${movieId}`}>
        Go back
      </BackLink>
      {cast.length === 0 ? (
        <p>No cast information available</p>
      ) : (
        <ul className={css.castList}>
          {cast.map((actor) => (
            <li key={actor.id} className={css.castItem}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.name}
                className={css.castImage}
              />
              <div className={css.castInfo}>
                <h3>{actor.name}</h3>
                <p>Character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieCast;
