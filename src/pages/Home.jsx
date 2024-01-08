import React, { useState, useEffect } from "react";
import HeroPage from "../component/fragment/HeroPage";
import Popular from "../component/layout/Popular";
import FreeToWatch from "../component/layout/FreeToWatch";
import getPopular from "../services/getPopular.service";
import getMovies from "../services/getMovies.service";
import getTvShow from "../services/getTvShow.service";
import Navigasibar from "../component/layout/Navigasibar";
import Footer from "../component/layout/Footer";
import NavigasiBottom from "../component/layout/NavigasiBottom";

function Home() {
  const [popular, setPopular] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tvShow, setTvShow] = useState([]);
  const [gabung, setGabung] = useState();

  useEffect(() => {
    getPopular((popular) => setPopular(popular));
  }, []);

  useEffect(() => {
    getMovies((movies) => setMovies(movies));
  }, []);

  useEffect(() => {
    getTvShow((tvShow) => setTvShow(tvShow));
  }, []);

  // useEffect(() => {
  //   const gabung = [...tvShow, ...movies];
  //   setGabung(gabung);
  //   console.log(gabung);
  // }, [tvShow, movies]);

  return (
    <main className="relative bg-primary">
      <Navigasibar />
      <HeroPage movies={tvShow} />
      <Popular movies={popular} title="Popular" />
      <FreeToWatch movies={movies} tvShow={popular} title="Free To Watch" />
      <Footer />
      <NavigasiBottom />
    </main>
  );
}

export default Home;
