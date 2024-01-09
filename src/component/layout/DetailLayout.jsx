import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function DetailLayout({ movies }) {
  const [movie, setMovie] = useState();

  const { original_title } = useParams();

  useEffect(() => {
    if (movies) {
      const findMovie = movies.find(
        (movie) =>
          movie.original_title === original_title ||
          movie.original_name === original_title
      );
      setMovie(findMovie);
    }
  }, [movies, movie]);

  return (
    <div className="content min-h-screen bg-secondary relative font-roboto">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="backdrop"
        className="w-full h-full absolute object-cover"
      />
      <div className="w-full h-full backdrop-blur-sm bg-gradient-to-t from-primary to-transparent absolute"></div>
      <div className="content-wrapper text-white pt-20 max-w-[1040px] px-5 md:px-0 mx-auto relative z-10">
        <div className="detail-movie min-h-screen">
          <Link to="/">
            <div className="bg-primary py-2 px-4 rounded-full flex items-center w-fit hover:bg-secondary transition-all">
              <FaArrowLeft /> <span className="ps-2">Kembali</span>
            </div>
          </Link>
          <div className="movie-content mt-7">
            <div className="poster-movie mb-8">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="poster"
                className="w-52 mx-auto rounded-lg shadow-md shadow-shadow"
              />
            </div>
            <div className="info-movie">
              <h1 className="font-bold text-2xl mb-2">
                {movie.original_title || movie.original_name}
              </h1>
              <p className="[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]">
                {movie.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailLayout;
