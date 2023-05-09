import React, { VFC } from "react";
import {
  AspectRatio,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Movie } from "../../../model";
import { MovieItemMenu } from "./movie-item-menu";

export interface MovieListItemProps {
  movie: Movie;
}

export const MovieListItem: VFC<MovieListItemProps> = ({ movie }) => {
  const style = useMultiStyleConfig("MovieListItem", []);
  return (
    <LinkBox as="article" role="group" position="relative">
      <AspectRatio ratio={322 / 455} marginBottom={6}>
         <Image src={movie.poster_path} />
      </AspectRatio>
      <MovieItemMenu
        sx={style.menu}
        movieId={movie.id!}
        placement="bottom-end"
      />
      <Flex sx={style.description}>
        <LinkOverlay as={Link} to={`movie/${movie.id}`}>
          <Heading as="header" sx={style.header}>
            <Text as="h4" fontSize="lg" fontWeight="medium">{movie.title}</Text>
            {movie.tagline && <Text fontSize="sm">{movie.tagline}</Text>}
          </Heading>
        </LinkOverlay>
        <Text as="time" sx={style.releaseDate}>
          {movie.release_date.getFullYear()}
        </Text>
      </Flex>
    </LinkBox>
  );
};
