import React, { useState, useEffect } from "react";
import MoviesPage from "../component/layout/MoviesPage";
import Navigasibar from "../component/layout/Navigasibar";
import getMovies from "../services/getMovies.service";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies((movies) => setMovies(movies));
  }, []);

  return (
    <main className="bg-primary">
      <Navigasibar />
      <MoviesPage movies={movies} />
    </main>
  );
}

export default Movies;
