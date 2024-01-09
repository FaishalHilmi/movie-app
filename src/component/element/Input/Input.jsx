function Input({ movies, handleFilter }) {
  const getDataFilter = (moviesFilter) => {
    const getMoviesFilter = movies.filter((movie) => {
      if (movie.original_name) {
        return movie.original_name
          .toLowerCase()
          .includes(moviesFilter.toLowerCase());
      } else {
        return movie.original_title
          .toLowerCase()
          .includes(moviesFilter.toLowerCase());
      }
    });

    handleFilter(getMoviesFilter);
  };

  // useEffect(() => {}, [movies]);

  return (
    <input
      type="search"
      className="border-none focus:border-none w-4/5 md:w-2/3 px-3 py-2 md:px-4 md:py-2 text-primary rounded-full placeholder:text-gray-300 shadow-lg focus:shadow-slate-600 transition"
      placeholder="Search movies..."
      onChange={(search) => getDataFilter(search.target.value)}
    />
  );
}

export default Input;
