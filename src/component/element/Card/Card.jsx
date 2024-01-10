import React from "react";
import showFormattedDate from "../../../services/formatDate";
import { Link } from "react-router-dom";

function Card({
  poster_path,
  original_title,
  original_name,
  release_date,
  first_air_date,
  id,
}) {
  return (
    <Link to={`/detail/${id}`}>
      <div className="card-wrapper">
        <div className="image rounded-lg overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt="poster movie"
            className="hover:scale-110 transition hover:brightness-50"
            loading="lazy"
          />
        </div>
        <div className="text mt-3">
          <h1 className="mb-2 font-bold font-figtree">
            {original_name || original_title}
          </h1>
          <p className="text-cyan">
            {showFormattedDate(first_air_date || release_date)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
