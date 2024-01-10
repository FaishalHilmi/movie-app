import React, { useState, useEffect } from "react";
import DetailLayout from "../component/layout/DetailLayout";
import NavigasiBar from "../component/layout/Navigasibar";
import getPopular from "../services/getPopular.service";
import getMovies from "../services/getMovies.service";
import NavigasiBottom from "../component/layout/NavigasiBottom";
import Footer from "../component/layout/Footer";
import Popular from "../component/layout/Popular";

function Detail() {
  const [movies, setMovies] = useState([]);
  const [tvShow, setTvShow] = useState([]);
  const [join, setJoin] = useState();

  useEffect(() => {
    getPopular((popular) => setTvShow(popular));
  }, []);

  useEffect(() => {
    getMovies((movies) => setMovies(movies));
  }, []);

  useEffect(() => {
    const joinData = [...movies, ...tvShow];
    setJoin(joinData);
  }, [movies]);

  return (
    <main>
      <NavigasiBar />
      <DetailLayout movies={join} />
      <Popular movies={tvShow} title="Popular" />
      <Footer />
      <NavigasiBottom />
    </main>
  );
}

export default Detail;
