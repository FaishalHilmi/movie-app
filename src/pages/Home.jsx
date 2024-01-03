import React, { useState, useEffect } from "react";
import Navbar from "../component/fragment/Navbar";
import HeroPage from "../component/fragment/HeroPage";
import axios from "axios";
import Popular from "../component/layout/Popular";

function Home() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=a35f55b831697725b5b0b7255abc3736"
    );
    const request = await response.data;
    const result = await request.results;

    setMovies(result);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Navbar />
      <HeroPage movies={movies} />
      <Popular movies={movies} />
    </>
  );
}

export default Home;
