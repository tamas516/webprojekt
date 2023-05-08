import React from "react"
import { Routes, Route } from "react-router-dom"

import { NetflixRoulettePage } from "./layout/netflix-roulette-page";
import { PageHeader } from "./components/page-header/page-header";
import { MovieListPage } from "./components/pages/movie-list-page";
import { MoviePage } from "./components/pages/movie-page/movie-page";

export const App = () => (
  <NetflixRoulettePage>
    <Routes>
      <Route path="/" element={<PageHeader />} />
      <Route path="/movie/:movieId" element={<MoviePage />} />
    </Routes>

    <MovieListPage />
  </NetflixRoulettePage>
)
