import React, { useState, useEffect } from "react";
import Navbar from "../component/fragment/Navbar";
import HeroPage from "../component/fragment/HeroPage";
import Popular from "../component/layout/Popular";
import FreeToWatch from "../component/layout/FreeToWatch";
import getPopular from "../services/getPopular.service";
import getMovies from "../services/getMovies.service";
import axios from "axios";
import getTvShow from "../services/getTvShow.service";

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
    <>
      <Navbar />
      <HeroPage movies={popular} />
      <Popular movies={popular} title="Popular" />
      <FreeToWatch movies={movies} tvShow={tvShow} title="Free To Watch" />
    </>
  );
}

export default Home;
