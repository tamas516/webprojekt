import { Box } from '@chakra-ui/react';
import React, { FC, useMemo, useState } from 'react';
import { MovieList } from './movie-list';
import { Movie, MovieSortType, RawMovie } from '../../../model';
import { movieFactory } from '../../../utils/movie-factory';

import allMovies from '../../../data/movies.json';

export const MovieListPage: FC = () => {

    const [sorting, setSorting] = useState(MovieSortType.RELEASE_DATE);

    const movieList: Movie[] = useMemo(
     () => allMovies.map((movie) => movieFactory(movie as RawMovie)),
     []
    );
    const movies: Movie[] = useMemo(() => {
      const sorted = movieList.sort(
       (a: Movie, b: Movie) => {
        if (sorting === MovieSortType.RELEASE_DATE) {
         return b.release_date.getTime() - a.release_date.getTime();
       } else if (sorting === MovieSortType.RATING) {
         return (b.vote_average ?? 0) - (a.vote_average ?? 0);
       }
       return a.title.localeCompare(b.title);
      }
      );
     return sorted.slice(0, 6);
    }, [movieList, sorting]);
    
    
    return (
        <Box width="full" backgroundColor="background.dark">
            <MovieList movies={movies} />
        </Box>
    );
};