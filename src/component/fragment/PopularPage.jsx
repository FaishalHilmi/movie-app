import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import TitleList from "../element/MovieList/TitleList";
import ButtonList from "../element/MovieList/ButtonList";
import MovieList from "../element/MovieList/MovieList";

function PopularPage({ movies }) {
  return (
    <div className="content-wrapper max-w-[1040px] mx-auto text-white">
      <div className="header flex items-center mb-9">
        <TitleList />
        <ButtonList />
      </div>
      <div className="movie-list">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default PopularPage;
