import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzlhN2ZjNWNhNzZlOTc5NDQzMjMwNzZhZDc4N2Q5NiIsIm5iZiI6MTcyMDEyMTQ2Ni43MDIzMTYsInN1YiI6IjY2ODZlYTlhZmJkZmJjNTJlNjVkMmU5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Enyp4puO8zXKW9Kn2sZURdVVadSrbrgeYL-d3RActlg";
axios.defaults.params = {
  per_page: 20,
};

export async function fetchTrendingMovies() {
  try {
    const { data } = await axios.get("/trending/movie/day");
    return data.results;
  } catch (error) {
    alert("Error fetching movies");
  }
}

export async function fetchMoviesByQuery(query, page) {
  try {
    const response = await axios.get("/search/movie", {
      params: {
        query,
        page,
      },
    });
    return response;
  } catch (error) {
    alert("Error fetching movies");
  }
}

export async function fetchMovieDetails(movieId) {
  try {
    const response = await axios.get("/movie", {
      params: {
        movieId,
      },
    });
    return response;
  } catch (error) {
    alert("Error fetching movies");
  }
}

export async function fetchMovieCast(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`);
    return response.data.cast;
  } catch (error) {
    console.log("Error fetching cast");
    return [];
  }
}

export async function fetchMovieReviews(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}/reviews`);
    return response.data.results;
  } catch (error) {
    console.log("Error fetching reviews");
    return [];
  }
}
