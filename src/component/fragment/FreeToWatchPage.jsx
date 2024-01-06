import React, { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import TitleList from "../element/MovieList/TitleList";
import MovieList from "../element/MovieList/MovieList";

function FreeToWatchPage({ movies, tvShow, title }) {
  const [filterSelected, setFilterSelected] = useState([]);
  const [active, setActive] = useState("movies");

  const getMovieList = () => {
    setActive("movies"); // Set filterSelected to identify the active category
    setFilterSelected(movies);
  };

  const getTvShowList = () => {
    setActive("tvShow"); // Set filterSelected to identify the active category
    setFilterSelected(tvShow);
  };

  useEffect(() => {
    setFilterSelected(movies);
  }, [movies]);

  return (
    <div className="content-wrapper max-w-[1040px] px-5 md:px-0 mx-auto text-white">
      <div className="header flex justify-between items-center mb-6">
        <TitleList title={title} />
        <div className="button md:ms-16 flex gap-2 md:gap-4">
          <button
            onClick={getMovieList}
            className={`px-3 py-2 md:px-4 md:py-2 text-[12px] md:text-base rounded-full border border-cyan ${
              active === "movies" ? "text-white bg-cyan" : "text-cyan"
            }`}
          >
            Movies
          </button>
          <button
            onClick={getTvShowList}
            className={`px-3 py-2 md:px-4 md:py-2 text-[12px] md:text-base rounded-full border border-cyan ${
              active === "tvShow" ? "text-white bg-cyan" : "text-cyan"
            }`}
          >
            TV Show
          </button>
        </div>
      </div>
      <div className="movie-list">
        <MovieList movies={filterSelected} />
      </div>
    </div>
  );
}

export default FreeToWatchPage;
