import React from "react";
import PopularPage from "../fragment/PopularPage";

function Popular({ movies, title }) {
  return (
    <section>
      <div className="bg-primary py-8">
        <PopularPage movies={movies} title={title} />
      </div>
    </section>
  );
}

export default Popular;
