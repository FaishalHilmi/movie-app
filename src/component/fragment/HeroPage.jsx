import React from "react";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function HeroPage({ movies }) {
  return (
    <section>
      <div className="hero-page h-screen  bg-slate-700 font-figtree">
        <Swiper className="mySwiper h-screen">
          {movies.map((movie) => {
            return (
              <SwiperSlide
                className="flex justify-center items-center"
                key={movie.id}
              >
                <div className="content-wrapper h-full w-full">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt="gambar"
                    className="w-full h-full object-cover"
                  />
                  <div className="gradient h-full w-full bg-gradient-to-t from-primary to-transparent absolute top-0"></div>
                  <div className="relative border max-w-[1040px] mx-auto">
                    <div className="text absolute bottom-20 text-white">
                      <h2 className="text-[42px] font-bold font-roboto mb-3">
                        {movie.original_title}
                      </h2>
                      <p className="font-figtree">{movie.overview}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default HeroPage;
