import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Tvshow from "../pages/Tvshow";

function RouteLink() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshow" element={<Tvshow />} />
      </Routes>
    </Router>
  );
}

export default RouteLink;
