import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Tvshow from "../pages/Tvshow";
import Detail from "../pages/Detail";

function RouteLink() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshow" element={<Tvshow />} />
        <Route path="/detail/:original_title" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default RouteLink;
