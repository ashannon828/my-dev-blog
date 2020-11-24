/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box, Heading, Link, Text } from '@chakra-ui/react';

const MDXComponents = {
  h1: (props) => <Heading as="h1" {...props} />,
  h2: (props) => <Heading as="h2" {...props} />,
  h3: (props) => <Heading as="h3" {...props} />,
  br: (props) => <Box {...props} />,
  a: (props) => <Link color="purple.500" {...props} />,
  p: (props) => <Text as="p" {...props} />,
  ul: (props) => <Box as="ul" {...props} />,
  li: (props) => <Box as="li" {...props} />,
};

export default MDXComponents;
