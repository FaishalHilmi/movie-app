import React, { useState, useEffect } from "react";
import MoviesPage from "../component/layout/MoviesPage";
import Navigasibar from "../component/layout/Navigasibar";
import getPopular from "../services/getPopular.service";

function Tvshow() {
  const [tvShow, setTvShow] = useState([]);

  useEffect(() => {
    getPopular((popular) => setTvShow(popular));
  });

  return (
    <main className="bg-gradient-to-br from-primary to-secondary">
      <Navigasibar />
      <MoviesPage movies={tvShow} />
    </main>
  );
}

export default Tvshow;
