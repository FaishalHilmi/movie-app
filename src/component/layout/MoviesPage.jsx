import React from "react";
import MovieListPage from "../fragment/MovieListPage";

function MoviesPage({ movies }) {
  return (
    <section>
      <div className="content text-white font-roboto mb-20">
        <MovieListPage movies={movies} />
      </div>
    </section>
  );
}

export default MoviesPage;
