import axios from "axios";

const getMovies = async (callback) => {
  try {
    const response = await axios.get(
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
