import React, { useState, useEffect } from "react";
import MoviesPage from "../component/layout/MoviesPage";
import Navigasibar from "../component/layout/Navigasibar";
import getPopular from "../services/getPopular.service";
import Footer from "../component/layout/Footer";
import NavigasiBottom from "../component/layout/NavigasiBottom";

function Tvshow() {
  const [tvShow, setTvShow] = useState([]);

  useEffect(() => {
    getPopular((popular) => setTvShow(popular));
  });

  return (
    <main className="bg-gradient-to-br from-primary to-secondary min-h-screen ">
      <Navigasibar />
      <MoviesPage movies={tvShow} />
      <Footer />
      <NavigasiBottom />
    </main>
  );
}

export default Tvshow;
