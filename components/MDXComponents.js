/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box, Heading, Link, Text } from '@chakra-ui/react';

const MDXComponents = {
  h1: (props) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props) => (
    <Heading as="h2" fontWeight="bold" size="lg" mb="1em" mt="2em" {...props} />
  ),
  h3: (props) => (
    <Heading as="h3" size="md" fontWeight="bold" mb="1em" mt="2em" {...props} />
  ),
  br: (props) => <Box height="24px" {...props} />,
  a: (props) => <Link {...props} />,
  p: (props) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" pb={1} {...props} />,
};

export default MDXComponents;
