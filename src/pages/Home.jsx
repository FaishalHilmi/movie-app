import React, { useState, useEffect } from "react";
import HeroPage from "../component/fragment/HeroPage";
import Popular from "../component/layout/Popular";
import FreeToWatch from "../component/layout/FreeToWatch";
import getPopular from "../services/getPopular.service";
import getMovies from "../services/getMovies.service";
import getTvShow from "../services/getTvShow.service";
import Navigasibar from "../component/layout/Navigasibar";

function Home() {
  const [popular, setPopular] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tvShow, setTvShow] = useState([]);

  useEffect(() => {
    getPopular((popular) => setPopular(popular));
  }, []);

  useEffect(() => {
    getMovies((movies) => setMovies(movies));
  }, []);

  useEffect(() => {
    getTvShow((tvShow) => setTvShow(tvShow));
  }, []);

  return (
    <main>
      <Navigasibar />
      <HeroPage movies={tvShow} />
      <Popular movies={popular} title="Popular" />
      <FreeToWatch movies={movies} tvShow={popular} title="Free To Watch" />
    </main>
  );
}

export default Home;
