import React from "react";
import PopularPage from "../fragment/PopularPage";

function Popular({ movies }) {
  return (
    <section>
      <div className="bg-primary py-8">
        <PopularPage movies={movies} />
      </div>
    </section>
  );
}

export default Popular;
