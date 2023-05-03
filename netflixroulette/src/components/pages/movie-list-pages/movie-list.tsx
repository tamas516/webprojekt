import { Grid, GridItem } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Movie } from '../../../model';
import { MovieListItem } from './movie-list-item';

export interface MovieListProps {
    movies: Movie[];
}

export const MovieList: FC<MovieListProps> = ({ movies }) => {
    return (
        <Grid templateColumns="repeat(3, 1fr)" sx={{gap: 12}}>
            {movies.map((movie) => (
                <GridItem key={movie.id}>
                    <MovieListItem movie={movie} />
                </GridItem>
            ))}
        </Grid>
    );
};