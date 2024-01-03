import React from "react";
import showFormattedDate from "../../../services/formatDate";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

function MovieList({ movies }) {
  return (
    <div className="list-wrapper">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 12,
          },
        }}
        className="mySwiper"
      >
        {movies.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <div className="card-wrapper">
                <div className="image rounded-lg overflow-hidden">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt="poster movie"
                  />
                </div>
                <div className="text mt-3">
                  <h1 className="mb-2 font-bold font-figtree">
                    {movie.original_title}
                  </h1>
                  <p className="text-cyan">
                    {showFormattedDate(movie.release_date)}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MovieList;
