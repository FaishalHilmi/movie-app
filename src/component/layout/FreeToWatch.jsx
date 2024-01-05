import React from "react";
import FreeToWatchPage from "../fragment/FreeToWatchPage";

function FreeToWatch({ movies, tvShow, title }) {
  return (
    <section>
      <div className="bg-primary py-8">
        <FreeToWatchPage movies={movies} tvShow={tvShow} title={title} />
      </div>
    </section>
  );
}

export default FreeToWatch;
