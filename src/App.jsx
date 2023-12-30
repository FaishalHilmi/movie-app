import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // const getMovies = async () => {
    //   const data = await fetch(
    //     "https://api.themoviedb.org/3/discover/movie?api_key=a35f55b831697725b5b0b7255abc3736",
    //     {
    //       params: {
    //         movies_id: 1075794,
    //       },
    //     }
    //   );
    //   const res = await data.json();

    //   setMovies(res.results);
    // };

    const getMovies = async () => {
      const urlMovies = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=a35f55b831697725b5b0b7255abc3736"
      );
      const res = urlMovies.data;
      const result = res.results;

      setMovies(result);
    };

    getMovies();
    // console.log(movies);
  }, []);

  return (
    <>
      <div className="wrapper ">
        {movies.map((movies) => (
          <div key={movies.id}>
            <p>{movies.title}</p>
            <p>{movies.release_date}</p>
            <img
              src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`}
              alt="poster"
            />
            <p>{movies.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/w300${movies.backdrop_path}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
