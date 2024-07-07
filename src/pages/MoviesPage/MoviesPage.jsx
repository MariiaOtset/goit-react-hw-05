import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import { fetchMoviesByQuery } from "../../api/movies-api";
import css from "./MoviesPage.module.css";

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("");

  const [params, setParams] = useSearchParams();
  const location = useLocation();

  const searchQuery = params.get("search");

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const getMovies = async () => {
      setIsLoading(true);
      setError(false);

      try {
        const { data } = await fetchMoviesByQuery(searchQuery, page);
        setSearchedMovies((prev) =>
          page === 1 ? data.results : [...prev, ...data.results]
        );
        setIsVisible(data.results.length > 0);
        setStatus(data.results.length > 0 ? "success" : "rejected");
      } catch (error) {
        setError(true);
        toast.error("Error fetching movies, try again");
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [searchQuery, page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query.trim()) {
      toast.error("Search query is required");
      return;
    }

    setParams({ search: query });
    setPage(1);

    // if (searchedMovies.length === 0) {
    //   toast.error("No matching results found");
    // }
  };

  const handleOnChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <h1>Movies Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter name of the film to search"
          value={query}
          onChange={handleOnChange}
        />
        <button className={css.btn} type="submit">
          Search
        </button>
        <Toaster position="top-right" />
      </form>

      {isLoading && <p>Loading..</p>}
      {error && <p>Error loading movies</p>}
      {status === "rejected" && <p>No movies were found :(</p>}

      <MovieList
        movies={searchedMovies}
        state={{ from: location, searchQuery, page }}
      />
      {isVisible && <LoadMoreBtn onClick={handleLoadMore} />}
    </>
  );
}

export default MoviesPage;
