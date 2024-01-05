import React, { useEffect, useState } from "react";

function ButtonList({
  firstButton,
  secondButton,
  handleMovies,
  tvShow,
  movies,
}) {
  const [active, setActive] = useState("");
  const [selected, setSelected] = useState([]);

  const getMovieList = () => {
    if (active === "active") {
      setActive("noactive");
      setSelected(movies);
      handleMovies(selected);
      console.log(selected);
    } else {
      setActive("active");
    }
  };

  const getTvShowList = () => {
    if (active === "active") {
      setActive("noactive");
      console.log("noaktif");
      setSelected(tvShow);
      handleMovies(selected);
    } else {
      setActive("active");
      console.log("aktif");
    }
  };

  // const getMovieList = () => {
  //   if (active === "active") {
  //     setActive("noactive");
  //     setSelected(movies);
  //   } else {
  //     setActive("active");
  //   }
  // };

  // const getTvShowList = () => {
  //   if (active === "active") {
  //     setActive("noactive");
  //     setSelected(tvShow);
  //   } else {
  //     setActive("active");
  //   }
  // };

  useEffect(() => {
    if (active === "noactive") {
      handleMovies(selected);
      console.log(selected);
    }
  }, [active, selected, handleMovies]);

  return (
    <div className="button md:ms-16 flex gap-2 md:gap-4">
      <button
        onClick={() => getMovieList()}
        className={`px-3 py-2 md:px-4 md:py-2 text-[12px] md:text-base rounded-full border border-cyan ${
          active == "active" || active == ""
            ? "text-white bg-cyan"
            : "text-cyan"
        }`}
      >
        {firstButton}
      </button>
      <button
        onClick={() => getTvShowList()}
        className={`px-3 py-2 md:px-4 md:py-2 text-[12px] md:text-base rounded-full border border-cyan ${
          active == "active" || active == ""
            ? "text-cyan"
            : "text-white bg-cyan"
        }`}
      >
        {secondButton}
      </button>
    </div>
  );
}

export default ButtonList;
