import React from "react";

function Hero({ backdrop_path, original_title, overview }) {
  return (
    <div className="content-wrapper h-full w-full">
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt="gambar"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="gradient h-full w-full bg-gradient-to-t from-primary to-transparent absolute top-0"></div>
      <div className="relative max-w-[1040px] px-5 md:px-0 mx-auto">
        <div className="text absolute bottom-10 text-white px-5 md:px-0 left-0">
          <h2 className="text-3xl md:text-[42px] font-bold font-roboto mb-3">
            {original_title}
          </h2>
          <p className="font-figtree">{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
