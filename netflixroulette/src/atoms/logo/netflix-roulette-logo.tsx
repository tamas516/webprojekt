import { Heading, HeadingProps, Link, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

export const NetflixRouletteLogo: FC<HeadingProps> = (props) => {
   return (
    <Link
        href="/"
        _hover={{
         textDecoration: "none",
         }}
    >
        <Heading fontSize="xl" color="text.highlighted" {...props}>
         <Text as="span" fontWeight="900">netflix</Text>
         <Text as="span" fontWeight="500">roulette</Text>
        </Heading>
    </Link>
   );
};