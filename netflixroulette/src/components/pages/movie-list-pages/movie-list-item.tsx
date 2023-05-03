import React, { FC } from 'react';
import { Movie } from '../../../model';
import { AspectRatio, Flex, Heading, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';

export interface MovieListItemProps {
    movie: Movie;
}

export const MovieListItem: FC<MovieListItemProps> = ({movie}) => {
    return (
        <LinkBox as="article">
            <AspectRatio ratio={322 / 455} marginBottom={6}>
                <Image src={movie.poster_path} />
            </AspectRatio>
            <Flex justifyContent="space-between" opacity={0.5}>
                <LinkOverlay href={'/movie/${movie.id}'}>
                    <Heading as="header" flexGrow={1} gap={2} display="flex" flexDirection="column">
                        <Text as="h4" fontSize="lg" fontWeight="medium">{movie.title}</Text>
                        {movie.tagLine && <Text fontSize="sm">{movie.tagLine}</Text>}
                    </Heading>
                </LinkOverlay>
                <Text 
                    as="time"
                    sx={{
                        border: "solid 1px",
                        borderColor: "border.default",
                        borderRadius: 4,
                        fontSize: "sm",
                        paddingX: 2,
                        paddingY: 1,
                }}>
                    {movie.release_date.getFullYear()}
                </Text>
            </Flex>
        </LinkBox>
    );
};