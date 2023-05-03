import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "./theme"
import { NetflixRouletteLogo } from "./atoms/logo/netflix-roulette-logo"
import { MovieListPage } from "./components/pages/movie-list-pages"

export const App = () => (
  <ChakraProvider theme={theme}>
    <NetflixRouletteLogo/>
    <MovieListPage/>
  </ChakraProvider>
)
