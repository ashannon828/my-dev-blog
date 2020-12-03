/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Flex, Image, Heading, Text } from '@chakra-ui/react';
import Layout from './Layout';

function PostLayout({ meta, children }) {
  const { title, author, date, imgSrc } = meta;
  return (
    <Layout>
      <Heading as="h1" size="2xl">
        {title}
      </Heading>
      <Flex m="20px 0">
        <Image mr="10px" borderRadius="full" boxSize="24px" src={imgSrc} />
        <Text>
          {author} / {date}
        </Text>
      </Flex>
      <Box as="article">{children}</Box>
    </Layout>
  );
}

export default PostLayout;
