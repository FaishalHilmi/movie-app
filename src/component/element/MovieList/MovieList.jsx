import { useEffect } from "react";
// import Card from "../Card/Card";
// import showFormattedDate from "../../../services/formatDate";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";

function MovieList({ movies }) {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={12}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 12,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 12,
        },
      }}
      className="mySwiper"
    >
      {movies > 0
        ? null
        : movies.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <Card {...movie} />
              </SwiperSlide>
            );
          })}
    </Swiper>
  );
}

export default MovieList;
