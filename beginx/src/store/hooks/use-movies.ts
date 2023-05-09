import { useSelector } from "react-redux";
import { Movie } from "../../model";
import { movieFactory } from "../../utils/movie-factory";
import { GetMoviesQueryParams, moviesApi, useGetMoviesQuery } from "../movies/movies-api";
import { selectSearchText } from "../movies/search.slice";

export const useMovies = (query: GetMoviesQueryParams) => {
    const searchQuery = useSelector(selectSearchText);
    const queryParams = {
        ...query,
    };
    if (searchQuery) {
        queryParams.search = searchQuery;
        queryParams.searchBy = "title";
    }

    const {isLoading, isFetching, error} = useGetMoviesQuery(queryParams);

    let totalAmount = 0;
    let movies: Movie[] = [];

    const select = moviesApi.endpoints.getMovies.select(queryParams);
    const { data } = useSelector(select);

    if(data) {
        totalAmount = data.totalAmount;
        movies = data.data.map(movieFactory);
    }

    return {
        isLoading: isLoading || (isFetching),
        error,
        movies,
        totalAmount,
    };
};