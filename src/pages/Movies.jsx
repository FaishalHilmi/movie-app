import React, { useState, useEffect } from "react";
import MoviesPage from "../component/layout/MoviesPage";
import Navigasibar from "../component/layout/Navigasibar";
import getMovies from "../services/getMovies.service";
import Footer from "../component/layout/Footer";
import NavigasiBottom from "../component/layout/NavigasiBottom";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies((movies) => setMovies(movies));
  }, []);

  return (
    <main className="bg-gradient-to-br from-primary to-secondary min-h-screen">
      <Navigasibar />
      <MoviesPage movies={movies} />
      <Footer />
      <NavigasiBottom />
    </main>
  );
}

export default Movies;
