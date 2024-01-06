import React from "react";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Hero from "../element/Hero/Hero";

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
                <Hero {...movie} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default HeroPage;
