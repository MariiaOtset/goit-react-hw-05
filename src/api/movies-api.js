import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzlhN2ZjNWNhNzZlOTc5NDQzMjMwNzZhZDc4N2Q5NiIsIm5iZiI6MTcyMDEyMTQ2Ni43MDIzMTYsInN1YiI6IjY2ODZlYTlhZmJkZmJjNTJlNjVkMmU5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Enyp4puO8zXKW9Kn2sZURdVVadSrbrgeYL-d3RActlg";
axios.defaults.params = {
  per_page: 20,
};
