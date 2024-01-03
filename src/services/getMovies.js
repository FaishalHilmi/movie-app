useEffect(() => {
  const getMovies = async () => {
    const urlMovies = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=a35f55b831697725b5b0b7255abc3736"
    );
    const request = urlMovies.data;
    const result = request.results;

    setMovies(result);
  };

  getMovies();
}, []);
