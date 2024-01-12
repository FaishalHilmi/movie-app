import axios from "axios";

const getMovies = async (callback) => {
  try {
    const response = await axios.get(
      // "https://api.themoviedb.org/3/movie/popular?api_key=a35f55b831697725b5b0b7255abc3736"
      `${import.meta.env.VITE_REACT_APP_URL_MOVIES}movie/popular${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );
    const request = await response.data;
    const result = await request.results;
    callback(result);
  } catch (error) {
    console.log(error);
  }
};

export default getMovies;
