import Hero from "../element/Hero/Hero";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css/effect-fade";
import "swiper/css";

function HeroPage({ movies }) {
  return (
    <section>
      <div className="hero-page h-screen  bg-slate-700 font-figtree">
        <Swiper
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper h-screen"
        >
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
