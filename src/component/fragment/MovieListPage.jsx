import React, { useEffect, useState } from "react";
import Input from "../element/Input/Input";
import Card from "../element/Card/Card";

function MovieListPage({ movies }) {
  const [dataMovies, setDataMovies] = useState([]);

  const handleDataFilter = (data) => {
    setDataMovies(data);
  };

  //   useEffect(() => {
  //     setDataMovies(dataMovies);
  //   }, [movies]);

  return (
    <div className="content-wrapper max-w-[1040px] mx-auto px-5 mt-20 md:mt-36">
      <div className="search-input flex justify-center mb-6 md:mb-20">
        <Input movies={movies} handleFilter={handleDataFilter} />
      </div>
      <div className="card-movies">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {dataMovies.length > 0
            ? dataMovies.map((movie) => <Card key={movie.id} {...movie} />)
            : movies.map((movie) => <Card key={movie.id} {...movie} />)}
        </div>
      </div>
    </div>
  );
}

export default MovieListPage;
