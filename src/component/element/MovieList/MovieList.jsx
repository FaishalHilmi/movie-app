import React from "react";
import Card from "../Card/Card";

function MovieList({ movies }) {
  return (
    <div className="list-wrapper">
      <Card movies={movies} />
    </div>
  );
}

export default MovieList;
