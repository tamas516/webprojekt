import { Skeleton } from "@chakra-ui/react";
import React, { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Movie } from "../../../model";
import { useMovie } from "../../../store/hooks/use-movie";
import { useMovieChanges } from "../../../store/hooks/use-movie-changes";
import { closeEditor, selectEditor, setMovie } from "../../../store/movies/editor.slice";
import { movieFactory, serializeMovie } from "../../../utils/movie-factory";

import { MovieEditorModal } from "./movie-editor-modal";
import { MovieForm } from "./movie-form";

export const MovieEditorProvider: FC = () => {
    const dispatch = useDispatch();
    const { showEditor, movieId, movie } = useSelector(selectEditor);
    const { movie: selectedMovie } = useMovie(movieId);
    const { save } = useMovieChanges();

    const onClose = useCallback(() => {
        dispatch(closeEditor());
    }, [dispatch]);

    const onSubmit = useCallback(async (movie: Movie) => {
        await save(movie);
        dispatch(closeEditor());
    }, [save, dispatch]);

    useEffect(() => {
        if(selectedMovie) {
            dispatch(
                setMovie(serializeMovie(selectedMovie))
            )
        }
    }, [selectedMovie, dispatch]);

    return (
        <MovieEditorModal title={movieId ? "Edit movie" : "Add movie"}
         onClose={onClose}
         isOpen={showEditor}>
            <Skeleton isLoaded={!!movie}>
                {movie && <MovieForm movie={movieFactory(movie)} onSubmit={onSubmit} />}
            </Skeleton>
         </MovieEditorModal>
    );
};